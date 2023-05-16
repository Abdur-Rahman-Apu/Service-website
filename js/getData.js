// get data from the api

const getAllData = (callback, showData) => {
  fetch("data/data.json")
    .then((res) => res.json())
    .then((data) => {
      callback(data, showData);
    });
};

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
    const { thumbnailImg, clientName, id } = data[i];

    const projectParentDiv = document.createElement("div");
    projectParentDiv.classList.add("project");
    projectParentDiv.setAttribute("data-aos", "fade-in");
    projectParentDiv.setAttribute("data-aos-duration", 3000);
    projectParentDiv.setAttribute("data-aos-easing", "ease-in-out");
    projectParentDiv.innerHTML = `
                  <img src='${thumbnailImg}'/>
                  <p>${clientName}</p>                
                  `;

    projectParentDiv.addEventListener("click", function () {
      document.location.href = `./case-study-detail.html?${id}`;
    });
    featuredDiv.appendChild(projectParentDiv);
  }
};
