const typed = new Typed(".type", {
    strings: [
      "Freelancer",
      "Graphic Designer",
      "Web Developer",
      "Certified Trainer",
      "Digital Marketer",
      "Motion Graphics Designer",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: !0,
  }),
  cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});
let nums = document.querySelectorAll(".statistics-info .counter"),
  section = document.querySelector(".statistics-detail"),
  started = !1,
  sections = document.querySelectorAll("section"),
  navLinks = document.querySelectorAll(".menu a");
function startCount(e) {
  let t = e.dataset.goal,
    o = setInterval(() => {
      e.textContent++, e.textContent == t && clearInterval(o);
    }, 2e3 / t);
}
$(document).ready(function () {
  window.onscroll = () => {
    window.scrollY + 500 >= section.offsetTop &&
      (started || nums.forEach((e) => startCount(e)), (started = !0)),
      sections.forEach((e) => {
        let t = window.scrollY,
          o = e.offsetTop - 220,
          n = e.offsetHeight,
          r = e.getAttribute("id");
        t >= o &&
          t < o + n &&
          navLinks.forEach((e) => {
            e.classList.remove("active");
            document.querySelector(".navbar .menu a[href*=" + r + "]") &&
              document
                .querySelector(".navbar .menu a[href*=" + r + "]")
                .classList.add("active");
          });
      });
  };
});
