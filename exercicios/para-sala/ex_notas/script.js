

let nota1 = Number(prompt("Digite a nota 1: "));
let nota2 = Number(prompt("Digite a nota 2: "));

let media = (nota1 + nota2) / 2;

console.log(media);

if (media>=7){
    alert(`Média: ${media} - Aluno aprovado, parabéns!`);
} else if (media >=5){
    alert(`Média: ${media} - Aluno em recuperação, ainda há chance!`);
}else {
    alert(`Média: ${media} - Aluno reprovado, até o próximo ano!`);
}

