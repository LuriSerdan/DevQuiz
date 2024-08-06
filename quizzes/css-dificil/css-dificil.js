const questions = [
    {
        question: "Qual é a diferença entre <⠀flex-grow⠀> e <⠀flex-shrink⠀> na especificação Flexbox?",
        options: [
            "<⠀flex-grow⠀> controla o quanto um item encolhe, enquanto <⠀flex-shrink⠀> controla o quanto ele cresce.",
            "<⠀flex-grow⠀> controla o quanto um item cresce, enquanto <⠀flex-shrink⠀> controla o quanto ele encolhe.",
            "Ambos controlam a largura do item, mas de maneira diferente.",
            "Não há diferença, eles têm o mesmo efeito."
        ],
        answer: 1
    },
    {
        question: "Qual é o propósito da propriedade <⠀contain⠀> no CSS?",
        options: [
            "Controlar a visibilidade de um elemento em relação ao contêiner pai.",
            "Definir o tipo de layout a ser usado para um elemento.",
            "Melhorar o desempenho ao isolar a renderização de um elemento e seus descendentes.",
            "Especificar a posição de um elemento dentro de seu contêiner."
        ],
        answer: 2
    },
    {
        question: "Como você estiliza o primeiro filho de um elemento em CSS?",
        options: [
            "<⠀elemento:only-child⠀>",
            "<⠀elemento:nth-child(1)⠀>",
            "<⠀elemento:first-of-type⠀>",
            "<⠀elemento:first-child⠀>"
        ],
        answer: 3
    },
    {
        question: "Qual é a diferença entre <⠀position: absolute⠀> e <⠀position: fixed⠀>?",
        options: [
            "<⠀position: fixed⠀> posiciona o elemento em relação ao seu ancestral mais próximo com <⠀position: relative⠀>, enquanto <⠀position: absolute⠀> posiciona o elemento em relação à viewport.",
            "<⠀position: absolute⠀> posiciona o elemento em relação ao seu ancestral mais próximo com <⠀position: relative⠀>, enquanto <⠀position: fixed⠀> posiciona o elemento em relação à viewport.",
            "Não há diferença, ambos têm o mesmo efeito.",
            "Ambos são usados para posicionamento relativo ao viewport."
        ],
        answer: 1
    },
    {
        question: "Como você aplica uma sombra em torno de um elemento usando a propriedade <⠀box-shadow⠀>?",
        options: [
            "box-shadow: horizontal-offset vertical-offset blur-radius color spread-radius;",
            "box-shadow: color horizontal-offset vertical-offset spread-radius blur-radius;",
            "box-shadow: horizontal-offset vertical-offset blur-radius spread-radius color;",
            "box-shadow: horizontal-offset vertical-offset blur-radius spread-radius color;"
        ],
        answer: 0
    },
    {
        question: "Qual é a função da propriedade <⠀clip-path⠀> no CSS?",
        options: [
            "Definir a posição de um elemento dentro de seu contêiner.",
            "Aplicar uma borda ao redor de um elemento.",
            "Especificar a opacidade de um elemento.",
            "Controlar como o conteúdo de um elemento substituto se ajusta ao seu contêiner."
        ],
        answer: 0
    },
    {
        question: "Como você cria um layout de coluna usando CSS Grid?",
        options: [
            "Definindo <⠀display: inline-grid⠀> e especificando as colunas com <⠀grid-template-rows⠀>.",
            "Definindo <⠀display: flex⠀> no contêiner e usando <⠀flex-direction: column⠀> para especificar as colunas.",
            "Usando a propriedade <⠀column-count⠀> para dividir o contêiner em colunas.",
            "Definindo <⠀display: grid⠀> no contêiner e usando <⠀grid-template-columns⠀> para especificar as colunas."
        ],
        answer: 3
    },
    {
        question: "Qual é a diferença entre <⠀transform: translateX()⠀> e <⠀transform: translate()⠀>?",
        options: [
            "Ambos são usados para mover o elemento em diferentes direções.",
            "Não há diferença, ambos têm o mesmo efeito.",
            "<⠀transform: translateX()⠀> move o elemento ao longo do eixo X, enquanto <⠀transform: translate()⠀> move o elemento ao longo dos eixos X e Y.",
            "<⠀transform: translate()⠀> move o elemento ao longo do eixo X, enquanto <⠀transform: translateX()⠀> move o elemento ao longo dos eixos X e Y."
        ],
        answer: 2
    },
    {
        question: "Qual é a finalidade da propriedade <⠀object-fit⠀> em CSS?",
        options: [
            "Definir a posição de um elemento dentro de seu contêiner.",
            "Aplicar uma borda ao redor de um elemento.",
            "Controlar como o conteúdo de um elemento substituto se ajusta ao seu contêiner.",
            "Especificar a opacidade de um elemento."
        ],
        answer: 2
    },
    {
        question: "Como você pode criar uma animação que muda a cor de um elemento ao longo do tempo?",
        options: [
            "Usando <⠀transition⠀> para alterar a cor ao longo do tempo.",
            "Aplicando uma classe com a cor desejada e alternando entre as classes.",
            "Usando <⠀@keyframes⠀> para definir a animação e a propriedade <⠀animation⠀> para aplicá-la ao elemento.",
            "Usando a propriedade <⠀color-animation⠀> diretamente no elemento."
        ],
        answer: 2
    },
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