// модуль хранит в себе функции калькулятора

/**
 * 1. импортируем бибилиотеку luxon для определения интервала дат
 * 2. создаем функцию diffDates которая будет расчитывать разницу в датах
 */
import { luxon } from './frameWorks/luxon.js';

export function diffDates(firstDate, secondDate) {
    firstDate = luxon.DateTime.fromISO(firstDate);
    secondDate = luxon.DateTime.fromISO(secondDate);

    if (firstDate > secondDate)
        secondDate = [firstDate, firstDate = secondDate][0];

    return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject();
}

