const questions = [
    {
        question: "Qual é a saída do seguinte código?\n\n```javascript\nconsole.log(1 + '2' - 1);\n```",
        options: [
            "12",
            "2",
            "NaN",
            "undefined"
        ],
        answer: 1
    },
    {
        question: "Qual é a saída do seguinte código?\n\n```javascript\nconsole.log([1, 2] == [1, 2]);\n```",
        options: [
            "true",
            "false",
            "NaN",
            "undefined"
        ],
        answer: 1
    },
    {
        question: "O que o seguinte código imprime?\n\n```javascript\nconsole.log(typeof (() => {}));\n```",
        options: [
            "'function'",
            "'arrow function'",
            "'object'",
            "'undefined'"
        ],
        answer: 0
    },
    {
        question: "Qual é a saída do seguinte código?\n\n```javascript\nconsole.log({} + []);\n```",
        options: [
            "[object Object]",
            "undefined",
            "''",
            "NaN"
        ],
        answer: 3
    },
    {
        question: "Qual é o comportamento do seguinte código?\n\n```javascript\nconsole.log(1 == '1' && 1 === '1');\n```",
        options: [
            "true",
            "false",
            "NaN",
            "undefined"
        ],
        answer: 1
    },
    {
        question: "Qual é a saída do seguinte código?\n\n```javascript\nconsole.log([2] == [2] && [2] === [2]);\n```",
        options: [
            "true",
            "false",
            "NaN",
            "undefined"
        ],
        answer: 1
    },
    {
        question: "O que o seguinte código faz?\n\n```javascript\nfunction a() { return this; }\nconst b = a.bind(2);\nconsole.log(b());\n```",
        options: [
            "undefined",
            "NaN",
            "window",
            "2"
        ],
        answer: 3
    },
    {
        question: "Qual é a saída do seguinte código?\n\n```javascript\nconsole.log([].concat([1, 2], [3, 4]));\n```",
        options: [
            "[[1, 2], [3, 4]]",
            "[1, 2, 3, 4]",
            "NaN",
            "undefined"
        ],
        answer: 1
    },
    {
        question: "Qual é a saída do seguinte código?\n\n```javascript\nconsole.log(0.1 + 0.2 === 0.3);\n```",
        options: [
            "true",
            "false",
            "NaN",
            "undefined"
        ],
        answer: 1
    },
    {
        question: "O que o seguinte código imprime?\n\n```javascript\nconsole.log(Object.is(NaN, NaN));\n```",
        options: [
            "false",
            "NaN",
            "true",
            "undefined"
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