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
    delay: 30,
    time: 500,
  });
});
