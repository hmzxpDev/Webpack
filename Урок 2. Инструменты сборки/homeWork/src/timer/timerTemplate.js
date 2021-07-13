// модуль хранит в себе html разметку таймера

/**
 * Функция отрисовывает timer в index.html
 */

export function timerComp() {
    document.querySelector('main').insertAdjacentHTML('beforeend', `    
    <div class="timer">    
        <strong>На какое время вам нужен таймер?</strong>
        <div class="timerBlock">
            Дни:<input type="number" name="" id="days" min="0" value="0">
            Часы:<input type="number" name="" id="hours" min="0" value="0">
            Минуты:<input type="number" name="" id="minutes" min="0" value="0">
            Секунды:<input type="number" name="" id="seconds" min="0" value="0">
            <button class="buttonTimerStart">Start</button>
            <button class="buttonTimerStop">Stop</button>
            <button class="buttonTimerResume">Resume</button>
        </div>

        <strong>Оставшиеся время:</strong>
        <div class="timeLeft">
            Дни:<div class="days">0</div>
            Часы:<div class="hours">0</div>
            Минуты:<div class="minutes">0</div>
            Секунды:<div class="seconds">0</div>
        </div>
        <div class="timerMsg"></div>
    </div>`
    )
};
