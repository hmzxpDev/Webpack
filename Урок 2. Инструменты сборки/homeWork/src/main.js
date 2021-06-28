/**
 * импортируем модуль, который создаст переключатель
 * запускаем ее
 */
import { switchCreate } from './switch/switchCreature.js';

switchCreate()

/**
 * импортируем модуль, который создаст калькулятор дат
 * запускаем ее
 */
import { dateCalcCreate } from './datecalc/dateCalcCreature.js'

dateCalcCreate();

/**
 * импортируем модуль, который создаст таймер
 * запускаем ее
 */
import { timerCreate } from './timer/timerCreature.js'

timerCreate();

import './main.scss';
import mp3 from './timer/sounds/timerSound.mp3'

const sound = document.createElement('audio');
sound.src = mp3;
document.body.appendChild(sound);
