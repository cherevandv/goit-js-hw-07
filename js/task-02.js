"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsList = document.querySelector("#ingredients");

const createItemList = (array, list) => {
  const li = array.map((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    return listItem;
  });
  list.append(...li);
  return list;
};

console.log(createItemList(ingredients, ingredientsList));

//через forEach:
// const createItemList = (array, list)=>{
// array.forEach(item => {
//       const listItem = document.createElement("li");
//       listItem.textContent=item;
//       list.appendChild(listItem);
//     });
//     return list;
// };
