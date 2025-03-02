const form = document.getElementById("form");


// login handler
// save the name and theme to local storage

form.onsubmit = () => {
  localStorage.setItem("name", document.getElementById("name").value);
  localStorage.setItem("theme", document.getElementById("theme").value);
};