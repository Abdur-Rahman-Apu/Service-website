const mainContainer = document.querySelector("main");

const examName = JSON.parse(localStorage.getItem("exam-name"));
const answerPaper = JSON.parse(localStorage.getItem("quiz"));

const calculateMark = () => {
  // get answer sheet

  const fileName = examName + ".json";
  fetch(`data/Questions/${fileName}`)
    .then((res) => res.json())
    .then((answerSheet) => {
      // calculate mark here

      console.log(answerPaper);

      let correctAns = 0;
      let wrongAns = 0;
      let totalMark = 0;

      for (let i = 0; i < answerSheet.length; i++) {
        if (answerPaper[i][i + 1]) {
          if (answerSheet[i].correct_ans === answerPaper[i][i + 1]) {
            correctAns++;
          } else {
            wrongAns++;
          }
        }
      }

      totalMark = correctAns - wrongAns;

      if (totalMark < 0) {
        totalMark = 0;
      }

      let percentage = (totalMark / answerSheet.length) * 100;
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
                <p>Percentage: ${percentage} %</p>
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
    });
};

calculateMark();
