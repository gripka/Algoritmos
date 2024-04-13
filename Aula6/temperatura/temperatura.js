let temperaturas = [];
let contadorDias = 0;

for(let i = 0; i <= 7; i++) {
    let mensagem = "Insira a temperatura máxima do dia " + i;
    let temperatura = parseFloat(prompt(mensagem));
    temperaturas.push(temperatura);
    contadorDias++;
}

let maxTemp = temperaturas[0];
let minTemp = temperaturas[0];
let somaTemperaturas = 0;

for(let i = 0; i < contadorDias; i++) {
    let tempAtual = temperaturas[i];
    if(tempAtual > maxTemp) {
        maxTemp = tempAtual;
    }
    if(tempAtual < minTemp) {
        minTemp = tempAtual;
    }
    somaTemperaturas += tempAtual;
}

let mediaTemperaturas = somaTemperaturas / temperaturas.length;

let mensagem = "Média: " + mediaTemperaturas.toFixed(2) + "\nMáxima: " + maxTemp + "\nMínima: " + minTemp;
alert(mensagem);
console.log(mensagem);

// Crie um programa para monitorar as temperaturas diárias de uma semana. O usuário deve 
// inserir a temperatura máxima para cada dia. No final, o sistema deve exibir a temperatura média 
// da semana, a maior temperatura e a menor temperatura registradas.