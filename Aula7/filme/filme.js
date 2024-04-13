let filmes = [];

document.getElementById("cadastrarFilme").addEventListener("click", function() {
    let nome = document.getElementById("nome").value;
    let nota = document.getElementById("nota").value;
    nota = parseInt(nota);

    if(nota < 1 || nota > 5) {
        exibirMensagem('Nota inválida. Por favor, insira uma nota de 1 a 5.');
        return;
    }

    filmes.push({nome: nome, nota: nota});

    filmes.sort((a, b) => b.nota - a.nota);

    document.getElementById("nome").value = "";
    document.getElementById("nota").value = "";

    exibirMensagem("Filme cadastrado com sucesso!");
});

document.getElementById("consultarFilmes").addEventListener("click", function() {
    const listaFilmesDiv = document.getElementById("exibirFilmes");
    listaFilmesDiv.innerHTML = "";
    
    if (filmes.length === 0) {
        exibirMensagem("Nenhum filme cadastrado ainda.");
    } else {
        listaFilmesDiv.innerHTML = "<h2>Filmes Cadastrados:</h2>";
        const ul = document.createElement("ul");
        
        for (const filme of filmes) {
            const li = document.createElement("li");
            li.textContent = `Nome: ${filme.nome}, Nota: ${filme.nota}`;
            ul.appendChild(li);
        }
        
        listaFilmesDiv.appendChild(ul);
    }
});

function exibirMensagem(mensagem) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.textContent = mensagem;
    setTimeout(() => {
        mensagemDiv.textContent = "";
    }, 3000); 
}


// Implemente um algoritmo que permita aos usuários avaliar vários filmes. Para cada filme, o 
// usuário deve inserir o nome do filme e uma nota de 1 a 5. O sistema deve armazenar essas 
// avaliações e, no final, exibir uma lista dos filmes avaliados, ordenados da maior para a menor 
// nota. 