//Waits for DOM to fully load before running script.
//Gets button elements and adds event-listeners to them.
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "rules"){ //Changes text-area html to display the game rules
                document.getElementById("game-text").innerHTML = "The rules of the game are very simple!<br>Scissors cuts Paper, Paper covers Rock, Rock crushes Lizard.<br> Lizard poisons Spock, Spock smashes Scissors, Scissors decapitates Lizard.<br> Lizard eats Paper, Paper disproves Spock, Spock vaporizes Rock, and as it always has, Rock crushes Scissors.";
            } else if (this.getAttribute("data-type") === "reset"){ //Restores text-area html to initial value by refreshing page.
                    document.location.reload(true);
                } else if (this.getAttribute("data-type") === "play"){ // Clears game-text div for game to work.
                    gameSetup();
                    document.getElementById("play").disabled = true; //Disables play button after clicking.
                    document.getElementById("rock").disabled = false; //Enables button after play button is pressed.
                    document.getElementById("paper").disabled = false; 
                    document.getElementById("scissors").disabled = false;
                    document.getElementById("lizard").disabled = false;
                    document.getElementById("spock").disabled = false;
                } else {
                    let userInput = this.getAttribute("data-type");
                    runGame(userInput);
            }
        });
    }
});

document.getElementById("rock").disabled = true; //Disables button before game.
document.getElementById("paper").disabled = true; 
document.getElementById("scissors").disabled = true;
document.getElementById("lizard").disabled = true;
document.getElementById("spock").disabled = true;

let playerScore = 0; // Variable for player score to be incremented at game end.
let computerScore = 0; // Variable for computer score to be incremented at game end.

/**
 * Takes userInput from event activation and assigns a value to it.
 * Computer answer is generated from a random number and an assigned value.
 */
function runGame (userInput){

    let compInput = Math.floor(Math.random()*5)+1;
    switch(compInput){
        case 1: compInput = "rock";
        break;
        case 2 : compInput = "paper";
        break;
        case 3 : compInput = "scissors";
        break;
        case 4 : compInput = "lizard";
        break;
        case 5 : compInput = "spock";
        break;
    }
 
    compare(userInput, compInput);
}

