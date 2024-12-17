let clearBtn = document.querySelector('#clear');
let scoreList = document.querySelector('#highscores');
// retrive hight score from local storage 

var highScoresFromLocalStorage = JSON.parse(localStorage.getItem('highscores'))

init()

// sort the scorts from hightes to lowest
// display

function renderScoresList() {
    scoreList.textContent = '';

    for (var i = 0; i < highScoresFromLocalStorage.length; i++) {

        let orderedScores = highScoresFromLocalStorage.sort(function (a, b) { return a.score - b.score });

        const singleEntry = orderedScores[i]
        const singleInitials = singleEntry.initials;
        const singleScore = singleEntry.score;

        const el = document.createElement("li");

        el.textContent = singleInitials + " got " + singleScore + ' points'
        el.setAttribute("data-index", highScoresFromLocalStorage[i].score);

        scoreList.appendChild(el);
    }
}

function init() {

    if (highScoresFromLocalStorage !== null) {
        highScores = highScoresFromLocalStorage;
    }

    renderScoresList();
}

// //remove from local storage

function clearStorage() {
    localStorage.clear(highscores)
    location.reload();
}

clearBtn.addEventListener('click', clearStorage)