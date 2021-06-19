



/**
 * Функция создает в head тег script с src
 * @param {*} src тот файл который нам нужно загрузить
 * @param {*} callBack функция, которая выполниться после загрузки скрипта
 */
function loadScript(src, callBack) {
    // записываем в переменную создание тега script
    const script = document.createElement('script');
    // указываем src
    script.src = src;
    // после загрузки вызываем callBack, которая загрузит common.js
    script.onload = callBack;
    // загружаем в head скрипт
    document.head.insertAdjacentElement('beforeend', script);
}

//доделать дома варианты с массивом и callBack

loadScript(['common.js', 'timer.js', 'a.js'], () => { })

loadScript(() => { })


loadScript('common.js', () => {
    console.log('load index.js')
    log();
})