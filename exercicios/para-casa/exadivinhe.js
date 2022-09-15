let numeroSorteado = Math.floor(Math.random()*(50 - 0 +1))
console.log

let palpite = Number (prompt ("Adivinhe o número")) 
console.log

while (numeroSorteado !== palpite) {
    if (numeroSorteado > palpite ) {
    alert ("Você errou! O número sorteado é maior")
    console.log
    } else {
    alert ("Você errou! O número sorteado é menor")
    console.log
    }
    palpite = Number (prompt ("Adivinhe o número")) 
    console.log
} 

alert ("Você acertou! Parabéns!")
console.log
    



    
