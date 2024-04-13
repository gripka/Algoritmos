let temperaturas = [];

document.getElementById("cadastrarTemperatura").addEventListener("click", function() {
    if (temperaturas.length >= 7) {
        exibirMensagem("Você já cadastrou as temperaturas para todos os dias da semana.");
        return;
    }

    let temperatura = parseFloat(document.getElementById("temperatura").value);
    temperaturas.push(temperatura);

    document.getElementById("temperatura").value = "";

    exibirMensagem("Temperatura do dia " + (temperaturas.length) + " cadastrada com sucesso!");
});

document.getElementById("consultarTemperaturas").addEventListener("click", function() {
    let maxTemp = temperaturas[0];
    let minTemp = temperaturas[0];
    let somaTemperaturas = 0;

    for(let i = 0; i < temperaturas.length; i++) {
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
    exibirMensagem(mensagem);
});

function exibirMensagem(mensagem) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.textContent = mensagem;
    setTimeout(() => {
        mensagemDiv.textContent = "";
    }, 30000); 
}




// Crie um programa para monitorar as temperaturas diárias de uma semana. O usuário deve 
// inserir a temperatura máxima para cada dia. No final, o sistema deve exibir a temperatura média 
// da semana, a maior temperatura e a menor temperatura registradas.