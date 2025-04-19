const listCategories = document.querySelectorAll("#categories");

listCategories.forEach((element) => {
  console.log("Number of categories:", element.childElementCount);
  element.setAttribute("class", ".categories-list");
});

const textTitle = document.querySelectorAll("h2");
const elements = document.querySelectorAll(".item ul");

textTitle.forEach((title, key) => {
  console.log("Category: ", title.textContent);
  console.log("Elements:", elements[key].childElementCount);

  title.setAttribute("class", "title");
  elements[key].setAttribute("class", "item-list");
});

const listElements = document.querySelectorAll(".item ul li");
listElements.forEach((element) => {
  element.setAttribute("class", "item-list-element");
});
