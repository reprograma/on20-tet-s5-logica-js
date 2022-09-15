let nota1 = prompt("digite a primeira nota");
let nota2 = prompt("digite a segunta  nota");

nota1 = Number(nota1); // o comando Number tenta transformar o que estiver no parenteses em números
nota2 = Number(nota2);

let media = (nota1 + nota2) / 2;

if (media >= 7) {
    alert("Aluno aprovado");
} else if (media >= 5) {
    alert("Aluno em recuperação")
} else {
    alert ("Aluno reprovado")
}



let numero = 0;
while (numero < 10){console.log(numero);
    numero++;
}
