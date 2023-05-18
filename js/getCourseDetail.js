const queryString = location.search.substring(1);

const courseDetails = (data, courseId) => {
  const courseFind = data.find((course) => course.id == courseId);
  console.log(courseFind);

  const {
    courseName,
    overview,
    details,
    learners,
    videoSrc,
    shortName,
    reasons,
    why,
    curriculum,
    features,
    faq,
    forWho,
    prerequisite,
  } = courseFind;

  const courseDetailContainer = document.querySelector(
    ".course-detail-container"
  );

  const back = () => {
    window.history.back();
  };

  courseDetailContainer.innerHTML = `

  <a href="./courses.html" class="back-btn" onclick="back()" data-aos="fade-right">Back <i class="fa fa-backward" aria-hidden="true"></i></a>

  <div class="course-detail-header">
      <div data-aos="fade-up">
          <h1 class="course-title">${courseName}</h1>
          <p class="overview">${overview}</p>
          <div class="enroll-info">

              <div class="table">
                  <table class="styled-table">
                      <thead>
                          <tr>
                              <th>When</th>
                              <th>Time</th>
                              <th>Duration</th>
                              <th>Price</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>${details?.when}</td>
                              <td>${details?.time}</td>
                              <td>${details?.duration}</td>
                              <td>
                                  <div style="text-decoration:line-through">Rs. ${details?.price[0]}</div>
                                  <div>Rs. ${details?.price[1]}</div>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              
              <div class="enroll-details">

                  <div class="rating">
                      <p>Review</p>
                      <div class="stars">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>    
                      </div>
                  </div>

                  <div class="learners">
                      <p>Learners</p>
                      <span>${learners}</span>
                  </div>
              </div>
          </div>

          <a href="#" class="enroll-btn">Enroll</a>
      </div>
      <div class="video-player" data-aos="fade-left">
          
          <iframe  src=${videoSrc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
  </div>



  <div class="reason-to-enroll">
      
      <div data-aos="fade-right">
          <img src='./images/course-img/course-details/girl.jpg' />
      </div>
      
      <div data-aos="zoom-in">
          <h1>Why should you enroll in this Free ${shortName} Course?</h1>

          <ul></ul>
      </div>

      
  </div>


  <div class="prerequisite">
      <div data-aos="fade-right" data-aos-easing="ease-in-sine">
          <h1>${prerequisite.que}</h1>
          <b>${prerequisite.ans}</b>
          <p>${prerequisite.suggest}</p>
      </div>
      <div>
          <img src="./images/course-img/course-details/boy.jpg" />
      </div>
  </div>


  <div class="achievements">
      <h1 data-aos="fade-right">What will you take home from this ${shortName} Free Online course?</h1>

      <div class="achievements-details">
          <div class="left-side" data-aos="zoom-in"></div>
          <div class="right-side" data-aos="zoom-in"></div>
      </div>
  </div>



  <div class="reason-to-learn">
      <h2 data-aos="zoom-in" data-aos-duration=3000>Why should you learn ${shortName}?</h2>
      <div class="reasons"></div>
  </div>


  <div class="course-content-section">
      <h2 data-aos="zoom-in">Course Content</h2>

      <div class="course-contents">
          <div class="left-side" data-aos="zoom-in"></div>
          <div class="right-side" data-aos="zoom-in"></div>    
      </div>
  </div>


  <div class="course-features-section">
      <h2 data-aos="fade-right" data-aos-animation=1000>Features of ${shortName} free course</h2>

      <div class="course-feature-container" data-aos="fade-up" data-aos-duration=1000>
          
      </div>
  </div>


  <div class="course-for-whom">
      <h1 data-aos="fade-right" data-aos-duration=1000>${forWho.que}</h1>
      <p data-aos="zoom-in" data-aos-duration=1000>${forWho.ans}</p>
  </div>

  <div class="companies">
      <h1 data-aos="zoom-in">Companies you can expect <br> when you get Python-certified with us</h1>

      <div class="companies-img" data-aos="fade-up" data-aos-duration=1000>
          <img src="./images/companies.png" alt="companies image">
      </div>
  </div>


  <div class='faq-container'>
      <h1 data-aos="fade-right">${shortName} Online Training FAQs</h1>

      <div class="faqs" data-aos="fade-up" data-aos-duration=1000>

          <div class="faq-left"></div>
          <div class="faq-right"></div>

      </div>
  </div>
  
  `;

  // reason to enroll
  const ulContainer = document.querySelector(".reason-to-enroll ul");

  reasons?.enroll.forEach((item) => {
    const li = document.createElement("li");

    li.textContent = `${item}`;
    ulContainer.appendChild(li);
  });

  // take home section
  const achievementsLeft = document.querySelector(
    ".achievements-details .left-side"
  );
  const achievementsRight = document.querySelector(
    ".achievements-details .right-side"
  );

  // achievement left side
  reasons?.learn[0].forEach((item) => {
    const p = document.createElement("p");
    p.textContent = `${item}`;
    achievementsLeft.appendChild(p);
  });

  // achievements right side
  reasons?.learn[1].forEach((item) => {
    const p = document.createElement("p");
    p.textContent = `${item}`;
    achievementsRight.appendChild(p);
  });

  // why should learn python
  const reasonsContainer = document.querySelector(".reason-to-learn .reasons");

  why.forEach((item) => {
    const containerDiv = document.createElement("div");
    containerDiv.setAttribute("data-aos", "fade-right");
    containerDiv.setAttribute("data-aos-duration", 1000);

    const p = document.createElement("p");
    p.textContent = `${item.title}`;

    const span = document.createElement("span");
    span.style.fontWeight = "bold";
    span.textContent = `-${item.src}`;

    containerDiv.append(p, span);

    reasonsContainer.appendChild(containerDiv);
  });

  // course content left side

  const leftSideContent = document.querySelector(".course-contents .left-side");

  curriculum[0].forEach((item, index) => {
    const targetId = `ls${index}`;
    const target = `#ls${index}`;

    const containerDiv = document.createElement("div");
    containerDiv.innerHTML = `

           <div class="vcollapse-toggle" data-target=${target}>
               <p>${item.no}. ${item.title}</p>

           </div>

           <div class="vcollapse-content" id=${targetId}>

               <ol></ol>

           </div>
       `;

    leftSideContent.appendChild(containerDiv);

    const contentSelector = `#${targetId} ol`;
    const contentList = document.querySelector(contentSelector);

    item.content.forEach((text) => {
      const li = document.createElement("li");
      li.textContent = `${text}`;

      contentList.appendChild(li);
    });
  });

  // course content right side
  const rightSideContent = document.querySelector(
    ".course-contents .right-side"
  );

  curriculum[1].forEach((item, index) => {
    const targetId = `rs${index}`;
    const target = `#rs${index}`;

    const containerDiv = document.createElement("div");
    containerDiv.innerHTML = `

                   <div class="vcollapse-toggle" data-target=${target}>
                       <p>${item.no}. ${item.title}</p>

                   </div>

                   <div class="vcollapse-content" id=${targetId}>

                       <ol></ol>

                   </div>
               `;

    rightSideContent.appendChild(containerDiv);

    const contentSelector = `#${targetId} ol`;
    const contentList = document.querySelector(contentSelector);

    item.content.forEach((text) => {
      const li = document.createElement("li");
      li.textContent = `${text}`;

      contentList.appendChild(li);
    });
  });

  // course features
  const courseFeatureContainer = document.querySelector(
    ".course-feature-container"
  );

  features.forEach((feature) => {
    const parentDiv = document.createElement("div");
    parentDiv.innerHTML = `
  <div class="feature-img">
      <img src=${feature.img} />
  </div>

  <p>${feature.title}</p>`;

    courseFeatureContainer.appendChild(parentDiv);
  });

  // faq part

  const faqDiv = document.querySelector(".faqs");
  const faqLeftSide = document.querySelector(".faqs .faq-left");
  const faqRightSide = document.querySelector(".faqs .faq-right");

  // faq left side
  faq[0].forEach((item, index) => {
    const targetId = `fql${index}`;
    const target = `#fql${index}`;

    const containerDiv = document.createElement("div");
    containerDiv.innerHTML = `

                  <div class="vcollapse-toggle" data-target=${target}>
                      <p>${item.que}</p>

                  </div>

                  <div class="vcollapse-content" id=${targetId}>

                    <p> ${item.ans}</p>

                  </div>
              `;

    faqLeftSide.appendChild(containerDiv);
  });

  // faq right side
  faq[1].forEach((item, index) => {
    const targetId = `fqr${index}`;
    const target = `#fqr${index}`;

    const containerDiv = document.createElement("div");
    containerDiv.innerHTML = `

                  <div class="vcollapse-toggle" data-target=${target}>
                      <p>${item.que}</p>

                  </div>

                  <div class="vcollapse-content" id=${targetId}>

                    <p> ${item.ans}</p>

                  </div>
              `;

    faqRightSide.appendChild(containerDiv);
  });

  //jquery accordion
  $(".course-contents .left-side").vCollapse({
    any: true,
    onLoad: 0,
    speed: 300,
    easing: "ease-in",
  });

  $(".course-contents .right-side").vCollapse({
    any: true,
    onLoad: 0,
    speed: 300,
    easing: "ease-in",
  });

  $(".faqs .faq-left").vCollapse({
    any: true,
    onLoad: 0,
    speed: 300,
    easing: "ease-in",
  });

  $(".faqs .faq-right").vCollapse({
    any: true,
    onLoad: 0,
    speed: 300,
    easing: "ease-in",
  });
};
getAllData("data/course.json", courseDetails, queryString);
