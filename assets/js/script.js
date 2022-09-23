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
                } else if (this.getAttribute("data-type") === "play"){
                    gameSetup();
                } else {
                    let userInput = this.getAttribute("data-type");
                    runGame(userInput);
            }
        })
    }
})

/**
 * Takes userInput from event activation and assigns a value to it.
 * Computer answer is generated from a random number and an assigned value.
 */
function runGame (userInput){
    console.log(userInput);

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
    console.log(compInput)

    compare(userInput, compInput);
}

/**
 * Takes the values of the user input and computer choice and compares them.
 * Decides who has won the round.
 */
 function compare(userInput, compInput){
    if (userInput === compInput) {
        console.log("Tie")
    } else if (userInput === 'rock') {
        if (compInput === 'paper'){
            (console.log('Lose'))
        } else if (compInput === 'scissors'){
            (console.log('win'))
        } else if (compInput === 'lizard'){
            (console.log('win'))
        } else {
            (console.log('lose'))
        }
    } else if (userInput === 'paper') {
        if (compInput === 'scissors'){
            (console.log('Lose'))
        } else if (compInput === 'lizard'){
            (console.log('lose'))
        } else if (compInput === 'spock'){
            (console.log('win'))
        } else {
            (console.log('win'))
        }
    } else if (userInput === 'scissors') {
        if (compInput === 'rock'){
            (console.log('Lose'))
        } else if (compInput === 'paper'){
            (console.log('win'))
        } else if (compInput === 'lizard'){
            (console.log('win'))
        } else {
            (console.log('lose'))
        }
    } else if (userInput === 'lizard') {
        if (compInput === 'rock'){
            (console.log('Lose'))
        } else if (compInput === 'paper'){
            (console.log('win'))
        } else if (compInput === 'spock'){
            (console.log('win'))
        } else {
            (console.log('lose'))
        }
    }  else if (userInput === 'spock') {
        if (compInput === 'rock'){
            (console.log('win'))
        } else if (compInput === 'paper'){
            (console.log('lose'))
        } else if (compInput === 'scissors'){
            (console.log('win'))
        } else {
            (console.log('lose'))
        }
    }
 }

/**
 * Creates the game space. Five spans in game-area div to display the game to the user.
 */
function gameSetup() {
    let setup = document.getElementById("game-text")
    setup.remove();

    let userArea = document.createElement('span')
    let userScore = document.createElement('span')
    let outcome = document.createElement('span')
    let compScore = document.createElement('span')
    let compArea = document.createElement('span')

    userArea.innerHTML += "You Chose:";
    userScore.innerHTML +="Your Score:";
    outcome.innerHTML += "";
    compScore.innerHTML += "Computer Score:";
    compArea.innerHTML += "The Computer Chose:";

    document.getElementById("game-area").appendChild(userArea);
    document.getElementById("game-area").appendChild(userScore);
    document.getElementById("game-area").appendChild(outcome);
    document.getElementById("game-area").appendChild(compScore);
    document.getElementById("game-area").appendChild(compArea);
}