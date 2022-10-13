//Variables
var score = 0;
var questionIndex = 0;

var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTimer");
var questionsDiv = document.querySelector("#questionsdiv");
var btnStart = document.querySelector("#btn-start");
var wrapper = document.querySelector("#wrapper");
var titleItem = document.getElementById("#title-item");



var nextQuestions
var questionanswers = document.getElementById("#question-answer");


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

//timer
var secondsLeft = 75;
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");

timer.addEventListener("click", function() {
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
  render(questionIndex);
});

function render(questionIndex) {
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
      var userQuestion = questions[questionIndex].title;
      var userChoices = questions[questionIndex].choices;
      questionsDiv.textContent = userQuestion;
    }
    userChoices.forEach(function (newItem) {
      var listItem = document.createElement("li");
      listItem.textContent = newItem;
      questionsDiv.appendChild(ulCreate);
      ulCreate.appendChild(listItem);
      listItem.addEventListener("click", compare);
    });
  }