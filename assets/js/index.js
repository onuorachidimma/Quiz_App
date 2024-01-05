const quizArray = [
    {
        question: "What does HTML stand for?",
        questionOption1: "Hyper Text Markup Language",
        questionOption2: "High Tech Machine Learning",
        questionOption3: "Hyper Transfer Markup Language",
        questionOption4: "Hyperlink and Text Markup Language",
    },
    {
        question: "Which of the following is not a valid CSS property for text alignment?",
        questionOption1: "text-align",
        questionOption2: "align-text",
        questionOption3: "text-justify",
        questionOption4: "text-indent",
    },
    {
        question: "What is the purpose of the JavaScript addEventListener method?",
        questionOption1: "To create new elements",
        questionOption2: "To attach an event handler function to an HTML element",
        questionOption3: "To change the background color of an element",
        questionOption4: "To link external JavaScript files",
    },
    {
        question: "In CSS, how can you select all paragraphs with the class \"intro\"?",
        questionOption1: "p.intro",
        questionOption2: ".intro p",
        questionOption3: "#intro p",
        questionOption4: "intro.p",
    },
    {
        question: "What is the purpose of the <meta charset=\"UTF-8\"> tag in HTML?",
        questionOption1: "Set the character encoding for the document",
        questionOption2: "Define a meta description for search engines",
        questionOption3: "Embed external stylesheets",
        questionOption4: "Create a responsive design",
    },
    {
        question: "Which of the following is NOT a valid way to declare a variable in JavaScript?",
        questionOption1: "var myVar = 5;",
        questionOption2: "const myVar = 5;",
        questionOption3: "let myVar = 5;",
        questionOption4: "myVar = 5;",
    },
    {
        question: "What does the CSS property \"box-sizing: border-box;\" do?",
        questionOption1: "Adds a border around the box",
        questionOption2: "Includes padding and border in the element's total width and height",
        questionOption3: "Adjusts the margin of the box",
        questionOption4: "Centers the box on the page",
    },
    {
        question: "Which HTML tag is used for creating an unordered list?",
        questionOption1: "ul",
        questionOption2: "ol",
        questionOption3: "li",
        questionOption4: "list",
    },
    {
        question: "What is the purpose of the alt attribute in the HTML <img> tag?",
        questionOption1: "Define the image source",
        questionOption2: "Provide alternative text for screen readers",
        questionOption3: "Set the image height and width",
        questionOption4: "Add a caption to the image",
    },
    {
        question: "How can you comment out multiple lines of code in JavaScript?",
        questionOption1: "// This is a comment",
        questionOption2: "/* This is a comment */",
        questionOption3: "# This is a comment",
        questionOption4: "-- This is a comment",
    }

]



const quizContainer = document.querySelector(".quizCardContainer");

var addQuizCard = () => {
    for (let quiz = 0; quiz < quizArray.length; quiz++) {
        const div = document.createElement("div");
        div.innerHTML = `<p class="questionIndex">${quiz + 1 + "/" + quizArray.length}</p>
        <p class="question">${quizArray[quiz].question}</p>
        <p class="questionOption">${quizArray[quiz].questionOption1}</p>
        <p class="questionOption">${quizArray[quiz].questionOption2}</p>
        <p class="questionOption">${quizArray[quiz].questionOption3}</p>
        <p class="questionOption">${quizArray[quiz].questionOption4}</p>
        <div class="nextButtonDiv">
            <button class="nextButton" type="button">NEXT</button>
        </div>`

        quizContainer.appendChild(div);
    };

    
};
addQuizCard();