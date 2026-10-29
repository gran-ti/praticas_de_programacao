// Dados dos produtos: cada posição dos arrays representa um produto
// (posição 0 = produto0, posição 1 = produto1, posição 2 = produto2)
const qtd = [0, 0, 0];                     // quantidade de cada produto
const valorProduto = [45.00, 39.90, 49.90]; // valor unitário de cada produto
const valorTotal = [0, 0, 0];              // valor total de cada produto

// Formata um número no padrão da moeda brasileira: 90 -> "R$ 90,00"
function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// Recalcula e exibe a quantidade e o total de um produto
function atualizarItem(item) {
    valorTotal[item] = valorProduto[item] * qtd[item];
    document.getElementById("quantidade" + item).textContent = qtd[item];
    document.getElementById("total" + item).textContent = formatarMoeda(valorTotal[item]);
    valorCompra();
}

function adicionarItem(item) {
    qtd[item] = qtd[item] + 1;   // adiciona 1 na quantidade
    atualizarItem(item);
}

function removerItem(item) {
    if (qtd[item] > 0) {         // impede que a quantidade fique negativa
        qtd[item] = qtd[item] - 1;
        atualizarItem(item);
    }
}

// Botão "x": zera a quantidade do produto
function zerarItem(item) {
    qtd[item] = 0;
    atualizarItem(item);
}

// Soma os totais de todos os produtos e a quantidade de itens do carrinho
function valorCompra() {
    let valor = 0;
    let itens = 0;
    for (let i = 0; i < valorTotal.length; i++) {
        valor += valorTotal[i];
        itens += qtd[i];
    }
    document.getElementById("valorTotalCompra").textContent = formatarMoeda(valor);
    document.getElementById("totalItens").textContent = itens + (itens === 1 ? " item" : " itens");
}
