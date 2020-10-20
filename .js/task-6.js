// Напиши скрипт, який би при втраті фокуса на інпут,
// перевіряв його вміст на правильну кількість символів.
// Скільки символів має бути в інпут, вказується в його атрибуті data - length.
// Якщо введена відповідна кількість, то border інпут стає зеленим, якщо неправильне - червоним.
// Для додавання стилів, використовуй CSS - класи valid і invalid.

const inputRef = document.querySelector('#validation-input');

const handleInputBlur = event => {
    console.log(inputRef.value.length);
    console.log(inputRef.dataset.length);
    if (inputRef.value.length == inputRef.dataset.length) {
        inputRef.classList.add('valid')
        inputRef.classList.remove('invalid')
    } else {
        inputRef.classList.add('invalid')
        inputRef.classList.remove('valid')
    }
}

inputRef.addEventListener('blur', handleInputBlur)