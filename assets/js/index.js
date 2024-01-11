// QUIZ ARRAY
const quizArray = [
    {
        question: "What does HTML stand for?",
        questionOption1: "Hyper Text Markup Language",
        questionOption2: "High Tech Machine Learning",
        questionOption3: "Hyper Transfer Markup Language",
        questionOption4: "Hyperlink and Text Markup Language",
        correctAnswer: 1
    },
    {
        question: "Which of the following is not a valid CSS property for text alignment?",
        questionOption1: "text-align",
        questionOption2: "align-text",
        questionOption3: "text-justify",
        questionOption4: "text-indent",
        correctAnswer: 2
    },
    {
        question: "What is the purpose of the JavaScript addEventListener method?",
        questionOption1: "To create new elements",
        questionOption2: "To attach an event handler function to an HTML element",
        questionOption3: "To change the background color of an element",
        questionOption4: "To link external JavaScript files",
        correctAnswer: 2
    },
    {
        question: "In CSS, how can you select all paragraphs with the class \"intro\"?",
        questionOption1: "p.intro",
        questionOption2: ".intro p",
        questionOption3: "#intro p",
        questionOption4: "intro.p",
        correctAnswer: 2
    },
    {
        question: "What is the purpose of the <meta charset=\"UTF-8\"> tag in HTML?",
        questionOption1: "Set the character encoding for the document",
        questionOption2: "Define a meta description for search engines",
        questionOption3: "Embed external stylesheets",
        questionOption4: "Create a responsive design",
        correctAnswer: 1
    },
    {
        question: "Which of the following is NOT a valid way to declare a variable in JavaScript?",
        questionOption1: "var myVar = 5;",
        questionOption2: "const myVar = 5;",
        questionOption3: "let myVar = 5;",
        questionOption4: "myVar = 5;",
        correctAnswer: 4
    },
    {
        question: "What does the CSS property \"box-sizing: border-box;\" do?",
        questionOption1: "Adds a border around the box",
        questionOption2: "Includes padding and border in the element's total width and height",
        questionOption3: "Adjusts the margin of the box",
        questionOption4: "Centers the box on the page",
        correctAnswer: 2
    },
    {
        question: "Which HTML tag is used for creating an unordered list?",
        questionOption1: "ul",
        questionOption2: "ol",
        questionOption3: "li",
        questionOption4: "list",
        correctAnswer: 1
    },
    {
        question: "What is the purpose of the alt attribute in the HTML <img> tag?",
        questionOption1: "Define the image source",
        questionOption2: "Provide alternative text for screen readers",
        questionOption3: "Set the image height and width",
        questionOption4: "Add a caption to the image",
        correctAnswer: 2
    },
    {
        question: "How can you comment out multiple lines of code in JavaScript?",
        questionOption1: "// This is a comment",
        questionOption2: "/* This is a comment */",
        questionOption3: "# This is a comment",
        questionOption4: "-- This is a comment",
        correctAnswer: 1
    }

]

const quizContainer = document.querySelector(".quizCardContainer");
let currentQuizIndex = 0;
let score = 0; // Initialize the score variable
let timeRemaining = 600; // 10 minutes in seconds
let timerInterval;

let addQuizCard = () => {
    const div = document.createElement("div");
    div.innerHTML = `<p class="questionIndex">${currentQuizIndex + 1}/${quizArray.length}</p>
    <p class="question">${quizArray[currentQuizIndex].question}</p>
    <label for="" class="questionOption"><input type="radio" name="option${currentQuizIndex}" id="option1">${quizArray[currentQuizIndex].questionOption1}</label>
    <label for="" class="questionOption"><input type="radio" name="option${currentQuizIndex}" id="option2">${quizArray[currentQuizIndex].questionOption2}</label>
    <label for="" class="questionOption"><input type="radio" name="option${currentQuizIndex}" id="option3">${quizArray[currentQuizIndex].questionOption3}</label>
    <label for="" class="questionOption"><input type="radio" name="option${currentQuizIndex}" id="option4">${quizArray[currentQuizIndex].questionOption4}</label>
    <div class="nextButtonDiv">
        <button class="nextButton" type="button">NEXT</button>
    </div>`;

    quizContainer.innerHTML = '';
    quizContainer.appendChild(div);

    const nextButton = document.querySelector(".nextButton");
    nextButton.addEventListener('click', showNextQuestion);
};

const calculateScore = () => {
    const selectedOption = document.querySelector(`input[name="option${currentQuizIndex}"]:checked`);
    if (selectedOption) {
        const userAnswer = parseInt(selectedOption.id.slice(-1));
        if (userAnswer === quizArray[currentQuizIndex].correctAnswer) {
            score++;
        }
    }
};

const countDownTimer = document.getElementById("countDown")

const updateTimer = () => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const timerDisplay = document.querySelector(".timerDisplay");

    // Check if the h3 element already exists
    let h3 = countDownTimer.querySelector("h3");

    // If it doesn't exist, create a new one
    if (!h3) {
        h3 = document.createElement("h3");
        countDownTimer.appendChild(h3);
    }

    // Update the text content of the existing h3 element
    h3.innerText = `Time remaining ${minutes + "min"} : ${seconds + "s"}`;
};



const startTimer = () => {
    timerInterval = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            updateTimer();
        } else {
            clearInterval(timerInterval);
            showScorePage();
        }
    }, 1000);
};

let showNextQuestion = () => {
    const selectedOption = document.querySelector(`input[name="option${currentQuizIndex}"]:checked`);
    
    if (!selectedOption) {
        alert("Please choose an answer");
    } else {
        calculateScore();
        currentQuizIndex++;

        if (currentQuizIndex < quizArray.length) {
            addQuizCard();
        } else {
            clearInterval(timerInterval); // Stop the timer
            showScorePage();
        }
    }
};

const showScorePage = () => {
    quizContainer.innerHTML = `<div class="timerDisplay"></div>
        <fieldset>
        <legend>CONGRATULATIONS!!!</legend>
        <p>YOUR SCORE IS</p>
        <h3>${score}/${quizArray.length}</h3>
        <p>Time Remaining: ${Math.floor(timeRemaining / 60) + "min"} : ${timeRemaining % 60 + "s"}</p>
        <button type="button">VIEW FEEDBACK</button>
    </fieldset>`;
    document.querySelector(".quizCardContainer").style.backgroundColor = "transparent";
};

startTimer();
addQuizCard();