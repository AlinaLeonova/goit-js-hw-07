// Напиши скрипт, який реагує на зміну значення input#font
// - size - control(подія input) і змінює інлайн - 
// стиль span#text оновлюючи властивість font - size.
// В результаті при перетягуванні повзунка змінюватиметься розмір тексту.


const rangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

console.log(rangeRef.value);

const handleRange = event => {
    let rangeInput = rangeRef.value;
    textRef.style.fontSize = rangeInput + 'px';
    textRef.style.transition = .7 + 's';

}

rangeRef.addEventListener('input', handleRange)






















// const range = document.querySelector('#font-size-control')
// range.addEventListener('input',(e) =>{
//  const output = document.querySelector('#text')
//  output.style.fontSize = `${range.value}px`;