const selectField = document.querySelector("#select-field");
const selectText = document.querySelector("#select-text");
const options = document.querySelectorAll(".options");

options.forEach((option) => {
  option.addEventListener("click", () => {
    selectText.textContent = option.textContent;
  })
})