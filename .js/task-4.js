// Счетчик состоит из спана и кнопок, которые должны увеличивать
// и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;
let checkValue = document.querySelector('#value')

const increment = () => {
    counterValue += 1;
    checkValue.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    checkValue.textContent = counterValue;
};

const firstBtn = document.querySelector(' button[data-action="increment"]');
const secondBtn = document.querySelector(' button[data-action="decrement"]');

firstBtn.addEventListener("click", increment);
secondBtn.addEventListener("click", decrement);