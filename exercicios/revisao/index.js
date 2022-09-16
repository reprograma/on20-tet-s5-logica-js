let numeroSorteado = Math.floor(Math.random()*(50 - 0 + 1));

let palpite = Number(prompt("Adivinhe o número"));

let tentativas = 5;

while (numeroSorteado !== palpite && tentativas >= 0) {
  if (isNaN(palpite)) {
    alert("Por favor digite apenas números")
  } else if (numeroSorteado > palpite) {
    alert("Você errou, o número sorteado é maior")
  } else {
    alert("Você errou, o número sorteado é menor")
  }
  palpite = Number(prompt("Adivinhe o número"))
  tentativas--;
}
if (tentativas >= 0) {
  alert("Parabéns, você acertou o número")
}