/**
 * Takes the values of the user input and computer choice and compares them.
 * Decides who has won the round.
 */
 function compare(userInput, compInput){
    if (userInput === compInput) {
         outcome = `You chose: ${userInput}<br>The Computer chose: ${compInput}<br>The result is a Tie!`;
    } else if (userInput === 'rock') {
        if (compInput === 'paper'){
             outcome = `You chose: ${userInput}<br>The Computer chose: ${compInput}<br> Paper covers Rock. You lose!`;
        } else if (compInput === 'scissors'){
              outcome = `You chose: ${userInput}<br>The Computer chose: ${compInput}<br>Rock crushes Scissors. You win!`;
        } else if (compInput === 'lizard'){
              outcome = `You chose: ${userInput}<br>The Computer chose: ${compInput}<br>Rock crushes Lizard. You win!`;
        } else {
              outcome = `You chose: ${userInput}<br>The Computer chose: ${compInput}<br>Spock vaporises Rock. You lose!`;
        }
    } else if (userInput === 'paper') {
        if (compInput === 'scissors'){
              outcome = `You chose: ${userInput}<br>The Computer chose: ${compInput}<br>Scissors cuts Paper. You lose!`;
        } else if (compInput === 'lizard'){
              outcome = `You chose: ${userInput}<br>The Computer chose: ${compInput}<br>Lizard eats Paper. You lose!`;
        } else if (compInput === 'spock'){
              outcome = `You chose: ${userInput}<br>The Computer chose: ${compInput}<br>Paper disproves Spock. You win!`;
        } else {
              outcome = `You chose: ${userInput}<br>The Computer chose: ${compInput}<br>Paper covers Rock. You win!`;
        }
    } else if (userInput === 'scissors') {
        if (compInput === 'rock'){
              outcome = `You chose: ${userInput}<br>The Computer chose: ${compInput}<br>Rock crushes Scissors. You lose!`;
        } else if (compInput === 'paper'){
              outcome = `You chose: ${userInput}<br>The Computer chose: ${compInput}<br>Scissors cuts Paper. You win!`;
        } else if (compInput === 'lizard'){
              outcome = `You chose: ${userInput}<br>The Computer chose: ${compInput}<br>Scissors decapitates Lizard. You win!`;
        } else {
              outcome = `You chose: ${userInput}<br>The Computer chose: ${compInput}<br>Spock smashes Scissors. You lose!`;
        }
    } else if (userInput === 'lizard') {
        if (compInput === 'rock'){
              outcome = `You chose: ${userInput}<br>The Computer chose: ${compInput}<br>Rock crushes Scissors. You lose!`;
        } else if (compInput === 'paper'){
              outcome = `You chose: ${userInput}<br>The Computer chose: ${compInput}<br>Lizard eats Paper. You win!`;
        } else if (compInput === 'spock'){
              outcome = `You chose: ${userInput}<br>The Computer chose: ${compInput}<br>Lizard poisons Spock. You win!`;
        } else {
              outcome = `You chose: ${userInput}<br>The Computer chose: ${compInput}<br>Rock crushed Lizard. You lose!`;
        }
    }  else if (userInput === 'spock') {
        if (compInput === 'rock'){
              outcome = `You chose: ${userInput}<br>The Computer chose: ${compInput}<br>Spock vaporises Rock. You win!`;
        } else if (compInput === 'paper'){
              outcome = `You chose: ${userInput}<br>The Computer chose: ${compInput}<br>Paper disproves Spock. You lose!`;
        } else if (compInput === 'scissors'){
              outcome = `You chose: ${userInput}<br>The Computer chose: ${compInput}<br>Spock smashes Scissors. You win!`;
        } else {
              outcome = `You chose: ${userInput}<br>The Computer chose: ${compInput}<br>Paper disproves Spock. You lose!`;
        }
    }
    result (outcome);
 }

/**
 * Takes the returned value of the compare function and displays it into the game-text.
 */
 function result(outcome){
    let gameEnd = document.getElementById("game-text");
    gameEnd.innerHTML = outcome.toUpperCase();

    incrementScore();
}


/**
 * Creates the game space by removing inner html of game-text area.
 */
function gameSetup() {
    document.getElementById("game-text").innerHTML = "";

    let scoreArea = document.createElement('div');
    let userScore = document.createElement('span');
    let compScore = document.createElement('span');
    
    scoreArea.setAttribute('id', 'score-area');
    userScore.setAttribute('id','user-score');
    compScore.setAttribute('id','comp-score');

    document.getElementById("game-area").appendChild(scoreArea);
    document.getElementById("score-area").appendChild(userScore);
    document.getElementById("score-area").appendChild(compScore);

}

/**
 * Score function. Increments the score of the computer or user.
 */

function incrementScore() {

    if (outcome.includes(`win`)){
        playerScore++;
    } else if (outcome.includes(`lose`)){
        computerScore++;
    } else {
        console.log('0');
    }
    document.getElementById("user-score").innerHTML = `Your Score:<br>${playerScore}`;
    document.getElementById("comp-score").innerHTML = `Computer Score:<br>${computerScore}`;
    
    checkScore();
}

/**
 * Checks the score and declares game over when threshold has been met.
 */
function checkScore () {
    if (playerScore === 10) {
        document.getElementById("game-text").innerHTML = "Congratulations! <br> You have won! <br> Press 'Reset' to play again!";
        document.getElementById("rock").disabled = true; //Disables button after game ends.
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        document.getElementById("lizard").disabled = true;
        document.getElementById("spock").disabled = true;
    } else if (computerScore === 10) {
        document.getElementById("game-text").innerHTML = "Game Over! <br> You have lost! <br> Press 'Reset' to try again!";
        document.getElementById("rock").disabled = true; //Disables button after game ends.
        document.getElementById("paper").disabled = true; 
        document.getElementById("scissors").disabled = true;
        document.getElementById("lizard").disabled = true;
        document.getElementById("spock").disabled = true;
    }
}