const menu = document.querySelector(".header__menu");
const nav = document.querySelector(".nav");
const branding = document.querySelector(".nav__brand");
const navMenu = document.querySelector(".nav__menu");
const navItem = document.querySelectorAll(".nav__item");

// Menu status
let showMenu = false;

menu.addEventListener("click", toggleMenu);

function toggleMenu() {
  // If menu is now shown
  if (!showMenu) {
    // Show the menu by adding the close class
    menu.classList.add("close");
    nav.classList.add("show");
    branding.classList.add("show");
    navMenu.classList.add("show");
    navItem.forEach(item => item.classList.add("show"));

    // Set menu status
    showMenu = true;
  } else {
    menu.classList.remove("close");
    nav.classList.remove("show");
    branding.classList.remove("show");
    navMenu.classList.remove("show");
    navItem.forEach(item => item.classList.remove("show"));

    showMenu = false;
  }
}
