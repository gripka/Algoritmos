let P = parseFloat(prompt("Insira o peso dos peixes:"));

let pesoMaximo = 50;

// Variáveis de Excesso e Multa
let E = 0;
let M = 0;

if (P > pesoMaximo) {
    E = P - pesoMaximo;
    M = E * 4;
}

console.log("Excesso: " + E + "kg, Multa: R$" + M);
alert("Excesso: " + E + "kg, Multa: R$" + M);