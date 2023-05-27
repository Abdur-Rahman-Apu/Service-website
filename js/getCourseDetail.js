const queryString = location.search.substring(1);

const courseDetails = (data, courseId) => {
  const courseFind = data.find((course) => course.id == courseId);
  console.log(courseFind);

  const {
    courseName,
    bannerImg,
    overview,
    shortName,
    reasons,
    why,
    curriculum,
    features,
    faq,
    forWho,
    prerequisite,
    separateCourses
  } = courseFind;

  const courseDetailContainer = document.querySelector(
    ".course-detail-container"
  );

  courseDetailContainer.innerHTML = `
  
  <div class="course-detail-header">
  
    <div class="course-info" data-aos="fade-down">
      <h1 class="course-title">${courseName}</h1>
      <p class="overview">${overview}</p>

      <!-- modal  -->
      <div id="ex1" class="modal">
          <div>
              <h1>Want to Book Your Seat?</h1>
              <hr>

              <div class="send-info">
                  <div>
                      <img src="./images/course-img/send.jpg" alt="image">
                  </div>

                  <div>
                      <form method="POST" id="send-message-form">
                          <div class="name-field">
                              <label for="name">Name</label> <br>
                              <input type="text" name="name" id="name" placeholder="Enter your name" required>
                          </div>

                          <div class="email">
                              <label for="email">Email</label> <br>
                              <input type="email" name="email" id="email" placeholder="Enter your email" required>
                          </div>

                          <div class="country-select">
                              <label for="country_selector">Country</label> <br>
                              <input id="country_selector" type="text">
                          </div>

                          <div class="phone-no">
                              <label for="phoneField">Phone</label> <br>
                              <input type="text" id="phoneField" name="phoneField" class="phone-field"
                                  placeholder="+14844731560" required>
                          </div>

                          <div class="course-select">
                              <label for="courses">Course</label> <br>
                              <select id="courses" name="course">
                                  <option>Python Certification Course in English</option>
                                  <option>Big Data and Hadoop Certification Course</option>
                                  <option>C, C++ & Java Programming Course</option>
                                  <option>ML Course in English</option>
                                  <option>FiaUI/UX Certification Course in Englisht</option>
                                  <option>Big Data Certification Course with Hadoop & Spark</option>
                                  <option>Apache Kafka Certification Course</option>
                                  <option>Apache Flink Certification Course</option>
                                  <option>AWS Certification Course in English</option>
                                  <option>Full Stack Web Development Certification Course in English</option>
                                  <option>Apache Spark and Scala Certification Course in English</option>
                                  <option>Scala Certification Course in English</option>
                                  <option>Angular Certification Course in English</option>
                                  <option>ADOBE-XD Certification Course in English</option>
                                  <option>Adobe After Effects Certification Course in English</option>
                                  <option>Artificial Intelligence Certification Course in English</option>
                                  <option>Android Development Certification Course in English</option>
                                  <option>CCNA Certification Course in English</option>
                                  <option>CCSP Certification Course in English</option>
                                  <option>ChatGPT Certification Course in English</option>
                                  <option>Cloud Computing Certification Course in English</option>
                                  <option>Data Science Certification Course in English</option>
                                  <option>DevOps Certification Course in English</option>
                                  <option>Digital Marketing Certification Course in English</option>
                                  <option>Ethical Hacking Certification Course in English</option>
                                  <option>Figma Certification Course in English</option>
                                  <option>Adobe Illustrator Certification Course in English</option>
                                  <option>Linux Certification Course in English</option>
                                  <option>Microsoft Azure Certification Course in English</option>
                                  <option>Adobe Premiere Pro Certification Course in English</option>
                                  <option>Adobe Photoshop Certification Course in English</option>
                                  <option>Microsoft Word Certification Course in English</option>
                                  <option>Microsoft Excel Certification Course in English</option>
                                  <option>Microsoft Powerpoint Certification Course in English</option>
                                  <option>Sales Force Certification Course in English</option>
                                  <option>Wordpress Certification Course in English</option>
                                  <option>Career Clarity Certification Course in English</option>
                                  <option>Computer Forensics Certification Course in English</option>
                                  <option>Bug Bounty Certification Course in English</option>
                                  <option>Dark Net Certification Course in English</option>
                                  <option>Certified Cyber Ninja Course in English</option>
                                  <option>Malware Analysis and Dissecting Malicious Softwares Certification Course
                                  </option>
                                  <option>Cyber Warrior Certification Course</option>
                              </select>
                          </div>

                          <div class="message-box">
                              <label for="message">Message</label> <br>
                              <textarea name="message" id="message" cols="45" rows="15"
                                  placeholder="Enter your message" required></textarea>
                          </div>

                          <input id="submit-btn" type="submit" value="Submit">
                      </form>
                  </div>
              </div>
          </div>
      </div>



      <a href="#ex1" rel="modal:open" class="book-btn">Book a Session</a>
    </div>
          
    <div class="banner-img">
        <img src=${bannerImg} data-aos="fade-up" />
    </div>
      
  </div>

  <div class="achievements">
      <h1 data-aos="fade-right">What will you take home <br> from this ${shortName} Online course?</h1>

      <div class="achievements-details">
          <div class="left-side" data-aos="zoom-in"></div>
          <div class="right-side" data-aos="zoom-in"></div>
      </div>
  </div>

  <div class="reason-to-enroll">
      
      <div data-aos="fade-right" class="reason-to-enroll-left-side">
          <img src='./images/course-img/course-details/girl.jpg' />
      </div>
      
      <div data-aos="zoom-in" class="reason-to-enroll-right-side">
          <h1>Why should you enroll in this ${shortName} course?</h1>

            <div class="reason-part-one">
              <ul></ul>
            </div>
            
            <div class="reason-part-two">
              <ul></ul>
            </div>
          
      </div>

      
  </div>


  <div class="prerequisite">
      <div data-aos="fade-right" data-aos-easing="ease-in-sine">
          <h1>${prerequisite.que}</h1>
          <b><span class="highlight">${prerequisite.ans}</span></b>
          <p>${prerequisite.suggest}</p>
      </div>
      <div>
          <img src="./images/course-img/course-details/boy.jpg" data-aos="zoom-in-up" />
      </div>
  </div>



  <div class="reason-to-learn">
      <h2 data-aos="zoom-in" data-aos-duration=3000>Why should you learn ${shortName}?</h2>
      <div class="reasons"></div>
  </div>


  <div class="course-content-section">
      <h2 data-aos="zoom-in">Course Content</h2>

      <div class="course-contents">
          
      </div>
  </div>


  <div class="course-features-section">
      <h2 data-aos="fade-right" data-aos-animation=1000>Features of ${shortName} course</h2>

      <div class="course-feature-container" data-aos="fade-up" data-aos-duration=1000>
          
      </div>
  </div>


  <div class="course-for-whom">
  <h1 data-aos="fade-right" data-aos-duration=1000>${forWho.que}</h1>
        <div class="course-for-whom-ans">
        <div class="course-for-whom-details">
        <p data-aos="zoom-in" data-aos-duration=1000>${forWho.ans}</p>
      </div>
      <div class="course-for-whom-img">
        <img src="./images/confusion.jpg" data-aos="fade-up" />
      </div>
        </div>
  </div>

  <div class="companies">
      <h1 data-aos="zoom-in">Companies you can expect <br> when you get ${shortName}-certified with us</h1>

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
                const ulContainerPartOne = document.querySelector(
                    ".reason-to-enroll .reason-part-one ul"
                );

                const ulContainerPartTwo = document.querySelector(
                    ".reason-to-enroll .reason-part-two ul"
                );

                reasons?.enroll[0].forEach((item) => {
                    const li = document.createElement("li");

                    li.innerHTML = `<i class="fa-solid fa-check"></i> ${item}`;
                    ulContainerPartOne.appendChild(li);
                });

                reasons?.enroll[1].forEach((item) => {
                    const li = document.createElement("li");

                    li.innerHTML = `<i class="fa-solid fa-check"></i> ${item}`;
                    ulContainerPartTwo.appendChild(li);
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
                    p.innerHTML = `<i class="fa-solid fa-check"></i>  ${item}`;
                    achievementsLeft.appendChild(p);
                });

                // achievements right side
                reasons?.learn[1].forEach((item) => {
                    const p = document.createElement("p");
                    p.innerHTML = `<i class="fa-solid fa-check"></i> ${item}`;
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



                // content
                const courseNo = ['courseOne', 'courseTwo', 'courseThree', 'courseFour']

                const courseContentSection = document.querySelector('.course-contents')
                console.log(courseContentSection);

                for (let i = 0; i < curriculum.length; i++) {
                    console.log(i);

                    const contentHolderDiv = document.createElement('div')

                    if(separateCourses){
                        const h1=document.createElement('h1')
                        h1.classList.add('course-name')
                        h1.innerText=separateCourses[i]
                        contentHolderDiv.appendChild(h1)
                    }
                    

                    curriculum[i].forEach((item, index) => {

                        

                        const targetId = `${courseNo[i] + index}`;
                        const target = `#${courseNo[i] + index}`;

                        console.log(item);


                        const parentDiv = document.createElement('div');

                        parentDiv.innerHTML = `
                        

                            <div class="vcollapse-toggle" data-target=${target}>
                                <p>${item.no}. ${item.title}</p>
                            </div>

                            <div class="vcollapse-content" id=${targetId}>

                                <ol></ol>

                            </div>

                       
                        
                        `;

                        contentHolderDiv.appendChild(parentDiv)

                        courseContentSection.appendChild(contentHolderDiv)


                        const contentSelector = `.course-contents #${targetId} ol`;
                        const contentList = document.querySelector(contentSelector);
                        console.log(contentList);

                        item.content.forEach((text) => {
                            const li = document.createElement("li");
                            li.innerHTML = `${text}`;

                            contentList.appendChild(li);
                        });

                    })

                }



                // course features
                const courseFeatureContainer = document.querySelector(
                    ".course-feature-container"
                );

                features.forEach((feature) => {
                    const parentDiv = document.createElement("div");
                    parentDiv.classList.add("feature");
                    parentDiv.setAttribute("data-aos", "flip-right");
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
                $(".course-contents > div").vCollapse({
                    any: true,
                    onLoad: -1,
                    speed: 300,
                    easing: "ease-in",
                });

                // $(".course-contents > div").vCollapse({
                //     any: true,
                //     onLoad: -1,
                //     speed: 300,
                //     easing: "ease-in",
                // });

                $(".faqs .faq-left").vCollapse({
                    any: true,
                    onLoad: -1,
                    speed: 300,
                    easing: "ease-in",
                });

                $(".faqs .faq-right").vCollapse({
                    any: true,
                    onLoad: -1,
                    speed: 300,
                    easing: "ease-in",
                });


                // modal 
                (function () {
                    emailjs.init("huB7HdbtLQHtlBqmr");
                })();
        
        
                $(document).ready(function () {
        
                    $(".course-detail-header .course-info .modal .send-info .country-select #country_selector").countrySelect({
                        defaultCountry: "us",
                        defaultStyling: "inside"
                    })
        
                })
        
        
                const handleForm = () => {
                    event.preventDefault();
        
                    const form = document.getElementById('send-message-form')
        
                    const name = form.name.value;
                    const email = form.email.value;
        
                    const country = $("#country_selector").countrySelect("getSelectedCountryData").name;
        
                    const telephone = form.phoneField.value;
        
                    const course = form.course.value;
        
                    const message = form.message.value;
        
                    const emailParams = {
                        from_name: name,
                        email_id: email,
                        country_name: country,
                        telephone: telephone,
                        course_name: course,
                        message: message
                    }
        
                    emailjs.send('service_hcm5p5a', 'template_o0io9dy', emailParams, 'huB7HdbtLQHtlBqmr')
                        .then(res => {
        
                            $.toast({
                                text: "Your email sent successfully",
                                showHideTransition: 'slide',
                                bgColor: '#2ecc71',
                                textColor: '#fff',
                                allowToastClose: false,
                                hideAfter: 5000,
                                stack: 5,
                                textAlign: 'center',
                                position: 'top-center'
                            })
                            form.reset()
                        })
                        .catch((err) => {
                            $.toast({
                                text: "Sorry. Something wrong!",
                                showHideTransition: 'slide',
                                bgColor: '#e74c3c',
                                textColor: '#fff',
                                allowToastClose: false,
                                hideAfter: 5000,
                                stack: 5,
                                textAlign: 'center',
                                position: 'top-center'
                            })
        
                            form.reset()
                        })
        
                }

                document.getElementById('submit-btn').addEventListener('click',handleForm)
};
getAllData("data/course.json", courseDetails, queryString);
