
/**
 * имитируем загрузку модулем B модуля C
 */

// не отработает, в loadingMechanism не пройдет валидацию, т.к модуль С уже загружен
loadscriptCB(loadScriptLog);


function log() {
    console.log('Module B is ready');
}