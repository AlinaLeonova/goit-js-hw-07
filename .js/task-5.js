// Напиши скрипт який, при наборі тексту в інпут input#name - input(подія input),
// підставляє його поточне значення в span#name - output.якщо інпут порожній,
// в спані повинен відображатися рядок 'незнайомець'.

const checkInput = document.querySelector("#name-input");
const checkOutput = document.querySelector("#name-output");

checkInput.addEventListener("input", checkInputStatus);

function checkInputStatus() {
    if (!checkInput.value) {
        checkOutput.textContent = "незнакомец";
    } else {
        checkOutput.textContent = checkInput.value;
    }
}