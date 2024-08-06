const questions = [
    {
        question: "Qual atributo é usado para especificar um texto alternativo para uma imagem?",
        options: [
            "alt",
            "title",
            "src",
            "href"
        ],
        answer: 0
    },
    {
        question: "Qual tag HTML é usada para definir uma célula de cabeçalho em uma tabela?",
        options: [
            "<⠀th⠀><⠀/th⠀>",
            "<⠀tr⠀></⠀tr⠀>",
            "<⠀td⠀><⠀/td⠀>",
            "<⠀thead⠀><⠀/thead⠀>"
        ],
        answer: 0
    },
    {
        question: "Qual tag HTML é usada para definir um item de lista?",
        options: [
            "<⠀list⠀><⠀/list⠀>",
            "<⠀ol⠀><⠀/ol⠀>",
            "<⠀ul⠀><⠀/ul⠀>",
            "<⠀li⠀><⠀/li⠀>"
        ],
        answer: 3
    },
    {
        question: "Qual tag HTML é usada para definir uma área de texto?",
        options: [
            "<⠀input type='text'⠀>",
            "<⠀textarea⠀><⠀/textarea⠀>",
            "<⠀input type='textarea'⠀>",
            "<⠀text⠀><⠀/text⠀>"
        ],
        answer: 1
    },
    {
        question: "Qual tag HTML é usada para definir um botão?",
        options: [
            "<⠀input type='button'⠀>",
            "<⠀btn⠀><⠀/btn⠀>",
            "<⠀button⠀><⠀/button⠀>",
            "<⠀input button='button'⠀>"
        ],
        answer: 2
    },
    {
        question: "Qual atributo é usado para abrir um link em uma nova aba ou janela?",
        options: [
            "target='_blank'",
            "newwindow",
            "newtab",
            "target='_new'"
        ],
        answer: 0
    },
    {
        question: "Qual tag HTML é usada para definir uma seção de navegação?",
        options: [
            "<⠀navigation⠀><⠀/navigation⠀>",
            "<⠀section⠀></⠀section⠀>",
            "<⠀nav⠀><⠀/nav⠀>",
            "<⠀div⠀><⠀/div⠀>"
        ],
        answer: 2
    },
    {
        question: "Qual tag HTML5 é usada para definir um rodapé para um documento ou seção?",
        options: [
            "<⠀footer⠀><⠀/footer⠀>",
            "<⠀bottom⠀><⠀/bottom⠀>",
            "<⠀section⠀><⠀/section⠀>",
            "<⠀div⠀><⠀/div⠀>"
        ],
        answer: 0
    },
    {
        question: "Qual tag HTML é usada para definir metadados sobre um documento?",
        options: [
            "<⠀data⠀>",
            "<⠀info⠀>",
            "<⠀metadata⠀>",
            "<⠀meta⠀>"
        ],
        answer: 3
    },
    {
        question: "Qual atributo HTML é usado para especificar o caminho de um arquivo CSS?",
        options: [
            "href",
            "src",
            "rel",
            "type"
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