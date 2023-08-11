const queryString = location.search.substring(1);
const caseDetailSection = document.querySelector(".case-detail-section");

// find specific data

const caseDetails = (data, projectId) => {
  const findData = data.find((item) => item.id == projectId);

  const {
    category,
    clientName,
    gifImg,
    id,
    images,
    name,
    projectActivities,
    scope,
    thumbnailImg,
  } = findData;

  caseDetailSection.innerHTML = `
        <h1 class="title">${name}</h1>

        <div class="project-logo">
            <img src=${gifImg} alt="image" loading="lazy" />
        </div>

        <hr>

        <div class="project-detail">
            <p><span>Client:</span> ${clientName}</p>
            <p><span>Category:</span> ${category}</p>
            <p><span>Scope:</span> ${scope}</p>
            <p><span>Project objectives:</span> <br> ${projectActivities}</p>

        </div>

        <div class="project-view">
            <h1 class="view-title">Project view</h1>

            <div class="owl-carousel owl-theme">

            </div>
        </div>
  `;

  const carouselDiv = document.querySelector(".owl-carousel");

  images.forEach((link) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    itemDiv.innerHTML = `
                    <img src=${link} data-action="zoom" alt="image" />
            `;

    carouselDiv.appendChild(itemDiv);
  });

  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
  });

  $(".owl-carousel").imagePreviewer();
};

getAllData("data/caseStudyData.json", caseDetails, queryString);
