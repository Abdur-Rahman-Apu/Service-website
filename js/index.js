// dynamic typing (typed.js)

const typed = new Typed(".type", {
  strings: ["Freelancer", "Designer", "Developer", "Content Writer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

// counter up

$(document).ready(function () {
  $(".project-stats .counter").counterUp({
    delay: 10,
    time: 500,
  });
});
