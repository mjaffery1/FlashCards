const question = document.querySelector('.question')
const answer = document.querySelector('.answer')
const checkAnswer = document.querySelector('.check')
const nextQuestion = document.querySelector('.next')
const card = document.querySelector('.card')
const choices = document.querySelector('.choices')
const mainContainer= document.querySelector('.maincontainer')
const choiceA= document.querySelector('#choice-a')
const choiceB= document.querySelector('#choice-b')
const choiceC= document.querySelector('#choice-c')

let viewingQuestion = true
let i=0
console.log(viewingQuestion);
flipCard = () => {
    card.classList.toggle("flipCard")
}

let questions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "What does CSS stand for?",
      answers: {
        a: "Chrome Server System",
        b: "Cascading Style Sheets",
        c: "Candy Sugar Sweet"
      },
      correctAnswer: "b"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "ESLint"
      },
      correctAnswer: "c"
    },
    {
        question: "What language does a computer speak?",
        answers: {
            a: "Javascript",
            b: "Binary",
            c: "Java"
        },
        correctAnswer: "b"
    },
    {
        question: "Are Git and Github the same thing?",
        answers: {
          a: "Yes",
          b: "No",
          c: "Maybe So"
        },
        correctAnswer: "b"
      },
      {
        question: "How can you add a comment in a JavaScript?",
        answers: {
          a: "'this is a comment",
          b: "//This is a comment",
          c: "<!--This is a comment-->"
        },
        correctAnswer: "b"
      },
      {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        answers: {
          a: "In the <head> section",
          b: "In the <body> section",
          c: "At the end of the document"
        },
        correctAnswer: "a"
      },
      {
          question: "Which HTML tag is used to define an internal stylesheet",
          answers: {
              a: "<script>",
              b: "<style>",
              c: "<css>"
          },
          correctAnswer: "b"
      },
      {
        question: "Choose the correct element for the largest heading",
        answers: {
          a: "<h6>",
          b: "<head>",
          c: "<h1>"
        },
        correctAnswer: "c"
      },
      {
          question: "Which is the correct syntax for identifying an element by class?",
          answers: {
              a: ".class",
              b: "#class",
              c: "<class>"
          },
          correctAnswer: "a"
      }

  ];
//   for (let i=0;i<questions.length;i++)[Math.floor(Math.random *questions.length)]
// console.log(questions[0]);
  getRandomQuestion= () => {
    //   for(let i=0;i<questions.length;i++){
    randomQuestion= questions[i].question
    // console.log(randomQuestion);
    question.innerText= `${randomQuestion}`
    choiceA.innerText=questions[i].answers.a
    choiceB.innerText=questions[i].answers.b
    choiceC.innerText=questions[i].answers.c

    
    
    

  }
  
//  console.log(questions.length)
  
// getAnswer= () => {
//     // if (i<questions.length){
//     //     i++
//     // }else{
//     //     i=0
//     // }  

//   

//       if (i<questions.length-1) {
//         i++
//     }else{ 
//         i=0
//     }
//     }
    
    // getAnswer()
    // console.log(randomAnswer);
checkAnswer.addEventListener('click', () =>{
    viewingQuestion=!viewingQuestion
    console.log("checking answer", viewingQuestion);
    randomAnswer=questions[i].correctAnswer
    answer.innerText= `${randomAnswer} - ${questions[i].answers[randomAnswer]}`
    // console.log(randomAnswer)
    flipCard()  
    // getAnswer()

})



nextQuestion.addEventListener('click', () =>{
    if (!viewingQuestion){
        flipCard() 
        viewingQuestion = true
    }
    console.log("question", viewingQuestion);
    if (i<questions.length) {
        i++
    }else{ 
        i=0
    }
    getRandomQuestion()
    // answer.innerHTML= 'Check Answer'

})



//create multiple choice options(3)
//card should flip and show answer when choice is chosen
//game should keep track of right and wrong answers