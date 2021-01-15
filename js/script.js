$(document).ready(function() {

    const questions = [ 
        {
            question: "What does DOM stand for?",
            a: "Document Object Model", 
            b: "Donut Oreo Muffin", 
            c: "Document Order Master", 
            d: "Delivered Object Model",
            correctAnswer: "a"

        },
        {
            question: "What does API stand for?", 
            a: "Application Pilot Interchange", 
            b: "Array Parsing Integer", 
            c: "Application Programming Interface", 
            d: "Apple Pie Ingestor",
            correctAnswer: "c"
        },
        {
            question: "Which of the following is part of the MERN stack?", 
            a: "Nord.js", 
            b: "MangoDB", 
            c: "Eggscript", 
            d: "React.js",
            correctAnswer: "d"
        },
        {
            question: "What charset is should be used in your HTML files?", 
            a: "UTF-8", 
            b: "English", 
            c: "ABC123", 
            d: "charcoal",
            correctAnswer: "a"
        }    
            ];

        

    let secondsLeft = 60;
    
    let i = 0;
    function populateQuiz(i) {
        if (i >= questions.length || secondsLeft <= 0) {
            $(".questionBox").hide();
            $(".highScoreBox").show();
            clearInterval(count);
        } else {
            $(".questionArea").text(questions[i].question);
            $(".answer1").text(questions[i].a);
            $(".answer2").text(questions[i].b);
            $(".answer3").text(questions[i].c);
            $(".answer4").text(questions[i].d);
        };           
                                                 
    };
    
    function game() {
        // Populate fields
        $(".questionBox").show();
        $(".startBtn").hide();
        populateQuiz(i);
        // Timer
        
        count = setInterval(function() { 
            secondsLeft--;
            $(".timer").text(secondsLeft);
            localStorage.setItem("score", secondsLeft);
            if (secondsLeft <= 0) {
                secondsLeft === 0;
                clearInterval(count);
            };
        }, 1000);  

    }

    // Repopulate fields with new question and answers
    $(".answer").on("click", function() {
    // Check to see if answer is correct or not
        if (this.dataset.correct !== questions[i].correctAnswer) {
            secondsLeft = secondsLeft-15;
        };        
        i++;
        populateQuiz(i);
    });

    $(".startBtn").on("click", game);

    $(".submitName").on("click", function() {        
        localStorage.setItem("name", document.querySelector(".nameInput").value);
    });



});
    






