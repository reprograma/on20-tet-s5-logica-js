let valorReais=prompt("Digite o valor em reais a ser convertido");

console.log(valorReais)

const taxaDeCambio = 5.30;

let resultado = (valorReais / taxaDeCambio).toFixed (2); // tofixed configura o valor decimal para duas casas após a vírgula


alert(" O valor convertido para dólares é de " + resultado);

