// Accessing the HTML element for document (DOM)

let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")

// Initialization of the score count value

let homeCount = 0;
let awayCount = 0;

// Home Function to add the scores

function addOneHome() {
    homeCount += 1;
    homeScore.innerText = homeCount;
}

function addTwoHome() {
    homeCount += 2;
    homeScore.innerText = homeCount;
}

function addThreeHome() {
    homeCount += 3;
    homeScore.innerText = homeCount;
}
//Home Function Ends

// Guest Function to add the scores  

function addOneAway() {
    awayCount += 1;
    awayScore.innerText = awayCount;
}

function addTwoAway() {
    awayCount += 2;
    awayScore.innerText = awayCount;
}

function addThreeAway() {
    awayCount += 3;
    awayScore.innerText = awayCount;
}
//Guest Function End

// Game Reset function to play a new game

function gameReset() {
    homeCount = 0;
    awayCount = 0;
    homeScore.innerText = homeCount;
    awayScore.innerText = awayCount;
}
//New game button function end