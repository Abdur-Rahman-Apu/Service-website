const mainContainer = document.querySelector("main");

const examName = JSON.parse(localStorage.getItem("exam-name"));
const answerPaper = JSON.parse(localStorage.getItem("quiz"));

// calculate right and wrong ans
const calculateMark = () => {
  // get answer sheet

  const fileName = examName + ".json";

  // get question paper with answers
  fetch(`data/Questions/${fileName}`)
    .then((res) => res.json())
    .then((answerSheet) => {
      // calculate mark here

      let correctAns = 0;
      let wrongAns = 0;
      let userAnswers = [];

      for (let i = 0; i < answerPaper.length; i++) {
        // check ans is available or not

        console.log(answerPaper[i]);

        const originalQueNo = answerPaper[i].question_no;
        const serialNo = answerPaper[i].serial;
        const givenAns = answerPaper[i].given_ans;

        if (givenAns) {
          console.log(originalQueNo);
          // store users ans only
          // userAnswers.push(answerPaper[i]);

          // evaluate the given ans

          console.log(answerSheet[originalQueNo - 1].correct_ans);
          console.log(givenAns);

          if (answerSheet[originalQueNo - 1].correct_ans == givenAns) {
            correctAns++;
          } else {
            wrongAns++;
          }
        }
      }

      let percentage = (correctAns / 30) * 100;

      let result = undefined;

      if (percentage >= 80) {
        result = "Passed";
      } else {
        result = "Failed";
      }

      percentage = percentage.toFixed(2);

      // header part
      const header = document.createElement("div");
      header.classList.add("header");

      header.innerHTML = `
        <div class="logo">
            <img src='images/SK-Logo-yellow-black.png' alt="image" />
        </div>

        <h1>Course Name: ${examName}</h1>

        <div class="result">
            <div class="mark">
                <p>Correct Ans: ${correctAns}</p>
                <p>Wrong Ans: ${wrongAns}</p>
                <p>Percentage: ${percentage}%</p>
                <p>Result: <span>${result}</span></p>
            </div>

            <div class="achievement-logo">
            
            </div>


        </div>
`;

      mainContainer.appendChild(header);

      const achievementLogo = document.querySelector(".achievement-logo");
      const img = document.createElement("img");
      img.setAttribute("alt", "image");

      if (result == "Passed") {
        img.setAttribute("src", "images/pass.jpg");
      } else {
        img.setAttribute("src", "images/failed.jpg");
      }

      achievementLogo.appendChild(img);

      // create evaluate section to show correct and wrong ans
      const evaluateSection = document.createElement("section");
      evaluateSection.classList.add("evaluate-section");

      evaluateSection.innerHTML = `
      <div class="evaluate-section-header">
        <h1>Evaluation:</h1>
        <div class="color-palate">
            <p>
              <span class="correct-color"></span><span>Correct Answer</span>
            </p>
            <p>
              <span class="wrong-color"></span>
              <span>Wrong Answer</span>
            </p>
        </div>
      </div>

      <div class="evaluate-ans"></div>
      `;

      mainContainer.appendChild(evaluateSection);

      const cardContainer = document.createElement("div");
      cardContainer.classList.add("card-container");

      console.log("Evaluation");
      answerPaper.forEach((eachAns) => {
        console.log(eachAns);

        const serialNo = eachAns.serial;
        const questionNo = eachAns.question_no;
        const userAns = eachAns.given_ans;
        const questionName = answerSheet[questionNo - 1].question;
        const options = answerSheet[questionNo - 1].options;
        const correctOption = answerSheet[questionNo - 1].correct_ans;

        console.log(userAns, "userAns");
        console.log(correctOption, "correct option");

        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        // <h2>Question No: ${questionNo}</h2>
        cardDiv.innerHTML = `

        <span class="question-no" >Question No: ${serialNo}</span>
        <h1>${questionName}</h1>

        `;

        const optionDiv = document.createElement("div");
        optionDiv.classList.add("options");
        // display options

        options.forEach((option) => {
          // separate the option no and option name
          console.log(option);

          const optionNo = Object.keys(option)[0];
          const optionName = Object.values(option)[0];

          const optionShowDiv = document.createElement("p");
          optionShowDiv.innerHTML = `
          <span class="option-no">${optionNo}</span> <p class="option-value">${optionName}</p>
          `;

          if (userAns == optionNo) {
            optionShowDiv.classList.add("wrong-ans");
          }

          if (correctOption == optionNo) {
            optionShowDiv.classList.add("correct-ans");
          }

          optionDiv.appendChild(optionShowDiv);
        });

        cardDiv.appendChild(optionDiv);
        cardContainer.appendChild(cardDiv);
        evaluateSection.appendChild(cardContainer);
      });
    });
};

calculateMark();
