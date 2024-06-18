const questions = [
    {
        questions:"what is largest animal in the world ",
        answers:[
                {text:"shark", correct:false},
                {text:"Blue Whale", correct: true},
                {text:"Elephat", correct:false},
                {text:"Giraffe", correct:false},
        ]
    },

    {
        questions:"what is tallest animal in the world ",
        answers:[
                {text:"shark", correct:false},
                {text:"Blue Whale", correct: false},
                {text:"Elephat", correct:false},
                {text:"Giraffe", correct:true},
        ]
    },

    {
        questions:"what is havyest animal in the world ",
        answers:[
                {text:"shark", correct:false},
                {text:"Blue Whale", correct:false},
                {text:"Elephat", correct:true},
                {text:"Giraffe", correct:false},
        ]
    },

    {
        questions:"what is biggest animal in the world ",
        answers:[
                {text:"shark", correct:false},
                {text:"Blue Whale", correct: true},
                {text:"Elephat", correct:false},
                {text:"Giraffe", correct:false},
        ]
    },
]


const questionElement =document.getElementById("question");
const answerButton =document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex=0;
let score=0;


function startQuiz(){
    currentQuestionIndex=0;
    score =0;
    nextButton.innerHTML ="Next"
    showQuestion();
}

function showQuestion(){

    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;
    questionElement.innerHTML=questionNo + "." +currentQuestion.questions;


    currentQuestion.answers.froEach(answer =>{
        const button =document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

startQuiz();