const themes = ["space", "fruits", "animals"];

const theme = localStorage.getItem('theme');

const themeChanger = () => {
  const currentTheme = parseInt(document.getElementById("theme").value);
  localStorage.setItem("theme", currentTheme.toString());
  document.getElementById(themes[currentTheme]).disabled = false;
  document.getElementById(themes[(currentTheme + 1) % 3]).disabled = true;
  document.getElementById(themes[(currentTheme + 2) % 3]).disabled = true;
}

if (theme && ["0", "1", "2"].includes(theme)) {
  document.getElementById("theme").value = theme;
  themeChanger()
} else {
  localStorage.setItem("theme", "0");
}
const themeSelector = document.getElementById("theme");


themeSelector.onchange = themeChanger;