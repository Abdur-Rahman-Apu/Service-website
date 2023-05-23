// dynamic typing (typed.js)

const typed = new Typed(".type", {
  strings: ["Freelancer", "Graphic Designer", "Web Developer", "Certified Trainer","Digital Marketer","Motion Graphics Designer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

// counter up

// $(document).ready(function () {
//   $(".counter").counterUp({
//     delay: 10,
//     time: 400,
//   });
// });

let nums = document.querySelectorAll(".statistics-info .counter");
        let section = document.querySelector(".statistics-detail");
        let started = false; // Function Started ? No

        window.onscroll = function () {
           
            if ((window.scrollY+500) >= section.offsetTop) {

                if (!started) {
                    nums.forEach((num) => startCount(num));
                }
                started = true;
            }
        };

        function startCount(el) {
            let goal = el.dataset.goal;
            let count = setInterval(() => {
                el.textContent++;
                if (el.textContent == goal) {
                    clearInterval(count);
                }
            }, 2000 / goal);
        }

// all courses

const courseSection = document.querySelector(".featured-courses");

const viewAllCourseBtn = document.createElement("a");
viewAllCourseBtn.classList.add("view-course-btn");
viewAllCourseBtn.innerText = "view all courses";
viewAllCourseBtn.setAttribute("href", "./courses.html");
courseSection.appendChild(viewAllCourseBtn);

getAllData("data/course.json", featuredCourses, ['cyber warrior','figma','aws']);
