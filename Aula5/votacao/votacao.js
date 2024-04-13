//Implemente um simulador de votação para três candidatos e, após a votação, exiba o vencedor. 
var candidato1 = 0;
var candidato2 = 0;
var candidato3 = 0;

var numero_eleitores = parseInt(prompt("Digite o número de eleitores: "));

for (var i = 0; i < numero_eleitores; i++) {
    var voto = prompt("Escolha entre o Candidato 1, Candidato 2 e Candidato 3");

    switch (voto) {
        case 'candidato_1': case "1":
            candidato1++;
            break;
        case 'candidato_2': case "2":
            candidato2++;
            break;
        case 'candidato_3': case "3":
            candidato3++;
            break;
        default:
            alert("Voto nulo.");
    }
}

let vencedor = 0;
if (candidato1 > candidato2 && candidato1 > candidato3) {
    vencedor = 1;
} else if (candidato2 > candidato1 && candidato2 > candidato3) {
    vencedor = 2;
} else if (candidato3 > candidato1 && candidato3 > candidato2) {
    vencedor = 3;
}

alert("Número de votos do candidato 1: " + candidato1 + 
    "\nNúmero de votos do candidato 2: " + candidato2 + 
    "\nNúmero de votos do candidato 3: " + candidato3 +
    "\nO vencedor é: " + vencedor);