// Модуль собирает таймер

/**
 * Импортируем html разметку таймера
 */
import { timerComp } from "./timerTemplate.js";

import { Howl } from "howler";

/**
 * Импортируем функции таймера
 */

import { conversionToSeconds, reversConversion, updateCounter } from "./timerFunc.js";

export function timerCreate() {
    // рисуем таймер
    timerComp();

    // для избежания проблем области видимости
    let dist;
    let start;

    /**
     * Будет 3 кнопки
     * 1. Запуск таймера с указанным временем пользователя
     * 2. Пауза
     * 3. Продолжить
     */

    // назначем запуск на кнопку
    document.querySelector('.buttonTimerStart').addEventListener('click', () => {
        document.querySelector('.timerMsg').innerHTML = '';
        // Для отключения возможности двойного вызова таймера
        clearInterval(start);
        // время указанное пользователем в секундах
        dist = conversionToSeconds();
        // валидация на 0 или отрицательное значение
        if (dist > 0) {
            start = setInterval(() => {
                updateCounter(dist)
                // от полученных секунд отнимаем 1 секунду каждую итерацию
                dist--;
                // останавливает если достигло 0
                if (dist <= 0) {
                    clearInterval(start);
                    // подключаем howlwer через CDN и создаем обьект со звуком таймера
                    new Howl({
                        src: ['./src/timer/sounds/timerSound.mp3']
                    }).play();
                    // Вставляем на страницу текст "Время вышло"
                    document.querySelector('.timerMsg').insertAdjacentHTML('beforeend', `
                    <div style="margin-top: 30px; font-size: 30px; color: red;">Время вышло!</div>
                    `)
                }
            }, 1000);
        }
        else { alert('Введите число больше 0') }
    });

    // пауза на кнопку
    document.querySelector('.buttonTimerStop').addEventListener('click', () => {
        clearInterval(start);
    });

    // продолжить на кнопку
    document.querySelector('.buttonTimerResume').addEventListener('click', () => {
        // Для отключения возможности двойного вызова таймера    
        clearInterval(start);
        // валидация на 0 или отрицательное значение
        if (dist > 0) {
            start = setInterval(() => {
                updateCounter(dist)
                // от полученных секунд отнимаем 1 секунду каждую итерацию
                dist--;
                // останавливает если достигло 0
                if (dist <= 0) {
                    clearInterval(start);
                    // подключаем howlwer через CDN и создаем обьект со звуком таймера
                    new Howl({
                        src: ['./src/timer/sounds/timerSound.mp3']
                    }).play();
                    // Вставляем на страницу текст "Время вышло"
                    document.querySelector('.timerMsg').insertAdjacentHTML('beforeend', `
                        <div style="margin-top: 30px; font-size: 30px; color: red;">Время вышло!</div>
                    `)
                }
            }, 1000);
        }
        else { alert('введите новое время и нажмите "Start"') }
    });

}