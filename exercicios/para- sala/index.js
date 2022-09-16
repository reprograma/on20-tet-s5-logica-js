
let numeroSorteado = Math.floor(Math.random() * (50 - 0 + 1));
console.log(numeroSorteado);
let tentativas = 1;
alert("Olá, vamos jogar? Você terá 5 chances para acertar o número, aperte Ok para começar ")

while (tentativas <=5)  {
	console.log(tentativas);
	let palpite = Number(prompt("Digite um número entre 1 e 50"));
	
	if (isNaN(palpite)) {
		alert("Por favor, coloque apenas número")		
	}

	else if (palpite != numeroSorteado && palpite > numeroSorteado) {
	alert("Palpite errado o número é menor. tentativa número " + (tentativas++) );
	}
	
	else if(palpite != numeroSorteado && palpite < numeroSorteado) {
	alert ("Palpite errado o número é maior. tentativa número " + (tentativas++) );
	}

	else {
	alert("Parabéns você acertou. O número sorteado é:  " + numeroSorteado);
	break;
	}

}