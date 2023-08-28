const viewAllBtn = document.createElement("a");
(viewAllBtn.textContent = "VIEW ALL PROJECTS"),
  Object.assign(viewAllBtn, {
    className: "view-all-btn",
    href: "case-studies",
  }),
  viewAllBtn.setAttribute("data-aos", "fade-up"),
  viewAllBtn.setAttribute("data-aos-duration", 3e3),
  caseStudySection.appendChild(viewAllBtn),
  getAllData("data/caseStudyData.json", featuredProjects, 3);
