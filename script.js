const sideBar = document.getElementById("mySidebar");
const main = document.getElementById("main");
const hamburger = document.getElementById("hamburger");

const toggleNav = () => {
  sideBar.classList.toggle("show");
  main.classList.toggle("show");
  hamburger.classList.toggle("fa-bars");
  hamburger.classList.toggle("fa-xmark");
};

function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
