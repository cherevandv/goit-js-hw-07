"use strict";

const counterRef = document.querySelector("#value");
const addBtnRef = document.querySelector('[data-action="increment"]');
const deleteBtnRef = document.querySelector('[data-action="decrement"]');

let counterValue = 0;
const increment = ()=>{
   counterRef.textContent = counterValue+=1;
};
const decrement = ()=>{
   counterRef.textContent = counterValue-=1;
};

addBtnRef.addEventListener('click', increment);
deleteBtnRef.addEventListener('click', decrement);
