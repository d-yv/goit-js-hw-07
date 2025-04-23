const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

categories.forEach((title) => {
  console.log("Category: ", title.children[0].textContent);
  console.log("Elements:", title.children[1].childElementCount);
});
