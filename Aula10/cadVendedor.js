const vendedores = JSON.parse(localStorage.getItem('vendedores')) || [];

document.getElementById("cadastrarVendedor").addEventListener("click", function() {
    const nome = document.getElementById("nome").value;
    const matricula = document.getElementById("matricula").value;
    
    if (nome === "" || matricula === "") {
        exibirMensagem("Erro ao realizar cadastro! Por favor, preencha todos os campos!");
        return;
    }

    const vendedor = {
        nome: nome,
        matricula: matricula,
    };
    
    vendedores.push(vendedor);
    localStorage.setItem('vendedores', JSON.stringify(vendedores));
    
    document.getElementById("nome").value = "";
    document.getElementById("matricula").value = "";
    
    exibirMensagem("Vendedor cadastrado com sucesso!");
});

document.getElementById("consultarVendedores").addEventListener("click", function() {
    const listaVendedoresDiv = document.getElementById("exibirVendedores");
    listaVendedoresDiv.innerHTML = "";
    
    if (vendedores.length === 0) {
        exibirMensagem("Nenhum vendedor cadastrado.");
    } else {
        listaVendedoresDiv.innerHTML = "<h2>Vendedores Cadastrados:</h2>";
        const ul = document.createElement("ul");
        
        for (const vendedor of vendedores) {
            const li = document.createElement("li");
            li.textContent = `Nome: ${vendedor.nome}, Matrícula: ${vendedor.matricula}`;
            ul.appendChild(li);
        }
        
        listaVendedoresDiv.appendChild(ul);
    }
});

function exibirMensagem(mensagem) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = mensagem;
    setTimeout(() => {
        mensagemDiv.textContent = "";
    }, 500); 
}
