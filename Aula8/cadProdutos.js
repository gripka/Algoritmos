const produtos = []; 

document.getElementById("cadastrarProduto").addEventListener("click", function() {
    const nomeProduto = document.getElementById("nomeProduto").value;
    const valorProduto = document.getElementById("valorProduto").value;
    const categoriaProduto = document.getElementById("categoriaProduto").value;
    
    if (nomeProduto === ""|| valorProduto === "" || categoriaProduto === "") {
    exibirMensagem ("Erro ao realizar cadastro!!! Por favor, preencha todos os campos!")
    return;
}

    const produto = {
        nome: nomeProduto,
        valor: valorProduto,
        categoria: categoriaProduto,
    };
    
    produtos.push(produto); 
    
    document.getElementById("nomeProduto").value = "";
    document.getElementById("valorProduto").value = "";
    document.getElementById("categoriaProduto").value = "";
    
    exibirMensagem("Produto cadastrado com sucesso!");
});

document.getElementById("consultarProdutos").addEventListener("click", function() {
    const listaProdutosDiv = document.getElementById("exibirProdutos");
    listaProdutosDiv.innerHTML = "";
    
    if (produtos.length === 0) {
        exibirMensagem("Nenhum produto cadastrado.");
    } else {
        listaProdutosDiv.innerHTML = "<h2>Produtos Cadastrados:</h2>";
        const ul = document.createElement("ul");
        
        for (const produto of produtos) {
            const li = document.createElement("li");
            li.textContent = `Nome: ${produto.nome}, Valor: ${produto.valor}, Categoria: ${produto.categoria}`;
            ul.appendChild(li);
        }
        
        listaProdutosDiv.appendChild(ul);
    }
});

document.getElementById("consultarPorCategoria").addEventListener("click", function() {
    const categoriaConsulta = document.getElementById("categoriaConsulta").value;
    const produtosCategoria = produtos.filter(produto => produto.categoria === categoriaConsulta);
    
    const listaProdutosDiv = document.getElementById("exibirProdutos");
    listaProdutosDiv.innerHTML = "";
    
    if (produtosCategoria.length === 0) {
        exibirMensagem(`Nenhum produto cadastrado na categoria ${categoriaConsulta}.`);
    } else {
        listaProdutosDiv.innerHTML = `<h2>Produtos Cadastrados na Categoria ${categoriaConsulta}:</h2>`;
        const ul = document.createElement("ul");
        
        for (const produto of produtosCategoria) {
            const li = document.createElement("li");
            li.textContent = `Nome: ${produto.nome}, Valor: ${produto.valor}, Categoria: ${produto.categoria}`;
            ul.appendChild(li);
        }
        
        listaProdutosDiv.appendChild(ul);
    }
});


function exibirMensagem(mensagem) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = mensagem;
    setTimeout(() => {
        mensagemDiv.textContent = "";
    }, 500); 
}