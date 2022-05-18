const question = document.querySelector('.question')
const answer = document.querySelector('.answer')
const checkAnswer = document.querySelector('.check')
const nextQuestion = document.querySelector('.next')
const card = document.querySelector('.card')
let viewingQuestion = true

flipCard = () => {
    card.classList.toggle("flipCard")
}

let questions = {
    "What does CSS stand for?": "Cascading Style Sheets",
    "What is my name": "Mohammed Jaffery",
    "What is my dogs name": "Appa",
    "How many siblings do I have": 4,
    "How many bridges are there in NYC?": 21
}


let data = Object.entries(questions)
 
getRandomQuestion= () => {
    randomQuestion= data[Math.floor(Math.random() * data.length)]
    console.log(randomQuestion);
    question.innerText= `${randomQuestion[0]}`
    }

checkAnswer.addEventListener('click', () =>{
    viewingQuestion=!viewingQuestion
    console.log("checking answer", viewingQuestion);
    answer.innerHTML= `${randomQuestion[1]}`
    flipCard()    

})
nextQuestion.addEventListener('click', () =>{
    if (!viewingQuestion){
        flipCard()
        viewingQuestion=true
        console.log("question after flip", viewingQuestion);
    }
    console.log("question", viewingQuestion);
    getRandomQuestion()
    // answer.innerHTML= 'Check Answer'
})





