/**
 * функция конвектирует указанные юзером данные в секунды
 */

let reversObj;

let conversionToSeconds = () => {
    // получаем данные  из DOM
    let days = +document.querySelector('#days').value;
    let hours = +document.querySelector('#hours').value;
    let minutes = +document.querySelector('#minutes').value;
    let seconds = +document.querySelector('#seconds').value;
    // переводим в секунды
    days *= 86400;
    hours *= 3600;
    minutes *= 60;
    // возвращаем результат в секундах
    return days + hours + minutes + seconds;
}

/**
 * функция производит обратную конвектацию в дни,часы,минуты
 */

let reversConversion = (dist) => {
    let toDays = Math.floor(dist / 60 / 60 / 24);
    // Перевод в часы, с учетом остатка деления на 24
    let toHours = Math.floor(dist / 60 / 60) % 24;
    // Перевод в минуты, с учетом остатка деления на 60
    let toMinutes = Math.floor(dist / 60) % 60;
    // Перевод в секунды, с учетом остатка деления на 60
    let toSeconds = Math.floor(dist) % 60;
    // возвращаем обьект

    return reversObj = {
        days: toDays,
        hours: toHours,
        minutes: toMinutes,
        seconds: toSeconds
    }
}

/**
 * Функция обновления счетчика
 */

let updateCounter = (dist) => {
    // переводит секунды в дни, часы, минуты
    reversConversion(dist);
    // меняем DOM элементы
    document.querySelector('.days').innerHTML = reversObj.days;
    document.querySelector('.hours').innerHTML = reversObj.hours;
    document.querySelector('.minutes').innerHTML = reversObj.minutes;
    document.querySelector('.seconds').innerHTML = reversObj.seconds;
}

export { conversionToSeconds, reversConversion, updateCounter };