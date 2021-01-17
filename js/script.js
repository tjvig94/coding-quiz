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
            question: "What should be set as 'charset' in the head of HTML files?", 
            a: "UTF-8", 
            b: "English", 
            c: "ABC123", 
            d: "charcoal",
            correctAnswer: "a"
        },
        {
            question: "What is a proper argument for a for-loop?", 
            a: "(let i = 0; i > array.length; i++)", 
            b: "(let i = 0, i < array.length, i++)", 
            c: "(const i = 0, i < array.length, i++)", 
            d: "(let i = 0; i < array.length; i++)",
            correctAnswer: "d"
        }
            
            ];

        
    let secondsLeft = 75;
    let userScores = JSON.parse(localStorage.getItem("Scores"));
    let i = 0;

    // The questions populate the quiz area. If there are no more questions, the quiz area is hidden, 
    // the timer stops, and the user is shown an input box where they can enter their name.
    function populateQuiz() {
        if (i >= questions.length) {
            $(".questionBox").hide();
            $(".enterScore").show();
            clearInterval(count);
        } else {
            $(".questionArea").text(questions[i].question);
            $(".answer1").text(questions[i].a);
            $(".answer2").text(questions[i].b);
            $(".answer3").text(questions[i].c);
            $(".answer4").text(questions[i].d);
        };           
                                                 
    };
    
    // The start button is hidden, and the quiz area is shown. The timer begins to count down.
    // If the timer reaches zero, it stops and shows the user an input box where they can enter their name.
    function game() {
        $(".questionBox").show();
        $(".startBtn").hide();
        $(".highScoreBox").hide();
        populateQuiz(i);
        
        count = setInterval(function() { 
            secondsLeft--;
            $(".timer").text(secondsLeft);
            if (secondsLeft <= 0) {
                clearInterval(count);
                secondsLeft = 0;
                $(".timer").text(secondsLeft);
                $(".questionBox").hide();
                $(".enterScore").show();                
                
            };
        }, 1000);  
    }

    // Check to see if the data-set value matches the correct answer in the question object.
    // If it is wrong, deduct 15 seconds from the timer and move to the next question.
    // Otherwise, continue to the next question with no time reduction.
    // Repopulate fields with new question and answers
    $(".answer").on("click", function() {
        if (this.dataset.option !== questions[i].correctAnswer) {
            secondsLeft = secondsLeft-15;
            (secondsLeft < 0) ? secondsLeft = 0 : "";
            $(".timer").text(secondsLeft);
            $(".answerResult").text("Wrong!");
        } else {
            $(".answerResult").text("Correct!");
        };        
        i++;
        populateQuiz(i);
    });

    // A new object is created that holds values of the user's name and score. It is then pushed to the userScores array.
    function setScore() { 
        let newScore = {
            "name": $(".nameInput").val(),
            "score": secondsLeft
        };
        (userScores == null) ? userScores = [] : "";        
        userScores.push(newScore);
        localStorage.setItem("Scores", JSON.stringify(userScores));
    };

    // The userScores array is looped through in order to show all newScore objects as a list of scores for the user to see.
    function appendScore() {
        for (let i = 0; i < userScores.length; i++) {
            $("ul.scoreList").append("<li>"+ userScores[i].name + ": " + userScores[i].score +"</li>");
        };
    };

    // When a user clicks on the "START" button, the game function executes.
    $(".startBtn").on("click", game);

    // When entering a name into the input box, a user is alerted if it is empty.
    // If a user enters a name, their score and name are saved, and they are shown the list of saved scores.
    function enterName() {
        let nameInput = $(".nameInput").val();
        if (nameInput == "") { 
            $(".alert").show();       
        } else {
            $(".enterScore").hide();
            $(".highScoreBox").show();
            setScore();
            appendScore();            
        };
    }
    
    // When a user clicks "submit" or hits the enter key, the enterName function is executed.
    $(".submitName").on("click", enterName);
    $(".nameInput").keypress(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            enterName();
        };
    });

    // When a user clicks on the "View Scores" text, they can see all the saved scores and names.
    $(".view-scores").on("click", function() {
        appendScore();
        $(".startBtn").hide();
        $(".highScoreBox").show();   
        $(".view-scores").text("");
    })
});


    






