

let numeroSorteado = Math.floor(Math.random()*(50 - 0 +1));

let palpite = Number(prompt("Adivinhe o número"))

while (numeroSorteado !== palpite) {
  if (numeroSorteado > palpite) {
    alert("Você errou, o número sorteado é maior")
  } else {
    alert("Você errou, o número sorteado é menor")
  }
  palpite = Number(prompt("Adivinhe o número"))
}
alert("Parabéns, você acertou o número")
