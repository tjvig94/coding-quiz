const questions = [
    "What does DOM stand for?",
    "What does API stand for?",
    "Which of the following is a value for the CSS property, position?",
    "Which of the following is the propery syntax for a ternary conditional?"
];

const startButton = document.querySelector(".startBtn");
const timer = document.querySelector(".timer");
// var score = 

function countdown() {
    let secondsLeft = 60;
    count = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
        localStorage.setItem("score", secondsLeft);
        if (secondsLeft === 55) {
            clearInterval(count);
        };
    }, 1000);



}




startButton.addEventListener("click", countdown);



