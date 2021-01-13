var question1 =  
    {question: "What does DOM stand for?", correct: "Document Object Model", wrong1: "Donut Oreo Muffin", wrong2: "Document Order Master", wrong3: "Delivered Object Model"};


$(document).ready(function() {
    
    function game() {
        // Put question in questionArea
        $(".questionArea").text(question1.question);

        // Put answer options in the answers list
        $(".answer1").text(question1.wrong1);
        $(".answer2").text(question1.correct);
        $(".answer3").text(question1.wrong3);
        $(".answer4").text(question1.wrong2);       

        // Timer
        let secondsLeft = 60;
        count = setInterval(function() { 
            secondsLeft--;
            $(".timer").text(secondsLeft);
            localStorage.setItem("score", JSON.stringify(secondsLeft));
            if (secondsLeft === 55) {
                clearInterval(count);
            };
        }, 1000);
        
    }

    
    
    $(".startBtn").on("click", game);

})




