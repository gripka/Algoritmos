let atividades = [];

while (true) {
    let esporte = prompt("Digite o tipo de atividade ou 'sair' para terminar:");
        if (esporte.toLowerCase() === 'sair') {
            break;
    }

    let duracao = parseInt(prompt("Digite a duração da atividade em minutos:"));
    
    if (esporte in atividades) {
        atividades[esporte] += duracao;
    } else {
        atividades[esporte] = duracao;
    }
}

//tempo
let total = 0;
let contagem = 0;

for (let esporte in atividades) {
    total += atividades[esporte];
    contagem++;
}

let media = total / contagem;

let mensagemTotal = "Tempo total gasto em atividades físicas: " + total + " minutos";
let mensagemMedia = "Tempo médio por atividade: " + media + " minutos";

alert(mensagemTotal +"\n" + mensagemMedia ); console.log(mensagemTotal); console.log(mensagemMedia)


//Elabore um sistema que ajude os usuários a rastrear suas a vidades fisicas ao longo da semana. 
// Para cada a atividade, o usuário deve inserir o tempo de atividade (por exemplo, corrida, ciclismo, natação) 
// e a duração em minutos. O sistema deve calcular e exibir o tempo total gasto em atividades fisicas 
// e o tempo médio por a atividade.