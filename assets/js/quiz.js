/**
 * Quiz code sourced from WebDevSimplified (https://www.youtube.com/watch?v=riDzcEQbX6k) and modified for additional functionality
 */

//Adds event listener to start button to start the game.
let startButton = document.getElementById('btn-start');
startButton.addEventListener('click', runGame);

const questions = [ //Question array
    {
        question: "How do lizards smell?",
        answers: [
            {text: "They lick and 'taste' the air.", correct:  true},
            {text: "They sniff the air through their noses.", correct:  false},
            {text: "They cant. Lizards have no sense of smell.", correct:  false}
        ]
    },
    {
        question: "What is the study of rocks called?",
        answers: [
            {text: "Geography", correct:  false},
            {text: "Topography", correct:  false},
            {text: "Geology", correct:  true}
        ]
    },
    {
        question: "What is meant by '4-ply' paper?",
        answers: [
            {text: "The paper is 4 inches wide.", correct:  false},
            {text: "The paper is 4 layers thick.", correct:  true},
            {text: "The paper can be reused 4 times.", correct:  false}
        ]
    },
    {
        question: "Who played Spock in The Original Series of Star Trek?",
        answers: [
            {text: "William Shatner.", correct:  false},
            {text: "Leonard Nimoy.", correct:  true},
            {text: "DeForest Kelly.", correct:  false}
        ]
    },
    {
        question: "What is the plural for 'Scissors'?",
        answers: [
            {text: "Scissors.", correct:  true},
            {text: "Scissi.", correct:  false},
            {text: "Scissores.",correct:  false}
        ]
    },
    {
        question: "What is the name of the largest lizard in the world?",
        answers: [
            {text: "Komodo Dragon.", correct:  true},
            {text: "Bearded Dragon.", correct:  false},
            {text: "Chinese Water Dragon.", correct:  false}
        ]
    },
    {
        question: "What is the name for the Japanese art of folding paper?",
        answers: [
            {text: "Shigaraki.", correct:  false},
            {text: "Kintsugi.", correct:  false},
            {text: "Origami.", correct:  true}
        ]
    },
    {
        question: "What is the 'The Rock's' real name?",
        answers: [
            {text: "Vin Diesel.", correct:  false},
            {text: "Dawyne Johnson.", correct:  true},
            {text: "Jason Momoa.", correct:  false}
        ]
    },
    {
        question: "When were scissors first thought to be invented?",
        answers: [
            {text: "4000 BC.", correct:  true},
            {text: "1100 AD.", correct:  false},
            {text: "1874 AD.", correct:  false}
        ]
    },
    {
        question: "What was Spock's role on the USS Enterprise?",
        answers:[
            {text: "Pilot.", correct:  false},
            {text: "Medical Officer.", correct:  false},
            {text: "Science Officer.", correct:  true}
        ]
    },
    {
        question: "Approximately how many species of Lizard exist worldwide?",
        answers: [
            {text: "55,000.", correct:  false},
            {text: "65,000.", correct:  true},
            {text: "75,000.", correct:  false}
        ]
    },
    {
        question: "What species of alien is Spock?",
        answers: [
            {text: "Andorian.", correct:  false},
            {text: "Klingon.", correct:  false},
            {text: "Vulcan.", correct:  true}
        ]
    },
    {
        question: "What is a 'Rocky Road'?",
        answers: [
            {text: "A dessert made of marshmallows, chocolate and dried fruit.", correct:  true},
            {text: "A 2013 action film starring Uma Thurman and Ewan McGregor.", correct:  false},
            {text: "A species of flower native to the mountainous regions of South America.", correct:  false}
        ]
    },
    {
        question: "What is the name of fictional paper company in the American TV series 'The Office'?",
        answers: [
            {text: "Paper, Pens & Co.", correct:  false},
            {text: "Dunder Mifflin.", correct:  true},
            {text: "Regional Office Supplies Ltd.", correct:  false}
        ]
    },
    {
        question: "Who portrayed Edward Scissorhands in the 1990 film by Tim Burton?",
        answers: [
            {text: "Tom Cruise.", correct:  false},
            {text: "John Travolta.", correct:  false},
            {text: "Johnny Depp.", correct:  true}
        ]
    },
]
//Sets values to the next button
let nextButton = document.getElementById('btn-next');

