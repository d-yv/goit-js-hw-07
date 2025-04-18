const listCategories = document.querySelectorAll("#categories");

listCategories.forEach((element) => {
  console.log("Number of categories:", element.childElementCount);
  element.setAttribute(
    "style",
    `display: flex; 
    flex-direction: column; 
    gap: 24px`
  );
});

const textTitle = document.querySelectorAll("h2");
const elements = document.querySelectorAll(".item ul");

textTitle.forEach((title, key) => {
  console.log("Category: ", title.textContent);
  console.log("Elements:", elements[key].childElementCount);

  title.setAttribute(
    "style",
    `margin: 16px 0; 
    font-weight: 600; 
    font-size: 24px; 
    line-height: 1.33; 
    letter-spacing: 0.04em; 
    color: #2e2f42;`
  );
  elements[key].setAttribute(
    "style",
    `padding: 0; 
    display: flex; 
    flex-direction: column; 
    gap: 8px;`
  );
});

//styles

const list = document.querySelectorAll(".item");
list.forEach((categorie) => {
  categorie.setAttribute(
    "style",
    `border-radius: 8px; 
    padding: 16px; 
    width: 392px; 
    background-color: #f6f6fe;
    list-style-type: none;`
  );
});

const listElements = document.querySelectorAll(".item ul li");
listElements.forEach((element) => {
  element.setAttribute(
    "style",
    `font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.04em;
    color: #2e2f42;
    border: 1px solid #808080;
    border-radius: 4px;
    width: 360px;
    list-style-type: none;
    padding: 8px 16px;`
  );
});
