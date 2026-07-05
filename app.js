var questions = [
    {
        questions: "do you enjoy ........ ?",
        option1: "to hike",
        option2: "hike",
        option3: "to hiking",
        correctoption: "hike"
    }
    ,
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
    },

]
var ques = document.getElementById('ques')
var opt1 = document.querySelector("#opt1")
var opt2 = document.querySelector("#opt2")
var opt3 = document.querySelector("#opt3")
var index = 0
var btn = document.querySelector("#btn")
var score = 0;

var min = 10
var sec = 59
var timer = document.getElementById('timer')
var interval = setInterval(function () {

    timer.innerHTML = `${min}:${sec}`
    sec--
    if (sec < 0) {
        min--
        sec = 59
        if (min < 0) {
            min = 1
            sec = 50
            nextquestion()
        }
    }
}, 1000)

function nextquestion() {

    var getoptions = document.getElementsByName('options')

    for (var i = 0; i < getoptions.length; i++) {
        if (getoptions[i].checked) {

            var selectedvalue = getoptions[i].value
            var selectedques = questions[index - 1]['questions']
            var selectA = questions[index - 1][`option${selectedvalue}`]
            var correctOption = questions[index - 1]['correctoption']

            if (selectA == correctOption) {
                score++
            }
            console.log(selectA)
        }
        getoptions[i].checked = false
    }
    btn.disabled = true

    if (index > questions.length - 1) {
        var percentage = (score / questions.length) * 100;
        ques.innerText = `Quiz khatam! Score: ${score}/${questions.length}`;
        opt1.innerText = `Percentage: ${percentage.toFixed(2)}%`;
        opt2.innerText = "";
        opt3.innerText = "";
        document.getElementById('optionsDiv').style.display = 'none';
        btn.style.display = "none";
        clearInterval(interval);
        document.getElementById('resultDiv').innerHTML = `
        <h3>Quiz khatam!</h3>
        <p>Score: ${score}/${questions.length}</p>
        <p>Percentage: ${percentage.toFixed(2)}%</p>`

    } else {
        ques.innerText = questions[index].questions
        opt1.innerText = questions[index].option1
        opt2.innerText = questions[index].option2
        opt3.innerText = questions[index].option3
        index++

    }
}
nextquestion()

function clicked() {

    btn.disabled = false
}




