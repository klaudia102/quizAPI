// variable:
let startBtn = document.querySelector('#start');
let timerEl = document.querySelector('.timer');
let time = document.querySelector('#time');
let timerCount = 60;
let questionEl = document.querySelector('#questions')
let startScreenEl = document.querySelector('#start-screen')
let qTitle = document.querySelector('#question-title')
let choices = document.querySelector('#choices')
let index = 0;
let message = document.querySelector('#message')


// // // timer starts countdown when clicked:


var startTimer = function () {
    questionEl.classList.remove('hide')
    startScreenEl.classList.add('hide')
    displayQ()
    let timer = setInterval(function () {
        time.textContent = timerCount;
        timerCount--;

        //     //   if (timerCount >= 0) {
        //     // //     // 
        //     //    shows more questions
        //     //   }
        //       // Tests if time has run out
        if (timerCount === 0) {
            clearInterval(timer);
            //     shows scores 
        }
    }, 1000);
}

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

let nextQ = function(event) {
    let userAnswer = event.target.textContent
    let correct = questions[index].correct
    if (userAnswer === correct) {
        message.textContent = 'Correct!'
    }
    else {
        message.textContent = 'Wrong!'
        timerCount = timerCount - 10;
    }
    index++
    if (index < questions.length) {
        setTimeout (displayQ, 500)
    }

}
startBtn.addEventListener('click', startTimer)

