const inputField = document.querySelector("#name-input");
const insertName = document.querySelector("#name-output");
inputField.setAttribute("class", "name-input");

const inputName = () => {
  if (inputField.value === " " || inputField.value === "") {
    insertName.innerHTML = "Anonymous";
  } else {
    insertName.innerHTML = inputField.value.trim();
  }
};
inputField.addEventListener("input", inputName);
