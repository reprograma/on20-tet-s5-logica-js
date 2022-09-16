let valorReais = prompt ("Digite o valor em reais a ser convertido");

console.log(valorReais);

const taxaDeCambio = 5.30;

let resultado = valorReais / taxaDeCambio;
resultado = resultado.toFixed(2); // toFixed configura o valor decimal para duas casas apos a virgula

alert("O valor convetido para dolares é de " + resultado);