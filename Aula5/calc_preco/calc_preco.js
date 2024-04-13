function classificarProdutos(preco) {
    if (preco > 1000) {
        return 'A';
    } else if (preco >= 501 && preco <= 1000) {
        return 'B';
    } else if (preco >= 101 && preco <= 500) {
        return 'C';
    } else if (preco >= 51 && preco <= 100) {
        return 'D';
    } else if (preco <= 50) {
        return 'E';
    }
}


function calcularDesconto(preco, categoria) {
    let desconto;
    switch (categoria) {
        case 'A':
            desconto = 0.30;
            break;
        case 'B':
            desconto = 0.25;
            break;
        case 'C':
            desconto = 0.15;
            break;
        case 'D':
            desconto = 0.10;
            break;
        case 'E':
            desconto = 0.05;
            break;
    }
    return preco - (preco * desconto);
}

function calcularPrecos() {
    let numProdutos = prompt("Digite o número total de produtos que deseja classificar:");
    let produtos = [];
    let resultados = "\nCategorias dos Produtos:\n";

    for (let i = 1; i <= numProdutos; i++) {
        let preco = parseFloat(prompt(`Digite o preço do produto ${i}: R$`));
        let categoria = classificarProdutos(preco);
        let precoDesconto = calcularDesconto(preco, categoria);
        produtos.push({preco: preco, categoria:categoria, precoDesconto:precoDesconto});
        resultados += `Produto ${i}: Preço R$ ${preco.toFixed(2)} - Preço com desconto  ${precoDesconto.toFixed(2)} - ${categoria}\n`;
    }

    alert(resultados);
}

calcularPrecos();
