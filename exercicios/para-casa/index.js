function calcularDesconto(preco, desconto) {
  var valorDesconto = preco * (desconto / 100);
  var precoComDesconto = preco - valorDesconto;
  
  return precoComDesconto.toFixed(2);
}

var meupreco = prompt("Qual é o preço do produto?");
var meudesconto = prompt("Qual é o percentual de desconto a ser dado no produto?");

var precoComDesconto = calcularDesconto(meupreco, meudesconto);

alert("O valor do produto com desconto é de R$ " + precoComDesconto);