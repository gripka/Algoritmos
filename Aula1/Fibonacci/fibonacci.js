function sequenciaFibonacci() {
    var n = prompt("Insira a quantidade da sequência de Fibonacci a ser gerada:");
    var fib = [0, 1];
    for (var i = 2; i < n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    }
    console.log(fib.slice(0, n));
}
sequenciaFibonacci();
