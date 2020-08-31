"use strict";

const inputRef = document.querySelector('#name-input');
const nameRef =  document.querySelector('#name-output');

inputRef.addEventListener('input', (event)=>{
    const name = event.target.value;
    name.length>0 ? nameRef.textContent = name : nameRef.textContent='незнакомец';
});