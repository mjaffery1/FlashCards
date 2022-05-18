const question = document.querySelector('.question')
const answer = document.querySelector('.answer')
const checkAnswer = document.querySelector('.check')
const nextQuestion = document.querySelector('.next')
const card = document.querySelector('.card')
const choices = document.querySelector('.choices')
let viewingQuestion = true
let i=0

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

  getRandomQuestion= () => {
    //   for(let i=0;i<questions.length;i++){
    randomQuestion= questions[i].question
    // console.log(randomQuestion);
    question.innerText= `${randomQuestion}` 
    if (i<questions.length-1) {
        i++
    }else{ 
        i=0
    }
}
  
//  console.log(questions.length)
  getAnswer=()=> {
      randomAnswer=questions[i].correctAnswer
    }
    getAnswer()
    console.log(randomAnswer);
checkAnswer.addEventListener('click', () =>{
    viewingQuestion=!viewingQuestion
    // console.log("checking answer", viewingQuestion);
    getAnswer()
    answer.innerHTML= `${randomAnswer}`

        console.log(randomAnswer)
    flipCard()    

})
nextQuestion.addEventListener('click', () =>{
    if (!viewingQuestion){
        flipCard()
        viewingQuestion=true
        // console.log("question after flip", viewingQuestion);
    }
    // console.log("question", viewingQuestion);
    getRandomQuestion()
    // answer.innerHTML= 'Check Answer'

})

const newButton1=document.createElement("button")
newButton1.innerText=questions[i].answers.a
choices.appendChild(newButton1)
const newButton2=document.createElement("button")
newButton2.innerText=questions[i].answers.b
choices.appendChild(newButton2)
const newButton3=document.createElement("button")
newButton3.innerText=questions[i].answers.c
 choices.appendChild(newButton3)



//create multiple choice options(3)
//card should flip and show answer when choice is chosen
//game should keep track of right and wrong answers