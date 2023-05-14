const humburgerDiv = document.querySelector(".humburger");
const humburgerIcon = document.getElementById("humburger-icon");
const closeIcon = document.getElementById("close-icon");
const humburgerMenus = document.querySelector(
  ".contact .humburger .humburger-menus"
);

const contacts = document.querySelectorAll(".contact div");
console.log(contacts);

// humburger menu

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

// tooltip

for (const div of contacts) {
  div.addEventListener("mouseover", function () {
    this.childNodes[3].style.display = "block";
  });

  div.addEventListener("mouseout", function () {
    this.childNodes[3].style.display = "none";
  });
}
