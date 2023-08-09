const getQuizCourse = () => {
  fetch("data/quiz-course.json")
    .then((res) => res.json())
    .then((data) => {
      // container

      console.log(data);
      if (data) {
        const container = document.querySelector(".all-courses-section");

        data?.forEach((course) => {
          // card parent div
          const cardDiv = document.createElement("div");
          cardDiv.classList.add("card");
          cardDiv.setAttribute("data-aos", "fade-up");
          cardDiv.setAttribute("data-aos-duration", "3000");

          // card image
          const imageDiv = document.createElement("div");
          imageDiv.classList.add("card-image");

          // image
          const image = document.createElement("img");
          image.setAttribute("src", course?.bannerImg);

          imageDiv.appendChild(image);

          // course name
          const courseName = document.createElement("h1");
          courseName.classList.add("course-name");
          courseName.innerText = course.courseName;

          // button
          const anchorTag = document.createElement("a");
          anchorTag.setAttribute("id", `attempt-quiz`);
          anchorTag.innerText = "Attempt Quiz";

          cardDiv.append(imageDiv, courseName, anchorTag);

          container.appendChild(cardDiv);

          console.log(container);
        });

        attemptQuiz();
      }
    });
};

const attemptQuiz = () => {
  const attemptBtn = document.querySelectorAll("#attempt-quiz");
  for (let i = 0; i < attemptBtn.length; i++) {
    attemptBtn[i].addEventListener("click", function () {
      const courseName = attemptBtn[i].previousElementSibling.innerText;

      console.log(courseName);

      // confirm box to start quiz
      Swal.fire({
        icon: "question",
        iconColor: "#000",
        html: "<div class='exam-rule'> <h3>Exam rules</h3> <hr> <p>1. Exam time 20 minutes</p> <p>2. 30 questions</p> <p>3. Each question contains 1 mark </p> <p>4. If you achieve 80% mark or more, then you will be passed</p></div>",
        title: "Do you want to start exam?",
        confirmButtonText: "Yes",
        confirmButtonColor: "#f5df4e",
        showConfirmButton: true,
        showCancelButton: true,
      }).then((isConfirm) => {
        console.log(isConfirm);

        const { isConfirmed } = isConfirm;

        if (isConfirmed) {
          localStorage.setItem("exam-name", JSON.stringify(courseName));
          window.location.href = `exam-page.html`;
        }
      });
    });
  }
};

getQuizCourse();
