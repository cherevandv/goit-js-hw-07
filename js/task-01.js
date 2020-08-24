"use strict";

const list = document.querySelector("#categories");
const categories = list.querySelectorAll(".item");

console.log(`В списке ${categories.length} категории.`);

const arrayOfCategories = Array.from(categories);

const showInfo = arrayOfCategories.forEach((category) => {
  console.log(`Категория: ${category.firstElementChild.textContent}`);
  const listItems = category.querySelector("ul");
  console.log(`Количество элементов: ${listItems.children.length}`);
});
