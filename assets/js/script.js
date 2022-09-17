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
    console.log(userAnswer)
    let compAnswer = Math.floor(Math.random()*5)+1;
    if (compAnswer === 1){
        compAnswer = "Rock";
    } else if (compAnswer === 2){
        compAnswer = "Paper";
        } else if (compAnswer === 3){
            compAnswer = "Scissors";
            } else if (compAnswer === 4){
                compAnswer = "Lizard"
                } else if (compAnswer = 5){
                    compAnswer = "Spock"
}
    console.log(compAnswer)
}

/**
 * Takes the values of the user input and computer choice and compares them.
 * Decides who has won the round.
 */
 function compareAnswer(compInput){
    let userAnswer = userChoice();
    let compAnswer = compInput();
    }


