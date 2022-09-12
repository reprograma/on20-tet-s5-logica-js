let nota1 = prompt("Digite a primeira nota");
let nota2 = prompt("Digite a segunda nota");

nota1 = Number(nota1); // o comando Number tenta transformar o que estiver no parenteses em número
nota2 = Number(nota2);

let media = (nota1 + nota2) / 2;

if (media >= 7) {
  alert("Aluno aprovado");
} else if (media >= 5) {
  alert("Aluno em recuperação")
} else {
  alert("Aluno reprovado")
}
