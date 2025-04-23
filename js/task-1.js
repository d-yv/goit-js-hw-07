const listCategories = document.querySelectorAll(".item");
console.log("Number of categories:", listCategories.length);

const textTitle = document.querySelectorAll("h2");
const elements = document.querySelectorAll(".item ul");

textTitle.forEach((title, key) => {
  console.log("Category: ", title.textContent);
  console.log("Elements:", elements[key].childElementCount);

  title.setAttribute("class", "title");
  elements[key].setAttribute("class", "item-list");
});

document.querySelector("#categories").setAttribute("class", "categories-list");

const listElements = document.querySelectorAll(".item ul li");
listElements.forEach((element) => {
  element.setAttribute("class", "item-list-element");
});
