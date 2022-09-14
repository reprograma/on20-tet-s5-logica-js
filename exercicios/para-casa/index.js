let numeroSorteado = Math.floor(Math.random() * (50 - 0 + 1));
let tentativas = 5;

while (tentativas <= 5){
    tentativas = tentativas - 1;
	palpite = prompt("Tente adivinhar o número sorteaado.");

    if (tentativas == 0){
        alert("Você atingiu o maximo de tentativas.")
		break;

	} if (palpite < numeroSorteado) {
		alert("Você errou. O número sorteado é MAIOR. Tente novamente.");
		
	}else if (palpite > numeroSorteado) {
		alert("Você errou. O número sorteado é MENOR. Tente novamente.");
		
	}else {
		alert("Parabéns você acertou. O número sorteado é" + numeroSorteado);
		break;

	}

	
}
      

