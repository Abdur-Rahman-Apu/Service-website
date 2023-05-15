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
  for (let i = 0; i < showData; i++) {
    const { thumbnailImg, clientName, id } = data[i];

    const projectParentDiv = document.createElement("div");
    projectParentDiv.classList.add("project");

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
