/**
 * Quiz code sourced from WebDevSimplified (https://www.youtube.com/watch?v=riDzcEQbX6k) and modified for additional functionality
 */

//Adds event listener to start button to start the game.
let startButton = document.getElementById('btn-start');
startButton.addEventListener('click', runGame);

let questions = [ //Question array
    {
        question: "How do lizards smell?",
        answers: [
            {text: "They lick and 'taste' the air.", correct:  true},
            {text: "They sniff the air through their noses.", correct:  false},
            {text: "They cant. Lizards have no sense of smell.", correct:  false},
        ]
    },
    {
        question: "What is the study of rocks called?",
        answers: [
            {text: "Geography", correct:  false},
            {text: "Topography", correct:  false},
            {text: "Geology", correct:  true},
        ]
    },
    {
        question: "What is meant by '4-ply' paper?",
        answers: [
            {text: "The paper is 4 inches wide.", correct:  false},
            {text: "The paper is 4 layers thick.", correct:  true},
            {text: "The paper can be reused 4 times.", correct:  false},
        ]
    },
    {
        question: "Who played Spock in The Original Series of Star Trek?",
        answers: [
            {text: "William Shatner.", correct:  false},
            {text: "Leonard Nimoy.", correct:  true},
            {text: "DeForest Kelly.", correct:  false},
        ]
    },
    {
        question: "What is the plural for 'Scissors'?",
        answers: [
            {text: "Scissors.", correct:  true},
            {text: "Scissi.", correct:  false},
            {text: "Scissores.",correct:  false},
        ]
    },
    {
        question: "What is the name of the largest lizard in the world?",
        answers: [
            {text: "Komodo Dragon.", correct:  true},
            {text: "Bearded Dragon.", correct:  false},
            {text: "Chinese Water Dragon.", correct:  false},
        ]
    },
    {
        question: "What is the name for the Japanese art of folding paper?",
        answers: [
            {text: "Shigaraki.", correct:  false},
            {text: "Kintsugi.", correct:  false},
            {text: "Origami.", correct:  true},
        ]
    },
    {
        question: "What is the 'The Rock's' real name?",
        answers: [
            {text: "Vin Diesel.", correct:  false},
            {text: "Dawyne Johnson.", correct:  true},
            {text: "Jason Momoa.", correct:  false},
        ]
    },
    {
        question: "When were scissors first thought to be invented?",
        answers: [
            {text: "4000 BC.", correct:  true},
            {text: "1100 AD.", correct:  false},
            {text: "1874 AD.", correct:  false},
        ]
    },
    {
        question: "What was Spock's role on the USS Enterprise?",
        answers:[
            {text: "Pilot.", correct:  false},
            {text: "Medical Officer.", correct:  false},
            {text: "Science Officer.", correct:  true},
        ]
    },
    {
        question: "Approximately how many species of Lizard exist worldwide?",
        answers: [
            {text: "55,000.", correct:  false},
            {text: "65,000.", correct:  true},
            {text: "75,000.", correct:  false},
        ]
    },
    {
        question: "What species of alien is Spock?",
        answers: [
            {text: "Andorian.", correct:  false},
            {text: "Klingon.", correct:  false},
            {text: "Vulcan.", correct:  true},
        ]
    },
    {
        question: "What is a 'Rocky Road'?",
        answers: [
            {text: "A dessert made of marshmallows, chocolate and dried fruit.", correct:  true},
            {text: "A 2013 action film starring Uma Thurman and Ewan McGregor.", correct:  false},
            {text: "A species of flower native to the mountainous regions of South America.", correct:  false},
        ]
    },
    {
        question: "What is the name of fictional paper company in the American TV series 'The Office'?",
        answers: [
            {text: "Paper, Pens & Co.", correct:  false},
            {text: "Dunder Mifflin.", correct:  true},
            {text: "Regional Office Supplies Ltd.", correct:  false},
        ]
    },
    {
        question: "Who portrayed Edward Scissorhands in the 1990 film by Tim Burton?",
        answers: [
            {text: "Tom Cruise.", correct:  false},
            {text: "John Travolta.", correct:  false},
            {text: "Johnny Depp.", correct:  true},
        ]
    },
]

//Defines the question area that can holds the question text.
let questionArea = document.getElementById('question-area');

//Sets both variables to be used by functions later
let randomQuestion, currentQuestion;

//Sets definitions to elements used for the quiz
let questionText = document.getElementById('question')
let answerButtons = document.getElementById('button-area')


function runGame(){
    startButton.classList.add('hide'); //Hides start button.
    questionArea.classList.remove('hide'); //Reveals question area.
    randomQuestion = questions.sort(() => Math.random() - .5); //Randomises questions
    currentQuestion = 0; //Starts from first question of array
    nextQuestion();

}

function nextQuestion(){
    showQuestion(randomQuestion[currentQuestion]);//Shows the next question in the array
}

function showQuestion(question){
    questionText.innerText = question.question;
}

function previousQuestion(){

}

function userAnswer() {

}