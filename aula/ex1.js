let nota1 = prompt("Primeira Nota");
let nota2 = prompt("Segunda Nota");

nota1 = Number(nota1); // o comando number tenta transformar o que estiver no parenteses em número
nota2 = Number(nota2);

let media = (nota1 + nota2) / 2;
console.log(nota1 + nota2);
console.log(media);

if (media >= 7) {
    alert("Aprovado");
} else if (media >= 5) {
    alert("Recuperação")
} else {
    alert("Reprovado")
}
