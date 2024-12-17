let clearBtn = document.querySelector('#clear');
let scoreList = document.querySelector('#highscores');
// retrive hight score from local storage 

var highScoresFromLocalStorage = JSON.parse(localStorage.getItem('highscores'))

console.log(highScoresFromLocalStorage)

init()

// sort the scorts from hightes to lowest
// display
function renderScoresList() {
    for (var i = 0; i < highScoresFromLocalStorage.length; i++) {
        var entry = highScoresFromLocalStorage[i];
    
        var li = document.createElement("li");

        li.textContent = entry;
        li.setAttribute("data-index", highScoresFromLocalStorage[i].score);
    
        scoreList.appendChild(li);
      }
      console.log('nks')
}


function init() {
    
    
  
    if (highScoresFromLocalStorage !== null) {
      highScores = highScoresFromLocalStorage;
    }
console.log
    renderScoresList();
  }


//remove from local storage

function clearStorage() {
  localStorage.clear()
}

clearBtn.addEventListener('click', clearStorage)