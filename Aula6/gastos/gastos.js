let gastos = [];

while (true) {
    let tipo = prompt("Insira a categoria do gasto, ou 'sair' para terminar:");
        if (tipo.toLowerCase() === 'sair') {
            break;
        }

        let valor = parseFloat(prompt(`Insira o valor do gasto para '${tipo}':`));

    if (gastos[tipo]) {
        gastos[tipo].push(valor);
    } else {
        gastos[tipo] = [valor];
    }
}

function calcularMedia(array) {
    let soma = array.reduce((a, b) => a + b, 0);
    return soma / array.length;
}

let totalGastos = [];

for (let tipo in gastos) {
    let total = gastos[tipo].reduce((a, b) => a + b, 0);
    let media = calcularMedia(gastos[tipo]);
    totalGastos[tipo] = {total: total, media: media};
}

for (let tipo in totalGastos) {
    let mensagem = `Tipo de gasto: ${tipo}\nTotal gasto: ${totalGastos[tipo].total}\nGasto médio: ${totalGastos[tipo].media}`;
    alert(mensagem);
    console.log(mensagem);
}

// Desenvolva um aplica vo que auxilie os usuários a gerenciar seus gastos pessoais. O usuário 
// deve inserir vários gastos, especificando o tipo de gasto (por exemplo, alimentação, transporte, 
// lazer) e o valor. O sistema deve fornecer um resumo financeiro, mostrando o total gasto e o 
// gasto médio por categoria