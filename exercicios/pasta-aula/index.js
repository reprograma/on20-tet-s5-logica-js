let nota1 = prompt("nota1");
let nota2 = prompt("nota2");

nota1 =Number(nota1); //o comando number tenta transformar o que estiver no parenteses em numero
nota2 =Number(nota2);

let media = (nota1 + nota2 )  /2;
console.log(media)
console.log(media)
console.log(media)

if (media >= 7) {
alert("Aluno aprovado")
} else if (media >= 5 ){
alert("Aluno em recuperação")
} else {
alert("Aluno reprovado");
}




