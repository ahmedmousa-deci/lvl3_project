const userName = localStorage.getItem('name');

// login handler
// redirect to login page if user is not logged in

if (!userName) {
  window.location.replace("/kidCalc/pages/login.html");
}

// set user name in the information bar
document.getElementById("name").innerText = userName;

const theme = localStorage.getItem('theme');

// set the theme based on the user's preference
if (theme === "space") {
  document.getElementById("space_link").disabled = false;
} else {
  document.getElementById("fruits_link").disabled = false;
}
