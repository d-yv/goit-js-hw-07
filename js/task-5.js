function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const area = document.querySelector("body");
const colorText = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

changeColorButton.addEventListener("click", changeColor);

function changeColor() {
  let randomColor = getRandomHexColor();
  colorText.innerHTML = randomColor;
  area.setAttribute("style", `background-color:${randomColor}`);
}
