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

      console.log(answerPaper);

      let correctAns = 0;
      let wrongAns = 0;
      let userAnswers = [];

      for (let i = 0; i < answerSheet.length; i++) {
        // check ans is available or not
        if (answerPaper[i][i + 1]) {
          // store users ans only
          userAnswers.push(answerPaper[i]);

          // evaluate the given ans
          if (answerSheet[i].correct_ans === answerPaper[i][i + 1]) {
            correctAns++;
          } else {
            wrongAns++;
          }
        }
      }

      console.log(userAnswers);

      console.log(answerSheet.length);
      let percentage = Math.round((correctAns / 30) * 100);
      let result = undefined;

      if (percentage >= 80) {
        result = "Passed";
      } else {
        result = "Failed";
      }

      // header part
      const header = document.createElement("div");
      header.classList.add("header");

      header.innerHTML = `
        <div class="logo">
            <img src='images/SK-Logo-yellow-black.png'/>
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

      userAnswers.forEach((ans) => {
        console.log(ans);

        const questionNo = Object.keys(ans)[0];
        const givenAns = Object.values(ans)[0];
        const questionName = answerSheet[questionNo - 1].question;
        const options = answerSheet[questionNo - 1].options;

        // correct ans of each question
        const correctOption = answerSheet[questionNo - 1].correct_ans;

        console.log(options);

        console.log(questionNo, givenAns);

        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        // <h2>Question No: ${questionNo}</h2>
        cardDiv.innerHTML = `
        
        <h1>${questionName}</h1>
        
        `;

        const optionDiv = document.createElement("div");
        optionDiv.classList.add("options");
        // display options

        options.forEach((option) => {
          // separate the option no and option name

          const optionNo = Object.keys(option)[0];
          const optionName = Object.values(option)[0];
          const optionShowDiv = document.createElement("p");
          optionShowDiv.innerHTML = `
          <span class="option-no">${optionNo}</span> <p class="option-value">${optionName}</p>
          `;

          if (givenAns == optionNo) {
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
