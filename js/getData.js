// get data from the api

const getAllData = (url, callback, showData) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      callback(data, showData);
    });
};

// case studies  structure

const featuredDiv = document.querySelector(".featured-projects");
const caseStudySection = document.querySelector(".case-study-section");

const featuredProjects = (data, showData) => {
  console.log(data);

  let dataLength = undefined;

  if (showData == "all") {
    dataLength = data.length;
  } else {
    dataLength = showData;
  }

  for (let i = 0; i < dataLength; i++) {
    const { thumbnailImg, name, id } = data[i];

    const projectParentDiv = document.createElement("div");
    projectParentDiv.classList.add("project");
    projectParentDiv.setAttribute("data-aos", "fade-in");
    projectParentDiv.setAttribute("data-aos-duration", 3000);
    projectParentDiv.setAttribute("data-aos-easing", "ease-in-out");
    projectParentDiv.innerHTML = `
                  <img src='${thumbnailImg}'/>
                  <p>${name}</p>                
                  `;

    projectParentDiv.addEventListener("click", function () {
      document.location.href = `./case-study-detail.html?${id}`;
    });
    featuredDiv.appendChild(projectParentDiv);
  }
};

// courses structure

const courseContainer = document.querySelector(".course-container");

const courses = (data, showData) => {
  console.log(data);

  for (i = 0; i < showData; i++) {
    const { bannerImg, price, tag, courseName, id } = data[i];

    // course parent div

    const courseDiv = document.createElement("div");
    courseDiv.classList.add("course-card");
    courseDiv.innerHTML = `
                    <a href="#">
                        <div class="course-banner">
                            <img src=${bannerImg} />
                        </div>

                   

                            <h1 class="course-title">${courseName}</h1>

                        

                      
                        </div>    
                    </a>
            `;

    courseContainer.appendChild(courseDiv);
  }
};
