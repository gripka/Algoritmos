let atividades = {};

document.getElementById("cadastrarAtividade").addEventListener("click", function() {
    let esporte = document.getElementById("esporte").value;
    let duracao = parseInt(document.getElementById("duracao").value);
    
    if (esporte.toLowerCase() === 'sair') {
        return;
    }

    if (esporte in atividades) {
        atividades[esporte] += duracao;
    } else {
        atividades[esporte] = duracao;
    }

    document.getElementById("esporte").value = "";
    document.getElementById("duracao").value = "";

    exibirMensagem("Atividade cadastrada com sucesso!");
});

document.getElementById("consultarAtividades").addEventListener("click", function() {
    let total = 0;
    let contagem = 0;

    let listaAtividadesDiv = document.getElementById("exibirAtividades");
    listaAtividadesDiv.innerHTML = "";

    if (Object.keys(atividades).length === 0) {
        exibirMensagem("Nenhuma atividade cadastrada ainda.");
    } else {
        listaAtividadesDiv.innerHTML = "<h2>Atividades Cadastradas:</h2>";
        const ul = document.createElement("ul");
        
        for (let esporte in atividades) {
            const li = document.createElement("li");
            li.textContent = `Atividade: ${esporte}, Duração: ${atividades[esporte]} minutos`;
            ul.appendChild(li);

            total += atividades[esporte];
            contagem++;
        }
        
        listaAtividadesDiv.appendChild(ul);

        let media = total / contagem;

        let mensagemTotal = "Tempo total gasto em atividades físicas: " + total + " minutos";
        let mensagemMedia = "Tempo médio por atividade: " + media + " minutos";

        exibirMensagem(mensagemTotal +"\n" + mensagemMedia);
    }
});

function exibirMensagem(mensagem) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.textContent = mensagem;
    setTimeout(() => {
        mensagemDiv.textContent = "";
    }, 30000); 
}



//Elabore um sistema que ajude os usuários a rastrear suas a vidades fisicas ao longo da semana. 
// Para cada a atividade, o usuário deve inserir o tempo de atividade (por exemplo, corrida, ciclismo, natação) 
// e a duração em minutos. O sistema deve calcular e exibir o tempo total gasto em atividades fisicas 
// e o tempo médio por a atividade.