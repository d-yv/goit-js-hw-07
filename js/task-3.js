const inputField = document.querySelector("#name-input");
const insertName = document.querySelector("#name-output");
inputField.setAttribute("class", "name-input");

const inputName = () => {
  const valTrim = inputField.value.trim();
  if (!valTrim) {
    insertName.innerHTML = "Anonymous";
  } else {
    insertName.innerHTML = valTrim;
  }
};
inputField.addEventListener("input", inputName);
