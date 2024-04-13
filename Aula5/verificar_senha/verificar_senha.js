
let senha = prompt("Digite a senha:");

function verificarForcaSenha(senha) {
    let criterios = 0;
    
    if (senha.length >= 8) criterios++;
    if (/[A-Z]/.test(senha)) criterios++;
    if (/[a-z]/.test(senha)) criterios++;
    if (/[0-9]/.test(senha)) criterios++;
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(senha)) criterios++;
    
        if (criterios === 5) {
            return "Força: Alta";
        } else if (criterios >= 3) {
            return "Força: Média";
        } else {
            let falta = [];
            if (senha.length < 8) falta.push("pelo menos 8 caracteres");
            if (!/[A-Z]/.test(senha)) falta.push("pelo menos uma letra maiúscula");
            if (!/[a-z]/.test(senha)) falta.push("pelo menos uma letra minúscula");
            if (!/[0-9]/.test(senha)) falta.push("pelo menos um número");
            if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(senha)) falta.push("pelo menos um caractere especial");

            return "Fraca - Faltando: " + falta.join(", ");
    }
}

let resultado;

while (true) {
    resultado = verificarForcaSenha(senha);
    alert("Força da senha: " + resultado);
    if (resultado === "Força: Alta") {
        break;
    }
    senha = prompt("Digite a senha novamente:");
}