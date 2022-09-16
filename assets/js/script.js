//Waits for DOM to fully load before running script.
//Gets button elements and adds event-listeners to them.
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "rules"){
                alert("You clicked the rules!");
            } else {
                let gameInput = this.getAttribute("data-type");
                alert(`You clicked ${gameInput}`);
            }
        })
    }
})