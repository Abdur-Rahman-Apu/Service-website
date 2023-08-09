// This function is like initial answer paper to store users answers

const answerFormat = (examName) => {
  const ansFormatToStore = [
    { 1: "" },
    { 2: "" },
    { 3: "" },
    { 4: "" },
    { 5: "" },
    { 6: "" },
    { 7: "" },
    { 8: "" },
    { 9: "" },
    { 10: "" },
    { 11: "" },
    { 12: "" },
    { 13: "" },
    { 14: "" },
    { 15: "" },
    { 16: "" },
    { 17: "" },
    { 18: "" },
    { 19: "" },
    { 20: "" },
    { 21: "" },
    { 22: "" },
    { 23: "" },
    { 24: "" },
    { 25: "" },
    { 26: "" },
    { 27: "" },
    { 28: "" },
    { 29: "" },
    { 30: "" },
    { 31: "" },
    { 32: "" },
    { 33: "" },
    { 34: "" },
    { 35: "" },
    { 36: "" },
    { 37: "" },
    { 38: "" },
    { 39: "" },
    { 40: "" },
    { 41: "" },
    { 42: "" },
    { 43: "" },
    { 44: "" },
    { 45: "" },
    { 46: "" },
    { 47: "" },
    { 48: "" },
    { 49: "" },
    { 50: "" },
    { 51: "" },
    { 52: "" },
    { 53: "" },
    { 54: "" },
    { 55: "" },
    { 56: "" },
    { 57: "" },
    { 58: "" },
    { 59: "" },
    { 60: "" },
    { 61: "" },
    { 62: "" },
    { 63: "" },
    { 64: "" },
    { 65: "" },
    { 66: "" },
    { 67: "" },
    { 68: "" },
    { 69: "" },
    { 70: "" },
    { 71: "" },
    { 72: "" },
    { 73: "" },
    { 74: "" },
    { 75: "" },
    { 76: "" },
    { 77: "" },
    { 78: "" },
    { 79: "" },
    { 80: "" },
    { 81: "" },
    { 82: "" },
    { 83: "" },
    { 84: "" },
    { 85: "" },
    { 86: "" },
    { 87: "" },
    { 88: "" },
    { 89: "" },
    { 90: "" },
    { 91: "" },
    { 92: "" },
    { 93: "" },
    { 94: "" },
    { 95: "" },
    { 96: "" },
    { 97: "" },
    { 98: "" },
    { 99: "" },
    { 100: "" },
  ];

  localStorage.setItem("quiz", JSON.stringify(ansFormatToStore));
};

// This function will store users ans to the default answer paper

const storeUserAnswers = (questionNo, givenAns) => {
  console.log(questionNo, givenAns);

  //   get answer paper from the localStorage
  const answerPaper = JSON.parse(localStorage.getItem("quiz"));

  // for (let i = 0; i < questionNo; i++) {
  //   answerPaper[i][questionNo] = givenAns;
  // }

  answerPaper[questionNo - 1][questionNo] = givenAns;

  localStorage.setItem("quiz", JSON.stringify(answerPaper));
};

// This function will identify which option is selected by the user
const answerSelect = () => {
  // find the selected option
  const optionList = document.querySelectorAll(".option-div p");

  for (let i = 0; i < optionList.length; i++) {
    optionList[i].addEventListener("click", function () {
      optionList.forEach((el) => el.classList.remove("select"));

      optionList[i].classList.add("select");

      const questionNo =
        optionList[i].parentNode.previousElementSibling.previousElementSibling
          .innerText;

      const selectedAns = optionList[i].childNodes[1].innerText;

      //   get answer format from the localStorage
      storeUserAnswers(questionNo, selectedAns);
    });
  }
};

// This function is for submitting the answer paper

const submitAnswerPaper = () => {
  const submitBtn = document.querySelector(".submit-btn");
  console.log(submitBtn);
  submitBtn.addEventListener("click", function () {
    Swal.fire({
      icon: "question",
      iconColor: "#000",
      title: "Do you want to submit?",
      confirmButtonText: "Yes",
      confirmButtonColor: "#f5df4e",
      showConfirmButton: true,
      showCancelButton: true,
    }).then((isConfirm) => {
      console.log(isConfirm);

      const { isConfirmed } = isConfirm;

      if (isConfirmed) {
        window.location.href = "result.html";
      }
    });
  });
};

