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
    let userScores = JSON.parse(localStorage.getItem("Scores"));
    let i = 0;

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
    
    function game() {
        $(".questionBox").show();
        $(".startBtn").hide();
        $(".highScoreBox").hide();
        populateQuiz(i);
        
        count = setInterval(function() { 
            secondsLeft--;
            $(".timer").text(secondsLeft);
            if (secondsLeft <= 0) {
                secondsLeft === 0;
                $(".questionBox").hide();
                $(".enterScore").show();                
                clearInterval(count);
            };
        }, 1000);  
    }

    // Repopulate fields with new question and answers
    $(".answer").on("click", function() {
        if (this.dataset.option !== questions[i].correctAnswer) {
            secondsLeft = secondsLeft-15;
            $(".answerResult").text("Wrong!");
        } else {
            $(".answerResult").text("Correct!");
        };        
        i++;
        populateQuiz(i);
    });

    function setScore() { 
        let newScore = {
            "name": $(".nameInput").val(),
            "score": secondsLeft
        };
        (userScores == null) ? userScores = [] : "";        
        userScores.push(newScore);
        localStorage.setItem("Scores", JSON.stringify(userScores));
    };

    function appendScore() {
        for (let i = 0; i < userScores.length; i++) {
            $("ul.scoreList").append("<li>"+ userScores[i].name + ": " + userScores[i].score +"</li>");
        };
    };

    $(".startBtn").on("click", game);

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
    
    $(".submitName").on("click", enterName);
    $(".nameInput").keypress(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            enterName();
        };
    })

    $(".view-scores").on("click", function() {
        appendScore();
        $(".startBtn").hide();
        $(".highScoreBox").show();   
        $(".view-scores").text("");
    })
});


    






