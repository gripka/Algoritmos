function resolverBhaskara(a, b, c) {
    let delta = b * b - 4 * a * c;

    if (delta < 0) {
        return "A equação não possui raízes reais.";
    } else if (delta === 0) {
        let raizUnica = -b / (2 * a);
        return "A equação possui uma raiz real: " + raizUnica;
    } else {
        let raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        let raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
        return "A equação possui duas raízes reais: " + raiz1 + " e " + raiz2;
    }
}

let a = parseFloat(prompt("Digite o valor de a:"));
let b = parseFloat(prompt("Digite o valor de b:"));
let c = parseFloat(prompt("Digite o valor de c:"));


let resultado = resolverBhaskara(a, b, c);
console.log(resultado);

