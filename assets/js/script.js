//Waits for DOM to fully load before running script.
//Gets button elements and adds event-listeners to them.
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "rules"){
                document.getElementById("game-text").innerHTML = "The rules of the game are very simple!<br>Scissors cuts Paper, Paper covers Rock, Rock crushes Lizard.<br> Lizard poisons Spock, Spock smashes Scissors, Scissors decapitates Lizard.<br> Lizard eats Paper, Paper disproves Spock, Spock vaporizes Rock, and as it always has, Rock crushes Scissors.";
            } else {
                let gameInput = this.getAttribute("data-type");
                alert(`You clicked ${gameInput}`);
            }
        })
    }
})