// Pedindo os dados
let produto = prompt("Nome do produto:");
let preco = parseFloat(prompt("Preço do produto:"));
let desconto = parseFloat(prompt("Desconto em %:"));

// Fazendo as contas
let valorDesconto = preco * desconto / 100;
let precoFinal = preco - valorDesconto;

// Mostrando o resultado
console.log("Produto: " + produto);
console.log("Preço original: R$ " + preco.toFixed(2));
console.log("Valor do desconto: R$ " + valorDesconto.toFixed(2));
console.log("Preço final: R$ " + precoFinal.toFixed(2));

alert(
    "Produto: " + produto +
    "Preço original: R$ " + preco.toFixed(2) +
    "Desconto: R$ " + valorDesconto.toFixed(2) +
    "Preço final: R$ " + precoFinal.toFixed(2)
);