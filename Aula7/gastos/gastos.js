let gastos = {};

document.getElementById("cadastrarGasto").addEventListener("click", function() {
    let tipo = document.getElementById("tipo").value;
    let valor = parseFloat(document.getElementById("valor").value);
    
    if (tipo.toLowerCase() === 'sair') {
        return;
    }

    if (gastos[tipo]) {
        gastos[tipo].push(valor);
    } else {
        gastos[tipo] = [valor];
    }

    document.getElementById("tipo").value = "";
    document.getElementById("valor").value = "";

    exibirMensagem("Gasto cadastrado com sucesso!");
});

document.getElementById("consultarGastos").addEventListener("click", function() {
    let totalGastos = [];

    let listaGastosDiv = document.getElementById("exibirGastos");
    listaGastosDiv.innerHTML = "";

    if (Object.keys(gastos).length === 0) {
        exibirMensagem("Nenhum gasto cadastrado ainda.");
    } else {
        listaGastosDiv.innerHTML = "<h2>Gastos Cadastrados:</h2>";
        const ul = document.createElement("ul");
        
        for (let tipo in gastos) {
            let total = gastos[tipo].reduce((a, b) => a + b, 0);
            let media = calcularMedia(gastos[tipo]);
            totalGastos[tipo] = {total: total, media: media};

            const li = document.createElement("li");
            li.textContent = `Tipo de gasto: ${tipo}, Total gasto: ${totalGastos[tipo].total}, Gasto médio: ${totalGastos[tipo].media}`;
            ul.appendChild(li);
        }
        
        listaGastosDiv.appendChild(ul);
    }
});

function calcularMedia(array) {
    let soma = array.reduce((a, b) => a + b, 0);
    return soma / array.length;
}

function exibirMensagem(mensagem) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.textContent = mensagem;
    setTimeout(() => {
        mensagemDiv.textContent = "";
    }, 3000); 
}


// Desenvolva um aplica vo que auxilie os usuários a gerenciar seus gastos pessoais. O usuário 
// deve inserir vários gastos, especificando o tipo de gasto (por exemplo, alimentação, transporte, 
// lazer) e o valor. O sistema deve fornecer um resumo financeiro, mostrando o total gasto e o 
// gasto médio por categoria