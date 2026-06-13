
// 1. MODO NOTURNO (Dark Mode)
const btnDarkMode = document.getElementById('btn-dark-mode');

// Ao carregar a página, verifica se o dark mode estava ativo
if (localStorage.getItem('darkMode') === 'ativo') {
    document.body.classList.add('dark-mode');
}

if (btnDarkMode) {
    btnDarkMode.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');

        // Salva ou remove a preferência no localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'ativo');
        } else {
            localStorage.removeItem('darkMode');
        }
    });
}

// 2. ACESSIBILIDADE (Aumentar e Diminuir Fonte)
const btnAumentar = document.getElementById('btn-aumentar');
const btnDiminuir = document.getElementById('btn-diminuir');

// O V0 definiu a fonte inicial como 16px
let tamanhoFonteAtual = 16; 

if (btnAumentar && btnDiminuir) {
    btnAumentar.addEventListener('click', function() {
        tamanhoFonteAtual = tamanhoFonteAtual + 2; // Aumenta 2px
        document.body.style.fontSize = tamanhoFonteAtual + 'px';
    });

    btnDiminuir.addEventListener('click', function() {
        tamanhoFonteAtual = tamanhoFonteAtual - 2; // Diminui 2px
        document.body.style.fontSize = tamanhoFonteAtual + 'px';
    });
}

// 3. VALIDAÇÃO DO FORMULÁRIO DE CONTATO
const formContato = document.getElementById('formContato');

// O IF verifica se o formulário existe na página atual (para não dar erro nas outras páginas)
if (formContato) {
    formContato.addEventListener('submit', function(evento) {
        // Impede a página de recarregar imediatamente
        evento.preventDefault(); 

        // Pega os valores digitados nos campos
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        // Verificação simples: se algum campo estiver vazio
        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos do formulário antes de enviar.');
        } else {
            alert('Mensagem validada e enviada com sucesso! Obrigado, ' + nome + '.');
            formContato.reset(); // Limpa os campos após o envio
        }
    });
}