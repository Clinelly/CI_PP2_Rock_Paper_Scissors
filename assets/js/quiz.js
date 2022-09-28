let myQuestions = [ //Generates the array of questions.
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

var quizContainer = document.getElementById('quiz-area');
var resultsContainer = document.getElementById('answer-area');
var submitButton = document.getElementById('quiz-submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

  function showQuestions(questions, quizContainer){
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers;

    // for each question...
    for(var i=0; i<questions.length; i++){
      
      // first reset the list of answers
      answers = [];

      // for each available answer...
      for(letter in questions[i].answers){

        // ...add an html radio button
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer){
    
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    // keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;
    
    // for each question...
    for(var i=0; i<questions.length; i++){

      // find selected answer
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
      // if answer is correct
      if(userAnswer===questions[i].correctAnswer){
        // add to the number of correct answers
        numCorrect++;
        
        // color the answers green
        answerContainers[i].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[i].style.color = 'red';
      }
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  }

  // show questions right away
  showQuestions(questions, quizContainer);
  
  // on submit, show results
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }

}