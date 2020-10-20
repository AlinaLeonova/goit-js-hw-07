// Напиши скрипт, який реагує на зміну значення input#font
// - size - control(подія input) і змінює інлайн - 
// стиль span#text оновлюючи властивість font - size.
// В результаті при перетягуванні повзунка змінюватиметься розмір тексту.

const rangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const handleRange = event => {
    let rangeInput = rangeRef.value;
    textRef.style.fontSize = rangeInput + 'px';
    console.log(rangeInput);
    textRef.style.transition = .7 + 's';
}

rangeRef.addEventListener('input', handleRange);
console.log(rangeRef.value);