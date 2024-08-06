const questions = [
    {
        question: "O que significa JS?",
        options: [
            "JavaScript",
            "JavaServer",
            "JustScript",
            "JSONScript"
        ],
        answer: 0
    },
    {
        question: "Como você declara uma variável em JavaScript?",
        options: [
            "variable x;",
            "v x;",
            "var x;",
            "declare x;"
        ],
        answer: 2
    },
    {
        question: "Qual é a sintaxe correta para imprimir algo no console?",
        options: [
            "print('Olá');",
            "echo('Olá');",
            "console.print('Olá');",
            "console.log('Olá');"
        ],
        answer: 3
    },
    {
        question: "Qual é a sintaxe correta para criar uma função em JavaScript?",
        options: [
            "function minhaFuncao() {}",
            "func minhaFuncao() {}",
            "function: minhaFuncao() {}",
            "def minhaFuncao() {}"
        ],
        answer: 0
    },
    {
        question: "Como você chama uma função chamada 'minhaFuncao'?",
        options: [
            "call minhaFuncao();",
            "minhaFuncao();",
            "execute minhaFuncao();",
            "run minhaFuncao();"
        ],
        answer: 1
    },
    {
        question: "Como você escreve um comentário de linha única em JavaScript?",
        options: [
            "<⠀!-- Isto é um comentário --⠀>",
            "# Isto é um comentário",
            "// Isto é um comentário",
            "/* Isto é um comentário */"
        ],
        answer: 2
    },
    {
        question: "Como você obtém o comprimento de uma string em JavaScript?",
        options: [
            "minhaString.size",
            "minhaString.len",
            "minhaString.count",
            "minhaString.length"
        ],
        answer: 3
    },
    {
        question: "Qual método é usado para adicionar um elemento no final de um array?",
        options: [
            "array.push()",
            "array.add()",
            "array.insert()",
            "array.append()"
        ],
        answer: 0
    },
    {
        question: "Qual operador é usado para atribuição em JavaScript?",
        options: [
            "=",
            "==",
            "===",
            "=>"
        ],
        answer: 0
    },
    {
        question: "Como você pode adicionar um comentário de várias linhas em JavaScript?",
        options: [
            "// Comentário de várias linhas",
            "<⠀!-- Comentário de várias linhas --⠀>",
            "/* Comentário de várias linhas */",
            "# Comentário de várias linhas"
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