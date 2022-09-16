let numeroSorteado = 38;

let palpite = Number(prompt("Adivinhe o número"))


if(numeroSorteado === palpite){
    alert("Parabéns, você acertou o número");
    }
    while (numeroSorteado !== palpite){
     if (numeroSorteado > palpite) {
        alert ("Você errou,o número sorteado é maior")
    }else {
    alert("Você errou, o número sorteado é menor")
    }
    palpite = Number(prompt("Adivinhe o número"))
}
 alert("Parabéns, você acertou o número");

