// viewAllBtn
const viewAllBtn = document.createElement("a");

viewAllBtn.textContent = "VIEW ALL PROJECTS";

Object.assign(viewAllBtn, {
  className: "view-all-btn",
  href: "./case-studies.html",
});

viewAllBtn.setAttribute("data-aos", "fade-up");
viewAllBtn.setAttribute("data-aos-duration", 3000);

caseStudySection.appendChild(viewAllBtn);

getAllData(featuredProjects, 3);
