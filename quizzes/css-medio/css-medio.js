const questions = [
    {
        question: "Qual é a maneira correta de adicionar uma sombra ao texto em CSS?",
        options: [
            "text-shadow: 2px 2px 5px grey;",
            "text-shadow: grey 2px 2px 5px;",
            "shadow-text: 2px 2px 5px grey;",
            "shadow: text 2px 2px 5px grey;"
        ],
        answer: 0
    },
    {
        question: "Qual propriedade CSS é usada para alterar a fonte de um elemento?",
        options: [
            "font-style",
            "font-weight",
            "font-text",
            "font-family"
        ],
        answer: 3
    },
    {
        question: "Qual é a propriedade CSS usada para controlar o espaçamento entre linhas de texto?",
        options: [
            "spacing",
            "line-height",
            "text-spacing",
            "line-spacing"
        ],
        answer: 1
    },
    {
        question: "Como você faz uma lista não ordenada sem marcadores?",
        options: [
            "list-style: no-bullets;",
            "list: none;",
            "list-style-type: none;",
            "list-bullets: none;"
        ],
        answer: 2
    },
    {
        question: "Como você faz um texto ficar em itálico usando CSS?",
        options: [
            "font-style: italic;",
            "font: italic;",
            "text-style: italic;",
            "text: italic;"
        ],
        answer: 0
    },
    {
        question: "Qual propriedade é usada para definir a cor de fundo de um elemento?",
        options: [
            "bg-color",
            "color-background",
            "background",
            "background-color"
        ],
        answer: 3
    },
    {
        question: "Qual é a propriedade CSS usada para controlar o espaçamento à esquerda de um elemento?",
        options: [
            "margin-left",
            "padding-left",
            "space-left",
            "left-margin"
        ],
        answer: 0
    },
    {
        question: "Qual propriedade CSS é usada para fazer o texto aparecer em maiúsculas?",
        options: [
            "text-case: uppercase;",
            "transform-text: uppercase;",
            "text-transform: uppercase;",
            "text-uppercase: true;"
        ],
        answer: 2
    },
    {
        question: "Qual é a propriedade usada para controlar a largura de um elemento?",
        options: [
            "height",
            "width",
            "length",
            "size"
        ],
        answer: 1
    },
    {
        question: "Como você centraliza um elemento usando CSS?",
        options: [
            "margin: 0 auto;",
            "margin: auto 0;",
            "text-align: center;",
            "center-align: true;"
        ],
        answer: 2
    }
];

let currentQuestionIndex = 0;
let questionsRight = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    const quizContent = document.getElementById('quiz-content');

    quizContent.innerHTML = 
    `
        <div class="question-header">
        <div class="question-summary">${question.question}</div>
            <div class="question-progress">${currentQuestionIndex + 1}/10 </div>
            
        </div>

        <div class="quiz-options">
            ${question.options.map((option, index) => 
                `
                <button class="quiz-option" onclick='handleAnswer(this)' data-answer="${index}">${option}</button>
                `
            ).join('')}
        </div>
    `;
}

function handleAnswer(e) {
    const selectedAnswer = parseInt(e.dataset.answer);
    const question = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.quiz-option');

    if (selectedAnswer === question.answer) {
        e.classList.add('correct');
        questionsRight++;
    } else {
        e.classList.add('incorrect');
        options[question.answer].classList.add('correct');
    }

    options.forEach(option => {
        if (
            !option.classList.contains("incorrect")
            && !option.classList.contains("correct")
        ) {
            option.setAttribute("disabled", true)
        }
    });
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("next-question-button").style.display = "none"

    const quizContent = document.getElementById('quiz-content');
    quizContent.innerHTML = 
    `
        <div class="quiz-results">
            <h2>Quiz Concluído!</h2>

            <p>Você acertou ${questionsRight} de ${questions.length} perguntas.</p>

             <a href="./selection.html" class="quiz-restart">
                Finalizar quiz
            </a>
        </div>
    `;
    
}

loadQuestion();

// document.getElementById('quiz-content').addEventListener('click', handleAnswer());