const selectField = document.querySelector("#select-field");
const selectText = document.querySelector("#select-text");
const options = document.querySelectorAll(".options");
const list = document.querySelector("#list");

options.forEach((option) => {
  option.addEventListener("click", () => {
    selectText.textContent = option.textContent;
    list.classList.toggle("hide");
  })
})

selectField.addEventListener("click", () => {
  list.classList.toggle("hide");
})