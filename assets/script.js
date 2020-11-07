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
            correct : "css"
        },
        q2 = {
            question : "What does CSS stand for?",
            answer1 : "Cyclical Styling System",
            answer2 : "Cicadian System Standards",
            answer3 : "Cascading Style Sheets",
            answer4 : "None of the above",
            correct : "Cascading Style Sheets"
        },
        q3 = {
            question : "What is an API?",
            answer1 : "All Participant Interface",
            answer2 : "Application Programming Interface",
            answer3 : "Applicable Program Installation",
            answer4 : "All Program Issue",
            correct : "Application Programming Interface"  
        },
        q4 = {
            question : "The document object model is also know as?",
            answer1 : "DOM",
            answer2 : "HTML",
            answer3 : "API",
            answer4 : "Javascript",
            correct : "DOM" 
        },
        q5 = {
            question : "Which of the following is used to add user functionality to a web page?",
            answer1 : "html",
            answer2 : "css",
            answer3 : "javascript",
            answer4 : "all of the above",
            correct : "javascript"
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
        answerA.setAttribute("id","selectedA"); // need to figure out how to set this so that it can be called later, need to add css tags
        questionPrompt.append(answerA);

        var answerB = document.createElement("li");
        answerB.textContent = questions[i].answer2
        answerB.setAttribute("id", "selectedB")
        questionPrompt.append(answerB);

        var answerC = document.createElement("li");
        answerC.textContent = questions[i].answer3
        answerC.setAttribute("id", "selectedC")
        questionPrompt.append(answerC);

        var answerD = document.createElement("li");
        answerD.textContent = questions[i].answer4
        answerD.setAttribute("id", "selectedD")
        questionPrompt.append(answerD);

        // need to add something to remove .show, changes it to hide and will need to set display: hide; in css
        // document.querySelector(".show").setAttribute("class", "hide");
        document.querySelector(".show").remove();
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


    function writeNew() { // may need to make one of these for B, C, D / or figure out how to pass in target
        if (document.getElementById("answerA").textContent === questions[currentQuestionIndex].correct) {
            currentQuestionIndex ++;
            alert("Correct"); // may not need this, will just get in the way
            secondsLeft += 10; //use secondsLeft for userscore?
            questionPrompt.remove(); // remove old question
            writeQuestions(currentQuestionIndex);
        }
        else {
            currentQuestionIndex ++;
            secondsLeft -= 10;
            alert("Wrong");
            questionPrompt.remove(); // remove old question
            writeQuestion(currentQuestionIndex);
        }
    };
// create function to prompt username and store to localStorage
    if (currentQuestionIndex > 4) {
        questionPrompt.remove();

        var userForm = document.createElement("form");
        userForm.textContent = "Enter name";
        questionEl.append(userForm);

        var userName = document.createElement("input");
        userName.setAttribute("type", "input");
        userForm.append(userName);
    }

// eventListener to setTime and writeQuetion
    begin.addEventListener("click", function() {
        setTime();
        writeQuestion(currentQuestionIndex);
    });

    document.getElementById("answerA").addEventListener("click", writeNew());  // keeps erroring that target is null, ask about in office hours
    document.getElementById("answerB").addEventListener("click", writeNew()); 
    document.getElementById("answerC").addEventListener("click", writeNew()); 
    document.getElementById("answerD").addEventListener("click", writeNew()); 