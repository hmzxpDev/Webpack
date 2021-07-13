/**
 * Модуль содержащий шаблон html
 */

export function switchComp() {
    document.querySelector('header').insertAdjacentHTML('beforeend', `
        <button class="dateCalcButton">Калькулятор дат</button>
        <button class="timerCalcButton">Таймер</button>
`)
}
