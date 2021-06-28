// В качестве эксперимента доработайте нашу функцию loadScript
// Её аргументы:

/**
 * * обнаруживать повторно запрашиваемые зависимости ине загружать их: ситуация,
 *  когда модуль А зависит от В, и С зависит от В.
 *  Буду делать это через поиск в DOM элементов
 * @param {string} src адрес файла 
 * @param {func} callback callback функция
 */
let loadingMechanism = (src, callback) => {
    let boolean = document.querySelector(`script[src="${src}"]`) == null
    if (boolean) {
        let script = document.createElement('script');
        script.src = src;
        script.onload = callback;
        document.head.append(script);
    }
    else {
        console.log(src + ' уже загружен')
    }
};


// Первый аргумент: коллбек или строка с url до файла или массив с url до файлов зависимостей;
// строка и callBack
function loadScriptString(src, callback) {
    loadingMechanism(src, callback);
}


loadScriptString('./moduleA.js', () => {
    console.log('Загружается строка');
    log();
});

// массив и callBack
function loadscriptArray(arr, callback) {
    arr.forEach(src => {
        loadingMechanism(src, callback);
    });
};

// имитируем загрузку аналогичных модулей
// тут загузиться только модуль Б
loadscriptArray(["./moduleA.js", "./moduleB.js", "./moduleA.js"], () => {
    console.log('Загружается массив');
    log();
});


// просто callback 
function loadscriptCB(callback) {
    let src = './moduleC.js'
    loadingMechanism(src, callback);
};

function loadScriptLog() {
    console.log('Загружается callback');
    log();
}

loadscriptCB(loadScriptLog);

/**
 * Подумайте, как реализовать вызов callback модуля А после того, как разрешатся все зависимости модуля В,
 * и отработает его callback
 */

define(function () {
    loadingMechanism('./moduleB.js', () => {
        log();
        loadingMechanism('./moduleA.js', () => {
            log();
        });
    })
});