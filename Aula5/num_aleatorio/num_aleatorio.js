function gerarNumeroAleatorio() {
    let numero = "";
    for (let i = 0; i < 9; i++) {
        numero += Math.floor(Math.random() * 10);
    }
    return numero;
}

function calcularDigitoVerificador(numero) {
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += numero[i] * (10 - i);
}

let resto = soma % 11;
let digito = 11 - resto;
    if (digito >= 10) {
        digito = 0;
}

return digito;
}

function formatarNumero(numero) {
    return numero.slice(0, 3) + "." + numero.slice(3, 6) + "." + numero.slice(6, 9) + "-" + numero.slice(9, 11);
}

let numeroAleatorio = gerarNumeroAleatorio();

let digito1 = calcularDigitoVerificador(numeroAleatorio);
let digito2 = calcularDigitoVerificador(numeroAleatorio + digito1);

let numeroCompleto = numeroAleatorio + digito1 + digito2;

alert("Número: " + formatarNumero(numeroCompleto));