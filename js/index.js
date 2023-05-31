//loading
const content = document.querySelector('.content')
        const container = document.querySelector('.container')

setTimeout(() => {
            content.style.display = 'block'
            container.style.display = 'none'
        }, 4500)




// dynamic typing (typed.js)

const typed = new Typed(".type", {
  strings: ["Freelancer", "Graphic Designer", "Web Developer", "Certified Trainer","Digital Marketer","Motion Graphics Designer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});


// cursor moving animation 
const cursor = document.querySelector('.cursor')

document.addEventListener('mousemove', function (e) {
    cursor.style.cssText = "left: " + e.clientX + 'px; top: ' + e.clientY + 'px;'
})

// dark mode

const toggleThemeContainer=document.querySelector('.toggle-theme')
const navbar=document.querySelector('.navbar')
const statisticsSection=document.querySelector('.statistics-section')
const statisticsDetail=document.querySelectorAll('.statistics-detail .detail-container');
const blogSection=document.querySelector('.blog-section')



localStorage.setItem('theme','light')

toggleThemeContainer.addEventListener('click',function(){
    
    const theme=localStorage.getItem('theme');

 
    // functionality dark in if and light functionality in else if
    if(theme=='light'){

        localStorage.setItem('theme','dark')
        document.body.classList.add('dark-theme')
        

        toggleThemeContainer.children[0].style.display='none'
        toggleThemeContainer.children[1].style.display='block';

        navbar.style.backgroundColor="#1a1b1c";
        blogSection.style.backgroundColor="#1a1b1c";
        statisticsSection.style.backgroundColor="#1a1b1c";
        cursor.style.backgroundColor='#f5df4e';

        statisticsDetail.forEach(item=>{
            item.style.backgroundColor="#1a1b1c";
            item.style.border="1px solid #fff"
        })
        

    }else if(theme=='dark'){

        localStorage.setItem('theme','light')
        document.body.classList.remove('dark-theme')

        toggleThemeContainer.children[0].style.display='block'
        toggleThemeContainer.children[1].style.display='none';

        navbar.style.backgroundColor="#fff"
        blogSection.style.backgroundColor='#f3f5f9';
        statisticsSection.style.backgroundColor='#f3f5f9';
        cursor.style.backgroundColor='#000'

        statisticsDetail.forEach(item=>{
            item.style.backgroundColor="#fff";
            item.style.border="none"
        })
    }
})

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

                navLinks.forEach(links => {

                    links.classList.remove('active');


                    const target = document.querySelector('.navbar .menu a[href*=' + id + ']');

                    if (target) {
                        document.querySelector('.navbar .menu a[href*=' + id + ']').classList.add('active')
                    }


                })
            }
        })

        // console.log(window.screen.availHeight);
        console.log("footer",document.getElementsByTagName('footer').offsetHeight);

        // if(window.scrollY>8661){
        //     console.log("Asci");
        //     document.documentElement.scrollTop=0;
        // }
    
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
