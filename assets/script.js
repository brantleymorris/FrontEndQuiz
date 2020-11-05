// To do list
    // be sure to set variable for writing to html at top
    var questionEl = document.getElementById("questions");
    var timerEl = document.getElementById("timer");
    var scoresEl = document.getElementById("scores");
    var user;

    // create array of objects for questions, probably need like 5

    var questions = [
        q1 = {
            question : "Which of following can be used to add style to a web page?",
            answer1 : "html",
            answer2 : "css",
            answer3 : "javascript",
            answer4 : "all of the above",
            //correct : answer4  need to make sure this will work right
        },
        q2 = {
            question : "What does CSS stand for?",
            answer1 : "Cyclical Styling System",
            answer2 : "Cicadian System Standards",
            answer3 : "Cassading Style Sheets",
            answer4 : "None of the above",
            //correct : answer3  need to make sure this will work correctly
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

    // create listener to activate function

    // create function to select and write questions (randomly from array, and remove from array when answers/ optional)
    function writeQuesiton (i) {
            var questionPrompt = document.createElement("ul");
            questionPrompt.textContent = questions[i].question;
            questionEl.append(questionPrompt);

            var answerA = document.createElement("li");
            answerA.textContent = questions[i].answer1;
            questionPrompt.append(answerA);

            var answerB = document.createElement("li");
            answerB.textContent = questions[i].answer2
            questionPrompt.append(answerB);

            var answerC = document.createElement("li");
            answerC.textContent = questions[i].answer3
            questionPrompt.append(answerC);

            var answerD = document.createElement("li");
            answerD.textContent = questions[i].answer4
            questionPrompt.append(answerD);
    };
    // create function to store usernames and scores to local storage

    // write function for timer to be trigger by listener event when begin is pressed
    var secondsLeft = 60;
   
    function setTime() {
        var timerInterval = setInterval(function() {
            secondsLeft --;
            timerEl.textContent = secondsLeft + " seconds remaining";

            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                endMessage(); // need to write function to display score and say game is over
            }
        }, 1000);
    }

    function endMessage() {
        timerEl.textContent = "Time is up"
    }

setTime();
writeQuesiton(0);