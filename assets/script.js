<<<<<<< HEAD
var questionBank = [
    {   
        question: "How does a WHILE loop start?",
        selection: ["while i = 1 to 10", "while (i <= 10; i++)", "while (var i = 0; i = 10; i++)", "while (i <= 10)"],
        answer: "while (i <= 10)"
    },
    {   
        question: "The external JavaScript file must contain the <script> tag.",
        selection: ["True", "False", "Maybe", "I don't know"],
        answer: "False"
    },
    {   
        question: "Inside which HTML element do we put the JavaScript?", 
        selection: ["<script>", "<js>", "<javascript>", "<JS>"],
        answer: "<script>"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        selection: ["if i = 5", "if (i == 5)", "if i = 5 then", "if i == 5 then"],
        answer: "if (i == 5) "
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        selection: ["<script name='./xxx.js'>", "<script href='./xxx.js'>", "<script scr='./xxx.js'>", "<script ='./xxx.js'>"],
        answer: "<script scr='./xxx.js'>"
    },
    {
        question: "How can you add a comment in a JavaScript?",
        selection: ["'This is a comment", "//This is a comment", "<!--This is a comment-->", "<!**This is a comment**>"],
        answer: "//This is a comment"
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        selection: ["Math.max(x, y)", "ceil(x, y)", "top(x, y)", "Math.ceil(x, y) "],
        answer: "Math.max(x, y)"
    },
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        selection: ["if (i != 5)", "if (i <> 5)", "if i =! 5 then", "if i <> 5"],
        answer: "if (i != 5)"
    },
    {
        question: "How do you create a function in JavaScript?",
        selection: ["function = myFunction()", "function:myFunction()", "function myFunction()", "$Function()"],
        answer: "function myFunction()"
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        selection: ["round(7.25)", "Math.rnd(7.25)", "Math.round(7.25)", "rnd(7.25)"],
        answer: "Math.round(7.25)"
    },
    {
        question: "JavaScript is the same as Java?",
        selection: ["True", "False", "Maybe", "I don't know"],
        answer: "False"
    }

];
=======
//setting the numerical variables for the functions.. scores and timers.. 
var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

//starts the countdown timer once user clicks the 'start' button
function start() {

    timeLeft = 75;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;
        //proceed to oend the game function when timer is below 0 at any time
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);

    next();
}
>>>>>>> 6d25013a74d2984a27e5784d8a1c023cf4a3cc52
