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
  const element = document.body;
  element.classList.toggle("dark-mode");
}

function validateForm() {
  const name = document.getElementById("clintName").value;
  const email = document.getElementById("clintEmail").value;
  const phone = document.getElementById("clintPhone").value;

  // Basic name validation (not empty)
  if (name.trim() === "") {
      alert("Please enter your name.");
      return false;
  }

  // Email validation (HTML5 pattern attribute already checks for a valid email)

  // Phone validation using the pattern attribute
  if (!/^[6789][0-9]{9}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number starting with 6, 7, 8, or 9.");
      return false;
  }

  // Additional validation for message (optional)

  // If all validations pass, the form will submit; otherwise, it will not.
  return true;
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