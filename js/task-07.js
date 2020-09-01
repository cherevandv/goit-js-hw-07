"use strict";

const fontSizeControl = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

fontSizeControl.addEventListener("input", (event) => {
  textRef.style.fontSize = `${event.target.value}px`;
});
