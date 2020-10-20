// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li,
// після чого вставить всі li за одну операцію в список ul.ingredients.
// Для створення DOM - вузлів використовуй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const newUl = document.querySelector("#ingredients");

ingredients.forEach((elem) => {
    const createLi = document.createElement("li");
    createLi.textContent = elem;
    newUl.append(createLi);
});
