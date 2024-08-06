// Função para abrir o popup da página de quizzes
function openPopup() {
    document.getElementById('popup').classList.add('visible');
}

// Função para fechar o popup quando clicar no botão voltar
function closePopup() {
    document.getElementById('popup').classList.remove('visible');
}

// Função para redirecionar para o quiz baseado na dificuldade e linguagem
function startQuiz(language, difficulty) {
    // Verifique os valores
    console.log(`Redirecionando para: DevQuiz/quizzes/${language}-${difficulty}.html`);
    // Redireciona para a URL
    window.location.href = `${language}-${difficulty}.html`;
}

// Adiciona ações aos botões de dificuldade
document.querySelectorAll('.btn-card-dificuldade').forEach(button => {
    button.addEventListener('click', (event) => {
        let difficulty = "";
        const language = event.target.dataset.language;

        if (event.target.textContent == "Fácil")  { difficulty = "facil" };
        if (event.target.textContent == "Médio") { difficulty = "medio" };
        if (event.target.textContent == "Difícil") { difficulty = "dificil" };

        console.log(`Dificuldade selecionada: ${difficulty}, Linguagem: ${language}`); // Depure os valores
        
        if (difficulty !== 'voltar') { // Verifica se não é o botão "Voltar"
            startQuiz(language, difficulty);
        }
    });
});

// Adiciona ações para os botões de iniciar quizzes
document.querySelectorAll('.btn-card').forEach(button => {
    button.addEventListener('click', (event) => {
        openPopup();
        // Define a linguagem nos botões de dificuldade
        const language = event.target.dataset.language;
        document.querySelectorAll('.btn-card-dificuldade').forEach(btn => {
            btn.dataset.language = language;
        });
        console.log(`Linguagem definida para os botões de dificuldade: ${language}`); // Depure o valor
    });
});
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtém os valores que o usuário inseriu
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');
    const container = document.getElementById('container');

    // Verifica se as senhas são iguais
    if (password !== confirmPassword) {
        message.textContent = "As senhas não coincidem!";
        message.style.color = "red";
        return;
    }

    // Simulação de envio de dados para o servidor
    const user = {
        name: name,
        email: email,
        password: password
    };

    console.log("Usuário cadastrado:", user);

    // Exibe a mensagem de sucesso e esconde o formulário
    message.textContent = "Cadastro realizado com sucesso!";
    message.style.color = "green";
    container.innerHTML = `<h2>${message.textContent}</h2>`;

    // Limpa os campos do formulário
    document.getElementById('registrationForm').reset();
    
});
