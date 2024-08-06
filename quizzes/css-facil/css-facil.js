const questions = [
    {
        question: "O que significa CSS?",
        options: [
            "Cascading Style Sheets",
            "Creative Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets"
        ],
        answer: 0
    },
    {
        question: "Qual é a sintaxe correta para adicionar uma cor de fundo em CSS?",
        options: [
            "color-background: yellow;",
            "back-color: yellow;",
            "background-color: yellow;",
            "background: yellow;"
        ],
        answer: 2
    },
    {
        question: "Como você adiciona um comentário em um arquivo CSS?",
        options: [
            "// comentário",
            "<⠀!-- comentário --⠀>",
            "' comentário",
            "/* comentário */"
        ],
        answer: 3
    },
    {
        question: "Qual é a sintaxe correta para tornar todo o texto em um elemento negrito?",
        options: [
            "font-weight: bold;",
            "text-weight: bold;",
            "font: bold;",
            "text-bold: true;"
        ],
        answer: 0
    },
    {
        question: "Qual propriedade é usada para alterar a cor do texto em CSS?",
        options: [
            "text-color",
            "color",
            "font-color",
            "text-style"
        ],
        answer: 1
    },
    {
        question: "Como você adiciona uma borda a um elemento em CSS?",
        options: [
            "border-width: 1px; border-style: solid; border-color: black;",
            "border-style: solid; border-width: 1px; border-color: black;",
            "border: 1px solid black;",
            "border: black 1px solid;"
        ],
        answer: 2
    },
    {
        question: "Como você seleciona um elemento com o id 'header' em CSS?",
        options: [
            "#header",
            ".header",
            "header",
            "*header"
        ],
        answer: 0
    },
    {
        question: "Qual é a propriedade para alterar o tamanho da fonte em CSS?",
        options: [
            "text-size",
            "font-style",
            "text-style",
            "font-size"
        ],
        answer: 2
    },
    {
        question: "Como você remove os sublinhados de links em CSS?",
        options: [
            "text-style: no-underline;",
            "no-underline: true;",
            "text-underline: none;",
            "text-decoration: none;"
        ],
        answer: 3
    },
    {
        question: "Como você aplica uma margem de 20px a todos os lados de um elemento?",
        options: [
            "margin: 20px;",
            "padding: 20px;",
            "space: 20px;",
            "margin-all: 20px;"
        ],
        answer: 0
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