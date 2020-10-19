// Напиши скрипт який, при наборі тексту в інпут input#name - input(подія input),
// підставляє його поточне значення в span#name - output.якщо інпут порожній,
// в спані повинен відображатися рядок 'незнайомець'.

const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

const handleInput = event => {
    if (!inputName.value) {
        outputName.textContent = 'незнайомець';
    } else {
        outputName.textContent = inputName.value
    }
}

inputName.addEventListener('input', handleInput);







