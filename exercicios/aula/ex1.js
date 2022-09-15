let nota1 = prompt("Digite a primeira nota");
let nota2 = prompt("Digite a segunda nota");

nota1 = Number(nota1); // o comando number tenta transformar o que estiver no parentese em numero
nota2 = Number(nota2);

let media = (nota1 + nota2) / 2;
console.log(nota1);
console.log(nota2);
console.log(media);

if(media >= 7) {
    alert("Aluno aprovado");
} else if (media >= 5 && media < 7){
    alert("Aluno em recuperação")
} else{
    alert("Aluno reprovado")
}

//String -
//Number- 
//Boolean - verdadeiro ou falso
//Null - nada ou vazio
//Undefined
    

