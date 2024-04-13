let filmes = [];
while(true) {
    let nome = prompt('Digite o nome do filme (ou "sair" para terminar):');
    if(nome.toLowerCase() === 'sair') break;

    let nota = prompt('Digite a nota do filme (de 1 a 5):');
    nota = parseInt(nota);

    if(nota < 1 || nota > 5) {
        alert('Nota inválida. Por favor, insira uma nota de 1 a 5.');
        continue;
    }

    filmes.push({nome: nome, nota: nota});

    filmes.sort((a, b) => b.nota - a.nota);

    let filmesString = '';
    for(let i = 0; i < filmes.length; i++) {
        filmesString += `Nome: ${filmes[i].nome}, Nota: ${filmes[i].nota}\n`;
    }
    console.log(filmesString);
}

// Implemente um algoritmo que permita aos usuários avaliar vários filmes. Para cada filme, o 
// usuário deve inserir o nome do filme e uma nota de 1 a 5. O sistema deve armazenar essas 
// avaliações e, no final, exibir uma lista dos filmes avaliados, ordenados da maior para a menor 
// nota. 