const loginForm = document.querySelector(".login-form");
const submitData = {};
const createSubmitData = (e) => {
  e.preventDefault();

  const form = e.target.elements;
  const email = form.email.value.trim();
  const password = form.password.value.trim();

  if (email != "" && password != "") {
    submitData.email = email;
    submitData.password = password;
  } else {
    return alert("All form fields must be filled in");
  }
  e.target.reset();
  return console.log(submitData);
};
loginForm.addEventListener("submit", createSubmitData);
