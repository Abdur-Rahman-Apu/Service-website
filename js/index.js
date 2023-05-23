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

// counter

let nums = document.querySelectorAll(".statistics-info .counter");
let section = document.querySelector(".statistics-detail");
let started = false; 

// active menu 

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.menu a')






        
$(document).ready(function(){
    window.onscroll=()=>{


        if ((window.scrollY+500) >= section.offsetTop) {

            if (!started) {
                nums.forEach((num) => startCount(num));
            }
            started = true;
        }


        // active navbar 
        sections.forEach(sec => {


            // count

            let top = window.scrollY;
            let offset = sec.offsetTop - 220;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id')

            if (top >= offset && top < offset + height) {

                console.log("Asci");
                navLinks.forEach(links => {

                    links.classList.remove('active');


                    const target = document.querySelector('.navbar .menu a[href*=' + id + ']');

                    if (target) {
                        console.log("target",target);
                        document.querySelector('.navbar .menu a[href*=' + id + ']').classList.add('active')
                    }


                })
            }
        })

        
    
    };



        
    
})

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
