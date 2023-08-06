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

          // card image
          const imageDiv = document.createElement("div");
          imageDiv.classList.add("card-image");

          // image
          const image = document.createElement("img");
          image.setAttribute("src", course?.bannerImg);

          imageDiv.appendChild(image);

          // button
          const anchorTag = document.createElement("a");
          anchorTag.setAttribute(
            "href",
            `./exam-page.html?${course?.courseName}`
          );
          anchorTag.innerText = "Attempt Quiz";

          cardDiv.append(imageDiv, anchorTag);

          container.appendChild(cardDiv);

          console.log(container);
        });
      }
    });
};

getQuizCourse();
