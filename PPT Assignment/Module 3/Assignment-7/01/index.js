let mainQuizContainer = document.getElementById("main-quiz-container")
let questionContainer = document.getElementById("question-container")
let submitBtn = document.getElementById("submit-btn")
let answerOption = document.getElementById("answer-container")
let ansStatus = document.getElementById("answer-status")
let mainResultContainer = document.getElementById("main-result-container")
let scoreStatus = document.getElementById("score-status")
let rightQuestion = document.getElementById("right-question")
let wrongQuestion = document.getElementById("wrong-question")
let resultContainer = document.getElementById("final-result-container")

let index = 0;
let serialNumber = 1
let score = 0

let questionsArr = [
    {
        question: "Which layer of databases deals with the physical storage and organization of data on disk?",
        answer: {
            a: "Physical layer",
            b: "Management layer",
            c: "Both a and b",
            d: "None of the above",
        },
        correctAnswer: "Physical layer",
    },
    {
        question: "Which layer of databases is responsible for enforcing data integrity and security?",
        answer: {
            a: "Physical layer",
            b: "Management layer",
            c: "Both a and b",
            d: "None of the above",
        },
        correctAnswer: "Management layer",
    },
    {
        question: "What are the three main components of the ER model?",
        answer: {
            a: "Entities, attributes, and queries",
            b: "Tables, columns, and keys",
            c: "Entities, attributes, and relationships",
            d: "Schemas, indexes, and constraints",
        },
        correctAnswer: "Entities, attributes, and relationships",
    },
];


questionContainer.innerHTML = `<p>Q${serialNumber} ${questionsArr[index].question}</p>`
answerOption.innerHTML = `<select class="select-container" id="answer-select">
                             <option>--Select Answer--</option>
                             <option>${questionsArr[0].answer.a}</option>
                             <option>${questionsArr[0].answer.b}</option>
                             <option>${questionsArr[0].answer.c}</option>
                             <option>${questionsArr[0].answer.d}</option>
                         </select>`


function updateQuestion() {
    if (index < questionsArr.length - 1) {
        index++;
        serialNumber++;
        questionContainer.innerHTML = `<p>Q${serialNumber} ${questionsArr[index].question}</p>`;
        answerOption.innerHTML = `<select id="answer-select" class="select-container">
                                    <option>--Select Answer--</option>
                                    <option>${questionsArr[index].answer.a}</option>
                                    <option>${questionsArr[index].answer.b}</option>
                                    <option>${questionsArr[index].answer.c}</option>
                                    <option>${questionsArr[index].answer.d}</option>
                                </select>`;
    } else {
        mainResultContainer.style.visibility = "visible"
        mainQuizContainer.style.display = "none"
        submitBtn.disabled = true;

    }
}

function checkAnswer() {
    let selectedOption = document.getElementById("answer-select").value;

    if (selectedOption === questionsArr[index].correctAnswer) {
        score++;
        ansStatus.innerHTML = `Status: Correct Answer`;
        ansStatus.style.backgroundColor = "#257e25";
        ansStatus.style.backgroundColor = "#257e25"
        scoreStatus.innerHTML = `Score: ${score}`
        rightQuestion.textContent = `Total Right Question: ${score}`;
        wrongQuestion.textContent = `Total Wrong Question: ${questionsArr.length - score}`;
        let percentage = (score / questionsArr.length) * 100;
        if (percentage >= 40) {
            resultContainer.textContent = `Final Result: Pass`;
        } else {
            resultContainer.textContent = `Final Result: Fail`;
        }

    } else {
        ansStatus.innerHTML = `Status: Wrong Answer`;
        ansStatus.style.backgroundColor = "#ff0000";
        ansStatus.style.backgroundColor = "#ff0000"
        scoreStatus.innerHTML = `Score: ${score}`
        rightQuestion.textContent = `Total Right Question: ${score}`;
        wrongQuestion.textContent = `Total Wrong Question: ${questionsArr.length - score}`;
        let percentage = (score / questionsArr.length) * 100;
        if (percentage >= 40) {
            resultContainer.textContent = `Final Result: Pass`;
        } else {
            resultContainer.textContent = `Final Result: Fail`;
        }
    }

    updateQuestion();
}

submitBtn.addEventListener("click", checkAnswer);
