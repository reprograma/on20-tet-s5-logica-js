let nota1 = prompt("Digite a primeira nota");
let nota2 = prompt("Digite a segunda nota");
let media = (nota1 + nota2) / 2 ;

nota1 = Number(nota1);
nota2 = Number(nota2);

if (media >=7) { 
    alert("Aluno Aprovado");
} else if (media >= 5) {
    alert("Aluno em recuperação")
} else {
    alert("Aluno Reprovado")
}

console.log(nota1);
console.log(nota2);
console.log(media);
