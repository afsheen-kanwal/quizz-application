var questions = [
    {
        questions: "do you enjoy ........ ?",
        option1: "to hike",
        option2: "hiking",
        option3: "to hiking",
        correctoption: "hiking" 
    },
    {
        questions: "sublime mean ?",
        option1: "great excellence",
        option2: "better",
        option3: "poor cindition",
        correctoption: "great excellence"
    },
    {
        questions: "antonym of ancient ",
        option1: "old ",
        option2: "modern",
        option3: "normal",
        correctoption: "modern"
    },
    {
        questions: "Which one is a noun?",
        option1: "Run",
        option2: "Beautiful",
        option3: "School",
        correctoption: "School"
    },
    {
        questions: "Synonym of 'Happy'",
        option1: "Sad",
        option2: "Joyful",
        option3: "Angry",
        correctoption: "Joyful"
    },
    {
        questions: "He is afraid ____ dogs.",
        option1: "from",
        option2: "with",
        option3: "of",
        correctoption: "of"
    },
    {
        questions: "Past tense of 'Eat'",
        option1: "Eated",
        option2: "Ate",
        option3: "Eaten",
        correctoption: "Ate"
    },
    {
        questions: "'Gigantic' means",
        option1: "Very small",
        option2: "Very big",
        option3: "Very old",
        correctoption: "Very big"
    },
    {
        questions: "Choose the correct spelling",
        option1: "Recieve",
        option2: "Receive",
        option3: "Receve",
        correctoption: "Receive"
    },
    {
        questions: "I am good ____ English.",
        option1: "in",
        option2: "at",
        option3: "on",
        correctoption: "at"
    }
];

var ques = document.getElementById('ques');
var opt1 = document.querySelector("#opt1");
var opt2 = document.querySelector("#opt2");
var opt3 = document.querySelector("#opt3");
var btn = document.querySelector("#btn");
var timer = document.getElementById('timer');
var optionsDiv = document.getElementById('optionsDiv');
var resultDiv = document.getElementById('resultDiv');

var index = 0;
var score = 0;
var min = 2;  
var sec = 0;

function formatTime(m, s) {
    var paddedMin = m < 10 ? '0' + m : m;
    var paddedSec = s < 10 ? '0' + s : s;
    return `⏱️ ${paddedMin}:${paddedSec}`;
}

var interval = setInterval(function () {
    timer.innerHTML = formatTime(min, sec);
    
    if (min === 0 && sec === 0) {
        clearInterval(interval);
        showFinalResults();
        return;
    }

    if (sec === 0) {
        min--;
        sec = 59;
    } else {
        sec--;
    }
}, 1000);

function nextquestion() {
    var getoptions = document.getElementsByName('options');
    
    if (index > 0 && index <= questions.length) {
        var previousQuestion = questions[index - 1];
        
        for (var i = 0; i < getoptions.length; i++) {
            if (getoptions[i].checked) {
                var selectedvalue = getoptions[i].value;
                var selectA = previousQuestion[`option${selectedvalue}`];
                var correctOption = previousQuestion['correctoption'];

                if (selectA === correctOption) {
                    score++;
                }
                break; 
            }
        }
    }

    for (var j = 0; j < getoptions.length; j++) {
        getoptions[j].checked = false;
    }
    btn.disabled = true;

    if (index >= questions.length) {
        clearInterval(interval);
        showFinalResults();
    } else {
        ques.innerText = questions[index].questions;
        opt1.innerText = questions[index].option1;
        opt2.innerText = questions[index].option2;
        opt3.innerText = questions[index].option3;
        index++;
    }
}

function showFinalResults() {
    var percentage = (score / questions.length) * 100;
    optionsDiv.style.display = 'none';
    timer.style.display = 'none';
    
    resultDiv.innerHTML = `
        <div style="font-size: 50px; margin-bottom: 10px;">🎉</div>
        <h3>Quiz Khatam!</h3>
        <div style="margin: 20px 0; font-size: 20px; color: #1f2937;">
            Score: <strong style="color: #6366f1;">${score}</strong> / ${questions.length}
        </div>
        <div style="font-size: 16px; color: #4b5563; margin-bottom: 10px;">
            Percentage: <strong>${percentage.toFixed(2)}%</strong>
        </div>
        <button onclick="window.location.reload();" style="
            margin-top: 15px; 
            padding: 10px 20px; 
            background: #1f2937; 
            color: white; 
            border: none; 
            border-radius: 8px; 
            cursor: pointer;
            font-weight: 600;
        ">Try Again</button>
    `;
    resultDiv.style.display = 'block';
}

nextquestion();

function clicked() {
    btn.disabled = false;
}
