// dynamic typing (typed.js)

const typed = new Typed(".type", {
  strings: ["Freelancer", "Designer", "Developer", "Content Writer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

// counter up

$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 700,
  });
});

const courseContainer = document.querySelector(".featured-courses");

const viewAllCourseBtn = document.createElement("a");
viewAllCourseBtn.classList.add("view-btn");
courseContainer.add.appendChild(" courses");");

getAllData("data/course.json", courses, 4);
