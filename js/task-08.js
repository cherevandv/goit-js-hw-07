"use strict";

// const controlRef = document.querySelector('#controls');
const inputNumberRef = document.querySelector('[type="number"]');
const btnRenderRef = document.querySelector('[data-action="render"]');
const btnDestroyRef = document.querySelector('[data-action="destroy"]');
const boxesRef = document.querySelector("#boxes");

const minNumber = Number(inputNumberRef.getAttribute("min"));
const maxNumber = Number(inputNumberRef.getAttribute("max"));

inputNumberRef.addEventListener("blur", (event) => {
  const amount = Number(event.target.value);
  if (amount > minNumber && amount < maxNumber) {
    btnRenderRef.addEventListener("click", createBoxes(amount));
  } else {
    alert(`Ведите число больше ${minNumber} и меньше ${maxNumber}`);
  }
});

btnDestroyRef.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  let sizebox = 20;
  const arrayBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    sizebox += 10;
    div.style.width = `${sizebox}px`;
    div.style.height = `${sizebox}px`;
    div.style.backgroundColor = generateColor();
    arrayBoxes.push(div);
  }
  boxesRef.append(...arrayBoxes);
  return boxesRef;
}

function destroyBoxes() {
  const boxesChildren = boxesRef.querySelectorAll("div");
  boxesChildren.forEach((box) => box.remove());
}

function generateColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
