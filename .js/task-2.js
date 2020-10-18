// Напиши скрипт, который для каждого элемента массива ingredients создаст
// отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().


const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const list = document.querySelector('#ingredients');


for (let i = 0; i < 6; i++) {
    const ingredientItem = document.createElement('li');
    ingredientItem.textContent = ingredients[i];
    list.append(ingredientItem);
}