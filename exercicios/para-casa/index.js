let numeroSorteado = Math.floor(Math.random()*(50 - 0 +1));

let palpite = Number(prompt("Advinhe o número"))

if (numeroSorteado === palpite) { //três iguais precisa converter
    
} 


while (numeroSorteado !== palpite) { //já possui uma condição embutida
       if (numeroSorteado > palpite) {
        alert("Você errou o número sorteado é maior")
    } else {
        alert("Você errou o número sorteado é menor")
}
    palpite = Number(prompt("Advinhe o número"))
}
alert("Parabéns, você acertou o número")