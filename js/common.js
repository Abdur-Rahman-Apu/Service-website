const humburgerDiv = document.querySelector(".humburger"),
  humburgerIcon = document.getElementById("humburger-icon"),
  closeIcon = document.getElementById("close-icon"),
  humburgerMenus = document.querySelector(
    ".contact .humburger .humburger-menus"
  ),
  scrollToolTip = document.querySelector(".up p"),
  scrollDiv = document.querySelector(".scroll-to-top"),
  contacts = document.querySelectorAll(".contact div");
function toggleMenu() {
  "humburger" === localStorage.getItem("menu-icon")
    ? ((humburgerIcon.style.display = "none"),
      (closeIcon.style.display = "block"),
      (humburgerMenus.style.display = "block"),
      localStorage.setItem("menu-icon", "close"))
    : "close" === localStorage.getItem("menu-icon") &&
      ((humburgerIcon.style.display = "block"),
      (closeIcon.style.display = "none"),
      (humburgerMenus.style.display = "none"),
      localStorage.setItem("menu-icon", "humburger"));
}
localStorage.setItem("menu-icon", "humburger");
for (const e of contacts)
  e.addEventListener("mouseover", function () {
    this.childNodes[3].style.display = "block";
  }),
    e.addEventListener("mouseout", function () {
      this.childNodes[3].style.display = "none";
    });
window.addEventListener("scroll", function () {
  document.documentElement.scrollTop > 250
    ? (scrollDiv.style.visibility = "visible")
    : (scrollDiv.style.visibility = "hidden");
}),
  scrollDiv.addEventListener("click", function () {
    (document.documentElement.scrollTop = 0), (document.body.scrollTop = 0);
  }),
  scrollDiv.addEventListener("mouseover", function () {
    scrollToolTip.style.display = "block";
  }),
  scrollDiv.addEventListener("mouseout", function () {
    scrollToolTip.style.display = "none";
  });
