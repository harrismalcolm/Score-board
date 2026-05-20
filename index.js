let homeScore = document.getElementById("homeScore");
let guestScore = document.getElementById("guestScore");

let homeScoreOne = document.getElementById("homeScoreOne");
let homeScoreTwo = document.getElementById("homeScoreTwo");
let homeScoreThree = document.getElementById("homeScoreThree");

let guestScoreOne = document.getElementById("guestScoreOne");
let guestScoreTwo = document.getElementById("guestScoreTwo");
let guestScoreThree = document.getElementById("guestScoreThree");

let teamOne = 0
let teamTwo = 0

// Winning score
const winningScore = 10;

// Function to check winner
function checkWinner() {
    if (teamOne >= winningScore) {
        alert("Home Team Wins!");
        resetGame();
    } 
    else if (teamTwo >= winningScore) {
        alert("Guest Team Wins!");
        resetGame();
    }
}

// Function to reset scores
function resetGame() {
    teamOne = 0;
    teamTwo = 0;

    homeScore.textContent = teamOne;
    guestScore.textContent = teamTwo;
}

// HOME TEAM
homeScoreOne.addEventListener("click", function incrementOne() {
   teamOne = teamOne + 1;
   homeScore.textContent = teamOne;
   checkWinner();
});

homeScoreTwo.addEventListener("click", function incrementTwo() {
   teamOne = teamOne + 2;
   homeScore.textContent = teamOne;
   checkWinner();
});

homeScoreThree.addEventListener("click", function incrementThree() {
   teamOne = teamOne + 3;
   homeScore.textContent = teamOne;
   checkWinner();
});

// GUEST TEAM
guestScoreOne.addEventListener("click", function incrementOne() {
   teamTwo = teamTwo + 1;
   guestScore.textContent = teamTwo;
   checkWinner();
});

guestScoreTwo.addEventListener("click", function incrementTwo() {
   teamTwo = teamTwo + 2;
   guestScore.textContent = teamTwo;
   checkWinner();
});

guestScoreThree.addEventListener("click", function incrementThree() {
   teamTwo = teamTwo + 3;
   guestScore.textContent = teamTwo;
   checkWinner();
});

