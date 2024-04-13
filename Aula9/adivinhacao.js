let numeroAlvo;
let tentativas;
let palpites;
let jogoAtivo;

window.onload = function() {
    document.getElementById('fazerPalpite').addEventListener('click', jogar);
    document.getElementById('reiniciarJogo').addEventListener('click', iniciarJogo);
    document.getElementById('nivel').addEventListener('change', iniciarJogo);
    iniciarJogo();
}

function iniciarJogo() {
    numeroAlvo = Math.floor(Math.random() * 100) + 1;
    palpites = [];
    jogoAtivo = true;
    definirTentativas();
    document.getElementById('mensagem').textContent = "O jogo começou! Você tem " + tentativas + " tentativas para adivinhar o número.";
}

function definirTentativas() {
    let nivel = document.getElementById('nivel').value;
    switch(nivel) {
        case '1':
            tentativas = 15;
            break;
        case '2':
            tentativas = 5;
            break;
        case '3':
            tentativas = 3;
            break;
        default:
            tentativas = 5;
    }
}

function jogar() {
    if (!jogoAtivo) {
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

    if (numero === numeroAlvo) {
        document.getElementById('mensagem').textContent = `Parabéns! Você acertou o número em ${palpites.length} tentativas!`;
        jogoAtivo = false;
    } else if (tentativas === 0) {
        document.getElementById('mensagem').textContent = `Você esgotou todas as tentativas! O número alvo era ${numeroAlvo}. Clique em 'Reiniciar Jogo' para jogar novamente.`;
        jogoAtivo = false;
    } else {
        let dica = numero < numeroAlvo ? "maior" : "menor";
        document.getElementById('mensagem').textContent = `O número alvo é ${dica} que ${numero}. Você tem ${tentativas} tentativas restantes.`;
    }
}
