/**
 * Модуль создает переключение
 */

import { switchComp } from "./switchTemplate.js";

export function switchCreate() {
    // рисуем кнопки
    switchComp();

    // открытие калькулятора дат на кнопку
    document.querySelector('.dateCalcButton').addEventListener('click', () => {
        document.querySelector('.timer').style.display = 'none';
        document.querySelector('.dateCalc').style.display = 'block';
    })

    // открытие таймера на кнопку
    document.querySelector('.timerCalcButton').addEventListener('click', () => {
        document.querySelector('.timer').style.display = 'block';
        document.querySelector('.dateCalc').style.display = 'none';
    })


}