// This function will show the questions and timer
const quizShow = () => {
  // get exam name from the localStorage
  const search = JSON.parse(localStorage.getItem("exam-name"));

  const fileName = "data/Questions/" + search + ".json";

  console.log(fileName);

  fetch(fileName)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      //main section
      const mainSection = document.querySelector("main");

      //   question page header
      const headerContainer = document.createElement("div");
      headerContainer.classList.add("header");

      // companyLogo
      const companyLogo = document.createElement("div");
      companyLogo.classList.add("company-logo");

      companyLogo.innerHTML = `
        <img src="images/SK-Logo-yellow-black.png"/>
      `;

      //   exam name
      const examName = document.createElement("h1");
      examName.innerText = "Exam: " + search;

      const durationMarkDiv = document.createElement("div");
      durationMarkDiv.classList.add("duration-mark");

      //   exam duration
      const duration = document.createElement("p");
      duration.innerText = "Time: 20 Minutes";

      //   total mark
      const mark = document.createElement("p");
      mark.innerText = "Mark: 30";

      durationMarkDiv.append(duration, mark);

      headerContainer.append(companyLogo, examName, durationMarkDiv);

      mainSection.appendChild(headerContainer);

      // question and timer section

      const questionContainer = document.createElement("div");
      questionContainer.classList.add("question-container");

      //   questionsDiv
      const questionsDiv = document.createElement("div");
      questionsDiv.classList.add("question-div");

      // randomly show 30 questions from 100 questions

      // Function to shuffle an array randomly (using the Fisher-Yates shuffle algorithm)
      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }

      // Shuffle the array of all items
      shuffleArray(data);

      // Take the first 30 items from the shuffled array
      const randomItems = data.slice(0, 30);

      // Display the randomly selected items
      console.log(randomItems);

      randomItems.forEach((question, index) => {
        const questionCard = document.createElement("div");
        questionCard.setAttribute("id", `q-${index + 1}`);

        const questionNo = document.createElement("h2");
        questionNo.innerText = "Question No: " + (index + 1);

        const hiddenOriginalQuestionNo = document.createElement("span");
        hiddenOriginalQuestionNo.innerText = question?.question_no;
        hiddenOriginalQuestionNo.style.display = "none";

        const questionName = document.createElement("h2");
        questionName.innerText = question?.question;

        // options
        const optionDiv = document.createElement("div");
        optionDiv.classList.add("option-div");

        question?.options.forEach((option) => {
          const key = Object.keys(option)[0];
          const value = Object.values(option)[0];

          const optionName = document.createElement("p");
          optionName.innerHTML = `
          <span class="option-no">${key}</span> <p>${value}</p>
          `;

          //   insert option one by one
          optionDiv.appendChild(optionName);
        });

        questionCard.append(
          questionNo,
          hiddenOriginalQuestionNo,
          questionName,
          optionDiv
        );
        questionsDiv.appendChild(questionCard);
      });

      // submit button
      const submitBtn = document.createElement("button");
      submitBtn.innerText = "Submit";
      submitBtn.classList.add("submit-btn");
      questionsDiv.appendChild(submitBtn);

      mainSection.appendChild(questionContainer);

      // timer div
      const timerDiv = document.createElement("div");
      timerDiv.classList.add("timer-div");

      // navigate to specific questions
      const navigationBtnDiv = document.createElement("div");
      navigationBtnDiv.classList.add("navigation-anchors");

      for (let i = 0; i <= 30; i += 5) {
        const anchorTag = document.createElement("a");

        let href;

        if (i == 0) {
          anchorTag.innerText = i + 1;
          href = `#q-${i + 1}`;
        } else {
          anchorTag.innerText = i;
          href = `#q-${i}`;
        }

        anchorTag.setAttribute("href", href);

        navigationBtnDiv.appendChild(anchorTag);
      }

      timerDiv.appendChild(navigationBtnDiv);

      // remaining time

      const remainingDiv = document.createElement("div");
      remainingDiv.classList.add("time-remaining");

      const timeShow = document.createElement("p");

      // calculate time in minute and second and display using setTimeout
      let totalSeconds = 1200;
      let timerId;

      function startTimer() {
        timerId = setTimeout(function () {
          totalSeconds--;
          if (totalSeconds == 0) {
            // time end
            clearTimeout(timerId);
            timeShow.innerText = "Times Up";
            timeShow.classList.add("red");
            Swal.fire({
              icon: "question",
              iconColor: "#000",
              title: "TImes Up!",
              text: "Please submit your answer script",
              confirmButtonText: "Ok",
              confirmButtonColor: "#f5df4e",
              showConfirmButton: true,
              allowOutsideClick: false,
            }).then((isConfirm) => {
              console.log(isConfirm);

              const { isConfirmed } = isConfirm;

              if (isConfirmed) {
                window.location.href = "result.html";
              }
            });
          } else {
            // convert time into minute and second
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;

            // Format the minutes and seconds with leading zeros if needed
            const formattedTime = `${minutes
              .toString()
              .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

            timeShow.innerText = formattedTime;
            console.log(formattedTime);

            // Continue the timer
            startTimer();
          }
        }, 1000); // 1000 milliseconds = 1 second
      }

      // Start the timer
      startTimer();

      remainingDiv.appendChild(timeShow);

      timerDiv.appendChild(remainingDiv);

      console.log(data, "question");

      //   add question div and timer div
      questionContainer.append(questionsDiv, timerDiv);

      mainSection.appendChild(questionContainer);

      // initial answer store in the local storage
      answerFormat(search);

      //   answer select
      answerSelect();

      //   submit ans
      submitAnswerPaper();
    });
};

quizShow();
