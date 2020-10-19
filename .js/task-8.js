// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку
// Створити, після чого рендериться колекція.
// При натисканні на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount),
//     яка приймає 1 параметр amount - число.Функція створює стільки div, скільки вказано в amount і додає їх в div#boxes.

// Кожен створений div:

// Має випадковий rgb колір фону
// Розміри найпершого div - 30px на 30px
// Кожен наступний div після першого,
//     повинен бути ширше і вище попереднього на   10px
// Створи функцію destroyBoxes(), яка очищає div#boxes.

const controlsInput = document.querySelector('#controls > input');
const boxes = document.querySelector('#boxes');

const btnRender = document.querySelector('[data-action="render"]');
const btnDestroy = document.querySelector('[data-action="destroy"]');


const createBoxes = function (amount) {
    const array = [];
    let width = 30;
    let height = 30;

    for (let i = 0; i < amount; i++) {
        const itemDiv = document.createElement('div');
        itemDiv.style.width = width + 'px';
        itemDiv.style.height = height + 'px';
        width += 10;
        height += 10;
        let random1 = Math.round(Math.random() * 255)
        let random2 = Math.round(Math.random() * 255)
        let random3 = Math.round(Math.random() * 255)
        itemDiv.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;

        array.push(itemDiv);

    } return array
}

btnRender.addEventListener('click', handleRender)

function handleRender() {
    createBoxes(+controlsInput.value).forEach(box => {
        boxes.append(box)
    })
    console.log(createBoxes(+controlsInput.value));
}

btnDestroy.addEventListener('click', handleDestroy)

function handleDestroy() {
    boxes.innerHTML = '';
    controlsInput.value = '';
}

