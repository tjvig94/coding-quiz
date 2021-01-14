$(document).ready(function() {

    const questions = [ 
        {question: "What does DOM stand for?", correct: "Document Object Model", wrong1: "Donut Oreo Muffin", wrong2: "Document Order Master", wrong3: "Delivered Object Model"},
        {question: "What does API stand for?", correct: "Application Programming Interface", wrong1: "Application Pilot Interchange", wrong2: "Array Parsing Integer", wrong3: "Apple Pie Ingestor"},
        {question: "Which of the following is part of the MERN stack?", correct: "React.js", wrong1: "Nord.js", wrong2: "MangoDB", wrong3: "Eggscript"},
        {question: "What charset is should be used in your HTML files?", correct: "UTF-8", wrong1: "English", wrong2: "ABC123", wrong3: "charcoal"},
        {question: "What do you think?", correct: "Yes", wrong1: "No", wrong2: "Maybe", wrong3: "Eh"}    
            ];

    let secondsLeft = 60;
    
    let i = 0;
    function populateQuiz(i) {
        if (i >= questions.length || secondsLeft <= 0) {
            alert("Game over!!!! yikes....");
        } else {
            $(".questionArea").text(questions[i].question);
            $(".answer1").text(questions[i].correct).attr("data-correct","true");
            $(".answer2").text(questions[i].wrong1).attr("data-correct","false");
            $(".answer3").text(questions[i].wrong2).attr("data-correct","false");
            $(".answer4").text(questions[i].wrong3).attr("data-correct","false");
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
            localStorage.setItem("score", JSON.stringify(secondsLeft));
            if (secondsLeft <= 0) {
                secondsLeft === 0;
                clearInterval(count);
            };
        }, 1000);  

    }

    // Repopulate fields with new question and answers
    $(".answer").on("click", function() {
        i++;
        populateQuiz(i);
        // Check to see if answer is correct or not
        if (this.dataset.correct === "false") {
            console.log(this.dataset.correct);
            secondsLeft = secondsLeft-15;
        };
    });
    
    $(".startBtn").on("click", game);



    

});




