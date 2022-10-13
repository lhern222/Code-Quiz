//Variables
var score = 0;
var quizList = 0;

var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("startTimer");
var quizQuestions = document.getElementById("#quiz-questions");
var btnStart = document.getElementById("#btn-start");
var wrapper = document.querySelector("#wrapper");

var storedScores = JSON.parse(localStorage.getItem("userData"));

var questions = [
    {
        question: "Commonly used data types DO Not Include: ________.",
        selection: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"

    },
    {
        question: "The condition in an if/else statement is enclised with: _______.",
        selection: ["quotes","curly brackets", "parenthesis", "square brackets"], 
        answer: "parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store _______.",
        selection: ["numbers and strings", "other arrays", "booleans", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        selection: ["commas", "curly brakets", "quotes", "parenthesis"],
        answer: "curly brackets"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        selection: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    },
    
];

var secondsLeft = 75;
var holdInterval = 0;
var penalty = 5;
var ulCreate = document.createElement("ul");

timer.addEventListerner("click", function() {
  if (holdInterval === 0) {
    holdInterval = setInterval(function () {
        secondsLeft--;
        currentTime.textContent = "Time Remaining: " + secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(holdInterval);
            allDone();
            currentTime.textContent = "Out of time!";
        }
    }, 1000);
  }
  render(quizList);
});

function render(_quizIndex) {
    quizQuestions.innerHTML = "";
    ulCreate.innerHTML = "";

    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[quizIndex].title;
        var userChoices = questions[quizIndex].choices;
        quizQuestions.textContent = userQuestion;
    }
    userChoices.forEach(function (newItem) {
        var listItems = document.createElement("li");
        listItems.textContent = newItem;
        quizQuestions.appendChild(ulCreate);
        ulCreate.appendChild(listItems);
        listItems.addEventListener("click", (compare));
    
    })
}