// viewAllBtn
const viewAllBtn = document.createElement("a");
viewAllBtn.setAttribute("href", "./case-studies.html");
viewAllBtn.classList.add("view-all-btn");
viewAllBtn.textContent = "VIEW ALL PROJECTS";

caseStudySection.appendChild(viewAllBtn);

getAllData(featuredProjects, 3);
