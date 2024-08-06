const questions = [
    {
        question: "Qual atributo de uma tag <⠀a⠀> é usado para especificar a linguagem do documento vinculado?",
        options: [
            "hreflang",
            "lang",
            "type",
            "rel"
        ],
        answer: 0
    },
    {
        question: "Qual tag HTML é usada para definir uma seção de texto que foi extraído de outra fonte?",
        options: [
            "<⠀q⠀><⠀/q⠀>",
            "<⠀blockquote⠀><⠀/blockquote⠀>",
            "<⠀cite⠀><⠀/cite⠀>",
            "<⠀quote⠀><⠀/quote⠀>"
        ],
        answer: 1
    },
    {
        question: "Qual atributo de uma tag <⠀form⠀> é usado para especificar um arquivo que conterá a lógica de tratamento do formulário?",
        options: [
            "method",
            "enctype",
            "target",
            "action"
        ],
        answer: 2
    },
    {
        question: "Qual atributo HTML é usado para especificar que um campo de entrada deve ser preenchido antes de enviar o formulário?",
        options: [
            "required",
            "validate",
            "mandatory",
            "placeholder"
        ],
        answer: 0
    },
    {
        question: "Qual é a tag HTML correta para definir uma célula que abrange várias colunas em uma tabela?",
        options: [
            "<⠀td columns='3'⠀><⠀/td⠀>",
            "<⠀td span='3'⠀><⠀/td⠀>",
            "<⠀td col='3'⠀><⠀/td⠀>",
            "<⠀td colspan='3'⠀><⠀/td⠀>"
        ],
        answer: 3
    },
    {
        question: "Qual é a diferença entre a tag <⠀strong⠀> e a tag <⠀b⠀>?",
        options: [
            "A tag <⠀b⠀> indica importância, enquanto a tag <⠀strong⠀> apenas estiliza o texto em negrito.",
            "A tag <⠀strong⠀> indica importância, enquanto a tag <⠀b⠀> apenas estiliza o texto em negrito.",
            "Não há diferença, ambos estilizam o texto em negrito.",
            "A tag <⠀strong⠀> estiliza o texto em itálico, enquanto a tag <⠀b⠀> estiliza o texto em negrito."
        ],
        answer: 1
    },
    {
        question: "Qual tag HTML é usada para definir um texto pré-formatado?",
        options: [
            "<⠀pre⠀><⠀/pre⠀>",
            "<⠀code⠀><⠀/code⠀>",
            "<⠀format⠀><⠀/format⠀>",
            "<⠀text⠀><⠀/text⠀>"
        ],
        answer: 0
    },
    {
        question: "Qual atributo HTML5 é usado para especificar que um campo de entrada pode aceitar múltiplos valores?",
        options: [
            "many",
            "several",
            "multiple",
            "multi"
        ],
        answer: 2
    },
    {
        question: "Qual é a tag HTML correta para incorporar conteúdo interativo ou de mídia, como um plugin ou um objeto ActiveX?",
        options: [
            "<⠀embed⠀>",
            "<⠀object⠀>",
            "<⠀iframe⠀>",
            "<⠀media⠀>"
        ],
        answer: 1
    },
    {
        question: "Qual atributo de uma tag <⠀script⠀> é usado para especificar que o script será executado assim que estiver disponível, sem esperar pelo carregamento completo da página?",
        options: [
            "async",
            "defer",
            "type",
            "src"
        ],
        answer: 1
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