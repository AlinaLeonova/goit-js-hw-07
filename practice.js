// 2) Дан список в штмл. Вставьте в него 3 лишки с текстом

// const list = document.querySelector('ul');
// const arr = ['sea', 'mountains', 'Montenegro']

// for (let i = 0; i < 3; i++) {
//     const listItem = document.createElement('li');
//     listItem.textContent = arr[i];
//     list.append(listItem);
// }

// 3)Создайте 5 красных кругов 100х100 пикселей (стили подключаються в цсс)

// const body = document.querySelector('body')
// for (let i = 0; i < 5; i++) {
//     const div = document.createElement('div');
//     div.classList.add('circle')
//     body.append(div);

// }

// 4)Доавьте всем дивам нумерацию (в свойство текс контент записывается какой это по счёту див)

// const divList = document.querySelectorAll('div');
// divList.forEach((el, i) => { el.textContent = `${i + 1}` });



// 5)Создайте 3 картинки с котикми за одно операцию

const body = document.querySelector('body')
for (let i = 0; i < 3; i++) {
    const img = document.createElement('img');
    body.append(img)
    let a = Math.floor(Math.random() * 200)
    img.src = `https://picsum.photos/id/${a}/200/300`

}





// const body = document.querySelector('body');
// const form = document.querySelector('.form');
// const name = document.querySelector('.name');
// const surname = document.querySelector('.surname');
// const range = document.querySelector('.range');
// form.addEventListener('submit', ev => {
//   ev.preventDefault();
//   body.insertAdjacentHTML(
//     'beforeend',
//     `<h1 style = "font-size: ${range.value}px; transition: .2s" class="output" > Name: ${name.value}, Surname ${surname.value}</h1>`,
//   );
// });
// range.addEventListener('input', ev => {
//   const output = document.querySelectorAll('.output');
//   // output ? (output.style.fontSize = `${range.value}px`) : '';
//   output
// ? output.forEach(el => {
//         el.style.fontSize = `${range.value}px`;
//       })
//     : '';
// });