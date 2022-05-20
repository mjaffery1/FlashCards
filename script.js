const question = document.querySelector('.question')
const answer = document.querySelector('.answer')
const refresh = document.querySelector('.refresh')
const nextQuestion = document.querySelector('.next')
const card = document.querySelector('.card')
const choices = document.querySelector('.choices')
const mainContainer= document.querySelector('.maincontainer')
const choiceA= document.querySelector('#choice-a')
const choiceB= document.querySelector('#choice-b')
const choiceC= document.querySelector('#choice-c')
let score=0

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
      correctAnswer: "Brendan Eich"
    },
    {
      question: "What does CSS stand for?",
      answers: {
        a: "Chrome Server System",
        b: "Cascading Style Sheets",
        c: "Candy Sugar Sweet"
      },
      correctAnswer: "Cascading Style Sheets"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "ESLint"
      },
      correctAnswer: "ESLint"
    },
    {
        question: "What language does a computer speak?",
        answers: {
            a: "Javascript",
            b: "Binary",
            c: "Java"
        },
        correctAnswer: "Binary"
    },
    {
        question: "Are Git and Github the same thing?",
        answers: {
          a: "Yes",
          b: "No",
          c: "Maybe So"
        },
        correctAnswer: "No"
      },
      {
        question: "How can you add a comment in a JavaScript?",
        answers: {
          a: "'this is a comment",
          b: "//This is a comment",
          c: "<!--This is a comment-->"
        },
        correctAnswer: "//This is a comment"
      },
      {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        answers: {
          a: `In the head section`,
          b: "In the <body> section",
          c: "At the end of the document"
        },
        correctAnswer: `In the head section`
      },
      {
          question: "Which HTML tag is used to define an internal stylesheet",
          answers: {
              a: "<script>",
              b: "<style>",
              c: "<css>"
          },
          correctAnswer: "<style>"
      },
      {
        question: "Choose the correct element for the largest heading",
        answers: {
          a: "h6",
          b: "head",
          c: 'h1'
        },
        correctAnswer: 'h1'
      },
      {
          question: "Which is the correct syntax for identifying an element by class?",
          answers: {
              a: ".class",
              b: "#class",
              c: "<class>"
          },
          correctAnswer: ".class"
      }

  ];

  getRandomQuestion= () => {
    randomQuestion= questions[i].question    
    question.innerText= `${randomQuestion}`
    choiceA.innerText=questions[i].answers.a
    choiceB.innerText=questions[i].answers.b
    choiceC.innerText=questions[i].answers.c
 }


nextQuestion.addEventListener('click', () =>{
    if (!viewingQuestion){
        flipCard() 
        viewingQuestion = true
        
    }

    getRandomQuestion()
    flipCard()


})
choiceA.addEventListener('click', correct = () => {
  if (questions[i].correctAnswer===questions[i].answers.a){
     score++ 
    alert(`Correct! You have ${score} points`)
    answer.innerHTML=questions[i].correctAnswer

    flipCard()
    getRandomQuestion()
  }else{
      alert('Incorrect!')
      flipCard()
      getRandomQuestion()
      answer.innerText=questions[i].correctAnswer
    }
    if (i<questions.length) {
        i++
        if(i===questions.length){
            setTimeout(()=>{
                alert(`Game over! You scored ${score} out of 10`)
            },1000)
            
        }
    }else{ 
        i=0
    }

})
choiceB.addEventListener('click', correctAnswer = () => {
    if (questions[i].correctAnswer===questions[i].answers.b){
        score++
        alert(`Correct! You have ${score} points`)
        answer.innerText=questions[i].correctAnswer
        flipCard()
        getRandomQuestion()
    }else{
        alert('Incorrect!')
        flipCard()
        getRandomQuestion()
        answer.innerText=questions[i].correctAnswer

    }
    if (i<questions.length) {
        i++
        if(i===questions.length){
            setTimeout(()=>{
                alert(`Game over! You scored ${score} out of 10`)
            },1000)
            
        }
    }else{ 
        i=0
    }  
})
choiceC.addEventListener('click', correct = () => {
  if (questions[i].correctAnswer===questions[i].answers.c){
     score++ 
    alert(`Correct! You have ${score} points`)
    answer.innerHTML=questions[i].correctAnswer

    flipCard()
    getRandomQuestion()
  }else{
      alert('Incorrect!')
      flipCard()
      getRandomQuestion()
      answer.innerText=questions[i].correctAnswer
    }
    if (i<questions.length) {
        i++
        if(i===questions.length){
            setTimeout(()=>{
                alert(`Game over! You scored ${score} out of 10`)
            },1000)
            
        }
    }else{ 
        i=0
    }
})

refresh.addEventListener('click',()=>{
    location.reload();
})

