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
                    runGame();
                    } else {
                        let userInput = this.getAttribute("data-type")
                        alert(`You clicked ${userInput}.`);
                        return(userInput);
            }
        })
    }
})

//Changes text area html in preparation for the game.
function gameSetup() {
    document.getElementById("game-text").innerHTML = "Your Score: <br> Computer Score: <br> Choose wisely! Rock, Paper, Scissors, Lizard or Spock...";
}

/**
 * Generates a random number between 1-5 and assigns a game value to that number.
 */
function runGame() {
    let comChoice = Math.floor(Math.random()*5);
    if (comChoice === 1){
        console.log("Rock");
        } else if (comChoice === 2){
            console.log("Paper")
            } else if (comChoice === 3){
                console.log("Scissors")
                } else if (comChoice === 4){
                    console.log("Lizard")
                    } else if (comChoice = 5){
                        console.log("Spock")
                    }
}
