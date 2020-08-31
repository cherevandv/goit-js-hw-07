"use strict";

const inputRef = document.querySelector("#validation-input");

const minLength = Number(inputRef.getAttribute("data-length"));

inputRef.addEventListener("change", (event) => {
  const currentInput = event.target.value;
  currentInput.length === minLength
    ? inputRef.classList.replace("invalid", "valid") ||
      inputRef.classList.add("valid")
    : inputRef.classList.replace("valid", "invalid") ||
      inputRef.classList.add("invalid");
});
