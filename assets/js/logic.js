// variable:
let startBtn = document.querySelector('#start');
let submitBtn = document.querySelector('#submit');
let timerEl = document.querySelector('.timer');
let time = document.querySelector('#time');
let timerCount = 60;
let questionEl = document.querySelector('#questions')
let startScreenEl = document.querySelector('#start-screen')
let endScreenEl = document.querySelector('#end-screen')
let qTitle = document.querySelector('#question-title')
let choices = document.querySelector('#choices')
let index = 0;
let finalScore = document.querySelector('#final-score')
let message = document.querySelector('#message')
let initialsEl = document.querySelector('#initials')
let correctAudio = new Audio('assets/sfx/correct.wav')
let incorrectAudio = new Audio('assets/sfx/incorrect.wav')

// // // timer starts countdown when clicked:
let timer

let startTimer = function () {

    questionEl.classList.remove('hide')
    startScreenEl.classList.add('hide')
    displayQ()

    timer = setInterval(function () {

        time.textContent = timerCount;
        timerCount--;

        if (timerCount <= 0 || index === questions.length) {
            clearInterval(timer)
            finish()
        }

    }, 1000)
};

let displayQ = function () {

    message.textContent = ''
    qTitle.textContent = questions[index].title
    choices.textContent = ''

    for (let i = 0; i < questions[index].answers.length; i++) {
        var p = document.createElement('p')
        var button = document.createElement('button')
        button.textContent = questions[index].answers[i]
        p.appendChild(button)
        choices.appendChild(p)
    }
    questionEl.addEventListener('click', nextQ)

}

let nextQ = function (event) {

    let userAnswer = event.target.textContent
    let correct = questions[index].correct

    if (userAnswer === correct) {
        message.textContent = 'Correct!'
        correctAudio.play()
    }
    else {
        message.textContent = 'Wrong!'
        incorrectAudio.play()
        timerCount = timerCount - 10;
    }

    index++

    if (index < questions.length) {
        setTimeout(displayQ, 500)
    }

    else {
        finish()
    }
}

let finish = function () {
    clearInterval(timer)
    questionEl.classList.add('hide')
    endScreenEl.classList.remove('hide')
    finalScore.textContent = timerCount + 1;

}

startBtn.addEventListener('click', startTimer)

const highScores = [];


const submit = function () {

    const initials = initialsEl.value.trim();
    if (initials === "") {
        message.textContent = "Please enter your initials.";
        return;
    }

    let highScores = JSON.parse(localStorage.getItem('highscores')) || [];

    const newScore = {
        initials: initials.toUpperCase(),
        score: timerCount + 1, // Final score
    };

    highScores.push(newScore);

    localStorage.setItem('highscores', JSON.stringify(highScores));

    window.location.href = 'highscores.html';
};

submitBtn.addEventListener('click', function (event) {
    event.preventDefault()
    submit()

})


function storeScores() {
    localStorage.setItem('highscores', JSON.stringify(highScores))
} 
