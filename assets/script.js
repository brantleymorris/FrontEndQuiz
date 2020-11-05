// To do list
    // be sure to set variable for writing to html at top
    var questionEl = document.getElementById("questions");
    var timerEl = document.getElementById("timer");
    var scoresEl = document.getElementById("scores");
    var begin= document.getElementById("startQuiz")
    var currentQuestionIndex = 0;
    var user;

    // create array of objects for questions, probably need like 5

    var questions = [
        q1 = { // remove q# for all objects
            question : "Which of following can be used to add style to a web page?",
            answer1 : "html",
            answer2 : "css",
            answer3 : "javascript",
            answer4 : "all of the above",
            correct : "css"  // answer needs to match text
        },
        q2 = {
            question : "What does CSS stand for?",
            answer1 : "Cyclical Styling System",
            answer2 : "Cicadian System Standards",
            answer3 : "Cassading Style Sheets",
            answer4 : "None of the above",
            correct : "Cassading Style Sheets"  //need to make sure this will work correctly
        },
        q3 = {
            question : "What is an API?",
            answer1 : "",
            answer2 : "",
            answer3 : "",
            answer4 : "",
            //correct :   need to make sure this will work correctly
        },
        q4 = {
            question : "",
            answer1 : "",
            answer2 : "",
            answer3 : "",
            answer4 : "",
            //correct :  need to make sure this will work correctly 
        },
        q5 = {
            question : "",
            answer1 : "",
            answer2 : "",
            answer3 : "",
            answer4 : "",
            //correct :  need to make sure this will work correctly
        }
    ];
    // create array of objects for usernames and scores

    // create function to select and write questions (randomly from array, and remove from array when answers/ optional)
    function writeQuestion (i) {
        var questionPrompt = document.createElement("ul");
        questionPrompt.textContent = questions[i].question;
        questionEl.append(questionPrompt);

        var answerA = document.createElement("li");
        answerA.textContent = questions[i].answer1;
        answerA.setAttribute("id","0");
        questionPrompt.append(answerA);

        var answerB = document.createElement("li");
        answerB.textContent = questions[i].answer2
        answerB.classList.add("1");
        questionPrompt.append(answerB);

        var answerC = document.createElement("li");
        answerC.textContent = questions[i].answer3
        answerC.classList.add("2");
        questionPrompt.append(answerC);

        var answerD = document.createElement("li");
        answerD.textContent = questions[i].answer4
        answerD.classList.add("3");
        questionPrompt.append(answerD);
    };

    // write function for timer to be trigger by listener event when begin is pressed
    var secondsLeft = 60;
   
    function setTime() {
        var timerInterval = setInterval(function() {
            secondsLeft --;
            timerEl.textContent = secondsLeft + " seconds remaining";

            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                endMessage();
            }
        }, 1000);
    }

    function endMessage() {
        timerEl.textContent = "Time is up"
    }

// create function to store username and score to localStorage

// add eventListener to setTime and writeQuetion
begin.addEventListener("click", function() {
    setTime();
    writeQuestion(currentQuestionIndex);
});

//for (let i = 0; i < 4; i++) {
    document.getElementById("0").addEventListener("click", function() {
        currentQuestionIndex++;
        if (document.getElementById("0").textContent === questions[currentQuestionIndex].correct) {
            writeQuestion(currentQuestionIndex);
            alert("Correct");
            //userScore++;
        }
        else {
            writeQuestion(currentQuestionIndex);
            secondsLeft -= 10;
            alert("Wrong");
        }
    })
//}