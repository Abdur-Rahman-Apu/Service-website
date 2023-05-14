const humburgerDiv = document.querySelector(".humburger");
const humburgerIcon = document.getElementById("humburger-icon");
const closeIcon = document.getElementById("close-icon");
const humburgerMenus = document.querySelector(
  ".contact .humburger .humburger-menus"
);

localStorage.setItem("menu-icon", "humburger");

function toggleMenu() {
  if (localStorage.getItem("menu-icon") === "humburger") {
    humburgerIcon.style.display = "none";
    closeIcon.style.display = "block";
    humburgerMenus.style.display = "block";
    localStorage.setItem("menu-icon", "close");
  } else {
    humburgerIcon.style.display = "block";
    closeIcon.style.display = "none";
    humburgerMenus.style.display = "none";
    localStorage.setItem("menu-icon", "humburger");
  }
}
