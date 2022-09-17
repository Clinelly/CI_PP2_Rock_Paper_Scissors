//Waits for DOM to fully load before running script.
//Gets button elements and adds event-listeners to them.
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "rules"){ //Changes text-area html to display the game rules
                document.getElementById("game-text").innerHTML = "The rules of the game are very simple!<br>Scissors cuts Paper, Paper covers Rock, Rock crushes Lizard.<br> Lizard poisons Spock, Spock smashes Scissors, Scissors decapitates Lizard.<br> Lizard eats Paper, Paper disproves Spock, Spock vaporizes Rock, and as it always has, Rock crushes Scissors.";
            } else if (this.getAttribute("data-type") === "reset"){ //Restores text-area html to initial value
                    document.getElementById("game-text").innerHTML = "Welcome to Rock, Paper, Scissor, Lizard, Spock!<br>Press 'Play' to start a game, or 'Rules' to read the rules!";
                } else if (this.getAttribute("data-type") === "play"){
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
    let userAnswer = userInput;
        if (userInput = "rock"){
            userInput = "Rock"
        } else if (userInput = "paper"){
            userInput = "Paper"
        } else if (userInput = "scissors"){
            userInput = "Scissors"
        } else if (userInput = "lizard"){
            userInput = "Lizard"
        } else userInput = "Spock"
    console.log(userAnswer)
    let compAnswer = Math.floor(Math.random()*5)+1;
    if (compAnswer === 1){
        compAnswer = "rock";
    } else if (compAnswer === 2){
        compAnswer = "paper";
        } else if (compAnswer === 3){
            compAnswer = "scissors";
            } else if (compAnswer === 4){
                compAnswer = "lizard"
                } else compAnswer = "spock"
    console.log(compAnswer)
}


/**
 * Takes the values of the user input and computer choice and compares them.
 * Decides who has won the round.
 */
 function compare(_runGame){
    if (userAnswer === compAnswer) {
        console.log("Tie")
    }

}