//Adds event listeners to next button
nextButton.addEventListener('click', () =>{
    currentQuestion++;
    nextQuestion();
    progressBar();
})

//Defines the question area that can holds the question text.
let questionArea = document.getElementById('question-area');

//Sets both variables to be used by functions later
let randomQuestion, currentQuestion;

//Sets definitions to elements used for the quiz
let questionText = document.getElementById('question');
let answerButtons = document.getElementById('button-area-quiz');
let controlButtons = document.getElementById('control-area');
let userScore = 0

function runGame(){
    startButton.classList.add('hide'); //Hides start button.
    questionArea.classList.remove('hide'); //Reveals question area.
    outerBar.classList.remove('hide'); //Reveals progress bar
    innerBar.classList.remove('hide');
    randomQuestion = questions.sort(() => Math.random() - .5); //Randomises questions
    currentQuestion = 0; //Starts from first question of array
    progressBar();
    nextQuestion();

}

function nextQuestion(){
    reset();
    showQuestion(randomQuestion[currentQuestion]);//Shows the next question in the array
}

function showQuestion(question){
    questionText.innerText = question.question;//Displays question text in container
    question.answers.forEach(answers => {
        let button = document.createElement('button');//Creates a button for each answer
        button.innerText = answers.text;//Displays answer text on button
        button.classList.add('btn');//Adds class to buttons for styling
        button.classList.add('btn--sec');
        button.classList.add('btn-quiz');
        if (answers.correct){
            button.dataset.correct = answers.correct;//Adds dataset for correct answers to differentiate between correct and incorrect answers
        }
        button.addEventListener('click', userAnswer);//Adds event listener to run userAnswer function
        answerButtons.appendChild(button);//Adds buttons to the button area
    })
}

function reset(){//Resets quiz elements when new question is selected
    nextButton.classList.add('hide');
    while (answerButtons.firstChild){ //Loops through the button-area element 'looking' for the first child element
        answerButtons.removeChild(answerButtons.firstChild); //Removes child elements until there are no more.
    }
}

function userAnswer(event){
    let buttonChoice = event.target;
    let correct = buttonChoice.dataset.correct; //Takes assigned 'correct' dataset and adds it to the 'correct' variable
    Array.from(answerButtons.children).forEach(button => { //Creates an array from the answer button input to be looped through
        setCorrectIncorrect(button, button.dataset.correct); //Checks if button input is correct or incorrect and runs the function
    }) 
    if (randomQuestion.length > currentQuestion +1){
        nextButton.classList.remove('hide');     
    } else {
        quizEnd();
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide')
    } 
}

function setCorrectIncorrect(element, correct) { //Adds a class to selected elements based on their data types when selected.
    clearCorrectIncorrect(element);
    if (correct){
        element.classList.add('correct'); //Adds green background
        incrementScore(element); 
    } else {
        element.classList.add('incorrect');  //Adds red background
    }
}

function incrementScore (element){
    if (element.classList.contains('correct')){
        userScore ++;
    }
}

function clearCorrectIncorrect(element) { //Clears assigned class list each time a question is displayed
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

//Progress bar variables
let outerBar = document.getElementById('quiz-progress');
let innerBar = document.getElementById('quiz-bar');
let questionNo = document.getElementById('q-no');
let maxQuestions = 14

//Function which progresses the quiz bar.
function progressBar() {
    innerBar.style.width = `${(currentQuestion / maxQuestions) * 100}%`;
    questionNo.innerHTML = `Q: ${currentQuestion +1}`;
}

function quizEnd(){
    questionText.innerHTML = `Congratulations! You have completed the quiz! <br> You scored ${userScore} out of 15. <br> Press Restart to try again!`
}