let nota1 = prompt("digite primeira nota");
let nota2 = prompt("digite segunda nota");

nota1 = Number(nota1);
nota2 = Number(nota2);

let media = (nota1 + nota2) / 2;
console.log (nota1 + nota2)
console.log(media)

if (media >= 7){
    alert("Aluno aprovado")
}else if(media >= 5){
    alert("Aluno em recuperação")
}else{
    alert("aluno reprovado")
}