const questions = [
    {
        question: "Qual é a saída do seguinte código?\n\n```javascript\nconsole.log('5' - 3);\n```",
        options: [
            "2",
            "53",
            "NaN",
            "undefined"
        ],
        answer: 0
    },
    {
        question: "O que o seguinte código faz?\n\n```javascript\nconst arr = [1, 2, 3];\narr[10] = 10;\nconsole.log(arr.length);\n```",
        options: [
            "3",
            "10",
            "11",
            "undefined"
        ],
        answer: 2
    },
    {
        question: "Qual é a saída do seguinte código?\n\n```javascript\nconsole.log([] == ![]);\n```",
        options: [
            "true",
            "false",
            "NaN",
            "undefined"
        ],
        answer: 0
    },
    {
        question: "Como você pode verificar se uma variável é um array em JavaScript?",
        options: [
            "Array.isArray()",
            "typeof variable === 'array'",
            "variable instanceof Array",
            "variable.isArray()"
        ],
        answer: 0
    },
    {
        question: "Qual é a saída do seguinte código?\n\n```javascript\nconsole.log(1 + '1');\n```",
        options: [
            "2",
            "NaN",
            "11",
            "undefined"
        ],
        answer: 2
    },
    {
        question: "Qual é o efeito do seguinte código?\n\n```javascript\nconst obj = {a: 1};\nconst copy = Object.assign({}, obj);\nobj.a = 2;\nconsole.log(copy.a);\n```",
        options: [
            "2",
            "undefined",
            "Gera um erro",
            "1"
        ],
        answer: 3
    },
    {
        question: "Qual é a saída do seguinte código?\n\n```javascript\nconsole.log('a' + + 'b');\n```",
        options: [
            "ab",
            "aNaN",
            "NaN",
            "undefined"
        ],
        answer: 1
    },
    {
        question: "Qual é a diferença entre `null` e `undefined` em JavaScript?",
        options: [
            "`null` é um valor atribuído explicitamente, enquanto `undefined` é um valor atribuído pelo JavaScript.",
            "`null` é um tipo de dado, enquanto `undefined` não é.",
            "`undefined` é um valor atribuído explicitamente, enquanto `null` é um valor atribuído pelo JavaScript.",
            "`null` e `undefined` são equivalentes e não têm diferença."
        ],
        answer: 0
    },
    {
        question: "Qual é a saída do seguinte código?\n\n```javascript\nconsole.log(0 == false);\n```",
        options: [
            "false",
            "NaN",
            "undefined",
            "true"
        ],
        answer: 3
    },
    {
        question: "Qual é a diferença entre `==` e `===` em JavaScript?",
        options: [
            "`==` faz uma comparação com coerção de tipo, enquanto `===` faz uma comparação sem coerção de tipo.",
            "`==` faz uma comparação sem coerção de tipo, enquanto `===` faz uma comparação com coerção de tipo.",
            "`==` é usado para comparar objetos, enquanto `===` é usado para comparar tipos primitivos.",
            "Não há diferença, ambos são idênticos."
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