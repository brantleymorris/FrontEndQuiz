// To do list
    // be sure to set variable for writing to html at top
    var questionEl = document.getElementById("questions");
    var timerEl = document.getElementById("timer");
    var scoresEl = document.getElementById("scores");
    var begin= document.getElementById("startQuiz");
    var questionPrompt = document.createElement("ul");
    var secondsLeft = 60;
    var currentQuestionIndex = 0;

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
        //var questionPrompt = document.createElement("ul");
        questionPrompt.textContent = questions[i].question;
        questionEl.append(questionPrompt);

        var answerALi = document.createElement("li");
        var answerA = document.createElement("button")
        answerA.textContent = questions[i].answer1;
        answerA.setAttribute("id","selectedA");
        answerA.onclick = answerClickedA;
        answerALi.append(answerA);
        questionPrompt.append(answerALi);

        var answerBLi = document.createElement("li");
        var answerB = document.createElement("button");
        answerB.textContent = questions[i].answer2
        answerB.setAttribute("id", "selectedB")
        answerB.onclick = answerClickedB;
        questionPrompt.append(answerBLi);
        answerBLi.append(answerB);

        var answerCLi = document.createElement("li");
        var answerC = document.createElement("button");
        answerC.textContent = questions[i].answer3
        answerC.setAttribute("id", "selectedC")
        answerC.onclick = answerClickedC;
        questionPrompt.append(answerCLi);
        answerCLi.append(answerC);

        var answerDLi = document.createElement("li");
        var answerD = document.createElement("button");
        answerD.textContent = questions[i].answer4
        answerD.setAttribute("id", "selectedD")
        answerD.onclick = answerClickedD;
        questionPrompt.append(answerDLi);
        answerDLi.append(answerD);

        if (document.querySelector(".show")) {
            document.querySelector(".show").setAttribute("class", "hide");
        }
    };

// write function for timer to be trigger by listener event when begin is pressed
    function setTime() {
        var timerInterval = setInterval(function() {
            secondsLeft --;
            timerEl.textContent = secondsLeft + " seconds remaining";

            if (secondsLeft === 0) {
                clearInterval(timerInterval); // not sure if I need this
                endMessage();
            }
        }, 1000);
    }

    function endMessage() {
        timerEl.textContent = "Time is up"
        document.querySelector(".hide").setAttribute("class", "show")
    };

// in place of eventListeners
    function answerClickedA() {
        if (this.textContent === questions[currentQuestionIndex].correct) {
            alert("Correct"); // may not need this, will just get in the way
            secondsLeft += 10;
            //questionPrompt.remove(); // remove old question
        }
        else {
            secondsLeft -= 10;
            alert("Wrong");
            //questionPrompt.remove(); // remove old question
        }
        currentQuestionIndex ++;
        writeQuestion(currentQuestionIndex);
    };

    function answerClickedB() {
        if (this.textContent === questions[currentQuestionIndex].correct) {
            alert("Correct"); // may not need this, will just get in the way
            secondsLeft += 10;
            //questionPrompt.remove(); // remove old question
        }
        else {
            secondsLeft -= 10;
            alert("Wrong");
            //questionPrompt.remove(); // remove old question
        }
        currentQuestionIndex ++;
        writeQuestion(currentQuestionIndex);
    };

    function answerClickedC() {
        if (this.textContent === questions[currentQuestionIndex].correct) {
            alert("Correct"); // may not need this, will just get in the way
            secondsLeft += 10;
            //questionPrompt.remove(); // remove old question
        }
        else {
            secondsLeft -= 10;
            alert("Wrong");
            //questionPrompt.remove(); // remove old question
        }
        currentQuestionIndex ++;
        writeQuestion(currentQuestionIndex);
    };

    function answerClickedD() {
        if (this.textContent === questions[currentQuestionIndex].correct) {
            alert("Correct"); // may not need this, will just get in the way
            secondsLeft += 10; 
            //questionPrompt.remove(); // remove old question
        }
        else {
            secondsLeft -= 10;
            alert("Wrong");
            //questionPrompt.remove(); // remove old question
        }
        currentQuestionIndex ++;
        writeQuestion(currentQuestionIndex);
    };


    
// create function to prompt username and store to localStorage
   if (currentQuestionIndex > 4 || secondsLeft === 0) {
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
        secondsLeft = 60;
        setTime();
        writeQuestion(currentQuestionIndex);


    });