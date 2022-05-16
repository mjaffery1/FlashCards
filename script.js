const question = document.querySelector('.question')
const answer = document.querySelector('.answer')
const checkAnswer = document.querySelector('.check')
const nextQuestion = document.querySelector('.next')


let questions = {
    "Name 2 variable declarations": "const and let",
    "What is my name": "Mohammed Jaffery",
    "What is my dogs name": "Appa",
    "How many siblings do I have": 4
}

let data = Object.entries(questions)
 
getRandomQuestion= () => {
    randomQuestion= data[Math.floor(Math.random() * data.length)]
    console.log(randomQuestion);
    question.innerText= `${randomQuestion[0]}`
    }

checkAnswer.addEventListener('click', () =>{
    answer.innerText= `${randomQuestion[1]}`
})
nextQuestion.addEventListener('click', () =>{
    getRandomQuestion()
    answer.innerHTML= 'Check Answer'
})


