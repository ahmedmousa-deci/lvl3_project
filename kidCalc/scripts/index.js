const theme = localStorage.getItem('theme');

// set the theme based on the user's preference
if (theme === "fruits") {
  document.getElementById("fruits_link").disabled = false;
} else {
  document.getElementById("space_link").disabled = false;
}


const themeSelector = document.getElementById("theme");
if (theme) {
  themeSelector.value = theme;
}

themeSelector.onchange = () => {
  localStorage.setItem("theme", themeSelector.value);
  if (themeSelector.value === "fruits") {
    document.getElementById("fruits_link").disabled = false;
    document.getElementById("space_link").disabled = true;
  } else {
    document.getElementById("space_link").disabled = false;
    document.getElementById("fruits_link").disabled = true;
  }
}