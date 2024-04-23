let numeroSecreto;
let tentativas;
let palpites;

window.onload = function() {
    document.getElementById('fazerPalpite').addEventListener('click', jogar);
    document.getElementById('reiniciarJogo').addEventListener('click', iniciarJogo);
    document.getElementById('nivel').addEventListener('change', iniciarJogo);
    iniciarJogo();
}

function iniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    palpites = [];
    definirTentativas();
    console.log(numeroSecreto)
    document.getElementById('mensagem').textContent = "O jogo começou! Você tem " + tentativas + " tentativas para adivinhar o número.";
}

function definirTentativas() {
    let nivel = document.getElementById('nivel').value;
    switch(nivel) {
        case '1':
            tentativas = 100;
            break;
        case '2':
            tentativas = 5;
            break;
        case '3':
            tentativas = 3;
            break;
    }
}

function jogar() {
    if (tentativas <= 0) {
        return;
    }

    let numero = document.getElementById('palpite').value;
    numero = parseInt(numero, 10);

    if (numero < 1 || numero > 100) {
        document.getElementById('mensagem').textContent = "Por favor, insira um número válido entre 1 e 100.";
        return;
    }

    if (palpites.includes(numero)) {
        document.getElementById('mensagem').textContent = "Você já tentou esse número. Tente um número diferente.";
        return;
    }

    palpites.push(numero);
    tentativas--;

    if (numero === numeroSecreto) {
        document.getElementById('mensagem').textContent = `Parabéns! Você acertou o número em ${palpites.length} tentativas!`;
        tentativas = 0;
    } else if (tentativas === 0) {
        document.getElementById('mensagem').textContent = `Suas tentativas acabaram! O número secreto era ${numeroSecreto}. Clique em 'Reiniciar Jogo' para jogar novamente.`;
    } else {
        let dica = numero < numeroSecreto ? "maior" : "menor";
        document.getElementById('mensagem').textContent = `O número secreto é ${dica} que ${numero}. Você tem ${tentativas} tentativas restantes.`;
    }
}

// Numero aleatorio de 1 até 100
// 5 tentativas para acertar
// Cada tentativa incorreta, o jogo fornece uma dica indicando se o número alvo é maior ou menor que o palpite dado

// Certifique-se de testar todas as funcionalidades: inserção de valor, verificação de acerto, recebimento de dicas, esgotamento de tentativas e reinício do jogo. 