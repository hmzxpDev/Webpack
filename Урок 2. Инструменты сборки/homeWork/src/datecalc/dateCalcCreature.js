// модуль который собирает калькулятор

/**
 * 1. импортируем html разметку калькулятора дат 
 */

import { dateCalcComp } from './dateCalcTemplate.js'
/**
 * импортируем функции калькулятора
 */

import { diffDates } from './dateCalcFunc.js';

/**
 * функция которая будет собирать и создавать калькулятор
 */
export function dateCalcCreate() {
    // рисуем калькулятор
    dateCalcComp();

    // переменные элементов DOM
    let dateCalcFormButton = document.querySelector('.buttonFormDateCalc'); //кнопка отправки формы калькулятора дат
    let formResponse = document.querySelector('.dateCalcResult');           //параграф, где будет отображаться результат
    let form = document.querySelector('form');                              //форма

    // слушатель события отправки формы
    dateCalcFormButton.addEventListener('click', (event) => {
        // сразу отменяем событие отправки формы
        event.preventDefault();
        let firstDate = form[0].value;
        let secondDate = form[1].value;
        // ответ будет обьект разницы дат
        let luxonAnswer = diffDates(firstDate, secondDate);
        // простая валидация что бы небыло пустой формы в отправке
        if (luxonAnswer.days == undefined || luxonAnswer.months == undefined || luxonAnswer.years == undefined) {
            formResponse.innerHTML = `Пожалуйста введите корректные даты`;
        }
        else {
            formResponse.innerHTML = `
        Разница между датами составила: ${luxonAnswer.days} дней ${luxonAnswer.months} месяцев ${luxonAnswer.years} лет
        `;
        }
    });

}




