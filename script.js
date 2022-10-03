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

// function openNav() {
//   document.getElementById("sidebar_link").style.opacity = "1"
//   document.getElementById("main").style.marginLeft = "250px"
//   document.getElementById("mySidebar").style.width = "250px"
// }

// function closeNav() {
//   document.getElementById("main").style.marginLeft = "0"
//   document.getElementById("mySidebar").style.width = "0"
//   document.getElementById("sidebar_link").style.opacity = "0"
// }