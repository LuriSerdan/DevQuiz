const questions = [
    {
        question: "O que significa HTML?",
        options: ["Hypertext Markup Language", "Hightext Markup Language", "Hyperlink and Text Markup Language", "Nehuma das opções"],
        answer: 0
    },
    {
        question: "Qual é a tag para inserir uma imagem em HTML?",
        options: ["<⠀image⠀>", "<⠀img⠀>", "<⠀picture⠀>", "<⠀src⠀>"],
        answer: 1
    },
    {
        question: "Como você cria um link em HTML?",
        options: ["<⠀a url='url'⠀>", "<⠀link href='url'⠀>", "<⠀a href='url'⠀>", "<⠀link url='url'⠀>"],
        answer: 2
    },
    {
        question: "Qual tag é usada para criar uma lista ordenada?",
        options: ["<⠀ol⠀>", "<⠀ul⠀>", "<⠀li⠀>", "<⠀list⠀>"],
        answer: 0
    },
    {
        question: "Qual atributo é usado para especificar a legenda da imagem em uma tag <⠀img⠀>?",
        options: ["src", "href", "url", "alt"],
        answer: 3
    },
    {
        question: "Qual tag HTML é usada para definir um parágrafo?",
        options: ["<⠀p⠀>", "<⠀para⠀>", "<⠀paragraph⠀>", "<⠀text⠀>"],
        answer: 0
    },
    {
        question: "Como você define a estrutura básica de um documento HTML?",
        options: ["<⠀html⠀><⠀head⠀><⠀body⠀><⠀/body⠀><⠀/head⠀><⠀/html⠀>", "<⠀html⠀><⠀head⠀><⠀/head⠀><⠀body⠀><⠀/body⠀><⠀/html⠀>", "<⠀html⠀><⠀body⠀><⠀head⠀><⠀/head⠀><⠀/body⠀><⠀/html⠀>", "<⠀html⠀><⠀body⠀><⠀html⠀>"],
        answer: 1
    },
    {
        question: "Qual é a tag para criar uma tabela?",
        options: ["<⠀table⠀>", "<⠀tab⠀>", "<⠀t⠀>", "<⠀tbl⠀>"],
        answer: 0
    },
    {
        question: "Como você define um comentário em HTML?",
        options: ["<⠀!-- comentário --⠀>", "<⠀comment⠀>comentário</⠀comment⠀>", "/⠀* comentário *⠀/", "<⠀comment⠀>comentário"],
        answer: 0
    },
    {
        question: "Qual é a tag para definir um título em HTML?",
        options: ["'<⠀title⠀>'", "'<⠀head⠀>'", "'<⠀h1⠀>'", "'<⠀header⠀>'"],
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