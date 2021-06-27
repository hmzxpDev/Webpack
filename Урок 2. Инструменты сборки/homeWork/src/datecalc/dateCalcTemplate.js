// модуль хранит в себе html разметку калькулятора

/**
 * Функция отрисовывает калькулятор в index.html
 */
export function dateCalcComp() {
    document.querySelector('main').insertAdjacentHTML('beforeend', `
    <div class="dateCalc">
        <form id="datecalc">
            <h3>Калькулятор дат</h3>
                <strong>Первая дата:</strong>
                <input type="date" name="firstDate" />
                <strong>Вторая дата:</strong>
                <input type="date" name="secondDate" />
            <button class="buttonFormDateCalc" type="submit">Расчитать промежуток</button>
            <p class="dateCalcResult"></p>
        </form>
    </div>
    `)
}