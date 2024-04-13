let valorConta = parseFloat(prompt("Qual é o valor total da conta?"));
let qualidadeServico = parseInt(prompt("Como você avalia o serviço? (1-Excelente, 2-Bom, 3-Médio, 4-Ruim)"));

let mapeamentoGorjetas = {
    1: 0.20,
    2: 0.15,
    3: 0.10,
    4: 0.05
};

let percentualGorjeta = mapeamentoGorjetas[qualidadeServico];

if (percentualGorjeta === undefined) {
    alert("Por favor, insira um número válido para a qualidade do serviço.");
} else {
    let valorGorjeta = valorConta * percentualGorjeta;
    let valorTotal = valorConta + valorGorjeta;

    alert("O valor da gorjeta é: " + valorGorjeta.toFixed(2) + "\nO valor total a ser pago é: " + valorTotal.toFixed(2));
}
