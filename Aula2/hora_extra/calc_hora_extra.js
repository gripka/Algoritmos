let C = prompt("Insira o código do operário:");
let N = parseFloat(prompt("Insira o número de horas trabalhadas:"));

let horasMaximas = 50;

// Variáveis de salário e excesso de pagamento
let salario = N * 10;
let E = 0;

// Verifica se há horas extras
if (N > horasMaximas) {
    let horasExtras = N - horasMaximas;
    E = horasExtras * 20;
    salario += E;
}
console.log("Salário Total: R$" + salario + ", Salário Excedente: R$" + E);
alert("Salário Total: R$" + salario + ", Salário Excedente: R$" + E);