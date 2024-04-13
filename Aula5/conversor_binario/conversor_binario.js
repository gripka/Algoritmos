function decimalBinario(numDecimal) {
    var binario = '';
    while(numDecimal > 0) {
        binario = (numDecimal % 2) + binario;
        numDecimal = (numDecimal / 2) | 0;
    }
    return binario;
}

var numeroDecimal = prompt("Digite um número decimal:");
alert(decimalBinario(numeroDecimal));
