const humburgerDiv = document.querySelector(".humburger");
const humburgerIcon = document.getElementById("humburger-icon");
const closeIcon = document.getElementById("close-icon");
const humburgerMenus = document.querySelector(
  ".contact .humburger .humburger-menus"
);
const scrollToolTip = document.querySelector(".up p");
const scrollDiv = document.querySelector(".scroll-to-top");

const contacts = document.querySelectorAll(".contact div");

// humburger menu

localStorage.setItem("menu-icon", "humburger");

function toggleMenu() {
  if (localStorage.getItem("menu-icon") === "humburger") {
    humburgerIcon.style.display = "none";
    closeIcon.style.display = "block";
    humburgerMenus.style.display = "block";
    localStorage.setItem("menu-icon", "close");
  } else if (localStorage.getItem("menu-icon") === "close") {
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

// scroll to top

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 250) {
    scrollDiv.style.visibility = "visible";
  } else {
    scrollDiv.style.visibility = "hidden";
  }
});

scrollDiv.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});

scrollDiv.addEventListener("mouseover", function () {
  scrollToolTip.style.display = "block";
});
scrollDiv.addEventListener("mouseout", function () {
  scrollToolTip.style.display = "none";
});
