//Waits for DOM to fully load before running script.
//Gets button elements and adds event-listeners to them.
document.addEventListener("DOMContentLoaded", function(){
    let start = document.getElementById("btn-start");
    start.addEventListener("click", function(){
        startQuiz();
        })
    })
            
// Array of questions
let questions = [ 
    {
        question: "How do lizards smell?",
        answers: {
            a: "They lick and 'taste' the air.",
            b: "They sniff the air through their noses.",
            c: "They cant. Lizards have no sense of smell."
        },
        correctAnswer: "a"
    },
    {
        question: "What is the study of rocks called?",
        answers: {
            a: "Geography",
            b: "Topography",
            c: "Geology"
        },
        correctAnswer: "c"
    },
    {
        question: "What is meant by '4-ply' paper?",
        answers: {
            a: "The paper is 4 inches wide.",
            b: "The paper is 4 layers thick.",
            c: "The paper can be reused 4 times."
        },
        correctAnswer: "b"
    },
    {
        question: "Who played Spock in The Original Series of Star Trek?",
        answers: {
            a: "William Shatner.",
            b: "Leonard Nimoy.",
            c: "DeForest Kelly."
        },
        correctAnswer: "b"
    },
    {
        question: "What is the plural for 'Scissors'?",
        answers: {
            a: "Scissors.",
            b: "Scissi.",
            c: "Scissores."
        },
        correctAnswer: "a"
    },
    {
        question: "What is the name of the largest lizard in the world?",
        answers: {
            a: "Komodo Dragon.",
            b: "Bearded Dragon.",
            c: "Chinese Water Dragon."
        },
        correctAnswer: "a"
    },
    {
        question: "What is the name for the Japanese art of folding paper?",
        answers: {
            a: "Shigaraki.",
            b: "Kintsugi.",
            c: "Origami."
        },
        correctAnswer: "c"
    },
    {
        question: "What is the 'The Rock's' real name?",
        answers: {
            a: "Vin Diesel.",
            b: "Dawyne Johnson.",
            c: "Jason Momoa."
        },
        correctAnswer: "b"
    },
    {
        question: "When were scissors first thought to be invented?",
        answers: {
            a: "4000 BC.",
            b: "1100 AD.",
            c: "1874 AD."
        },
        correctAnswer: "a"
    },
    {
        question: "What was Spock's role on the USS Enterprise?",
        answers: {
            a: "Pilot.",
            b: "Medical Officer.",
            c: "Science Officer."
        },
        correctAnswer: "c"
    },
    {
        question: "Approximately how many species of Lizard exist worldwide?",
        answers: {
            a: "55,000.",
            b: "65,000.",
            c: "75,000."
        },
        correctAnswer: "b"
    },
    {
        question: "What species of alien is Spock?",
        answers: {
            a: "Andorian.",
            b: "Klingon.",
            c: "Vulcan."
        },
        correctAnswer: "c"
    },
    {
        question: "What is a 'Rocky Road'?",
        answers: {
            a: "A dessert made of marshmallows, chocolate and dried fruit.",
            b: "A 2013 action film starring Uma Thurman and Ewan McGregor.",
            c: "A species of flower native to the mountainous regions of South America."
        },
        correctAnswer: "a"
    },
    {
        question: "What is the name of fictional paper company in the American TV series 'The Office'?",
        answers: {
            a: "Paper, Pens & Co.",
            b: "Dunder Mifflin.",
            c: "Regional Office Supplies Ltd."
        },
        correctAnswer: "b"
    },
    {
        question: "Who portrayed Edward Scissorhands in the 1990 film by Tim Burton?",
        answers: {
            a: "Tom Cruise.",
            b: "John Travolta.",
            c: "Johnny Depp."
        },
        correctAnswer: "c"
    },
]

function startQuiz () {
    let questionArea = document.getElementById("quiz-area")

    questionArea.innerHTML = ""

    let previousButton = document.createElement('button');
    let nextButton = document.createElement('button');
    
    previousButton.setAttribute('id', 'btn-pre');
    previousButton.setAttribute('class', 'btn');
    previousButton.setAttribute('class', 'btn--sec');
    previousButton.innerHTML = "Previous<br>Question";
    nextButton.setAttribute('id','btn-nxt');
    nextButton.setAttribute('class','btn');
    nextButton.setAttribute('class', 'btn--sec');
    nextButton.innerHTML = "Next<br>Question"

    document.getElementById("quiz-area").appendChild(previousButton)
    document.getElementById("quiz-area").appendChild(nextButton)

    generateQuestions(questionArea);
}

function generateQuestions(questionArea) {
    let output = [];
    let answers;
        for (let i=0; i<questions.length; i++){
            answers = [];
            for (letter in questions[0].answers){
                
				// ...add an html radio button
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ letter + ': '
						+ questions[0].answers[letter]
					+ '</label>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<div class="question">' + questions[0].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		// finally combine our output list into one string of html and put it on the page
		questionArea.innerHTML = output.join('');
	}
