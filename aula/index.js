let valorReais =  prompt("Digite o valor em reais a ser convertido");

console.log(valorReais)

const taxaDeCambio  = 5.30;

let resultado = valorReais / taxaDeCambio;
resultado = resultado.toFixed(2); //toFixed configura o valor decimal para duas casas após a vírgula//

alert("O valor convertido para dólares é de " + resultado);



let idade = 26

if (idade > 18) {
    console.log("Você é adulto")
} else if(idade > 12) {
    console.log("Você é adolescente")
} else {
    console.log("Você é criança")
}
