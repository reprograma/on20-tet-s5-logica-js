let numeroSorteado = 38;

let palpite = Number(prompt("Adivinhe o número"))

while(numeroSorteado !== palpite){
    if(numeroSorteado > papite){
        alert("Você errou, o numero sorteado é maior")
    } else{
        alert("Você errou, o numero sorteado é menor")
    }
    palpite = Number(prompt("Adivinhe o número"))
}

alert("Parabens, você acertou o número")