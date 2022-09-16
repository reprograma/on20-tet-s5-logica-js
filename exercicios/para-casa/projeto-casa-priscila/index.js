let numeroAleatorio = Math.floor(Math.random()*(50 - 0 +1));

for (let contador = 1; contador<5; contador++) {
    let numeroDigitado = prompt("Digite um número de 0 à 50 (tentativa " + contador + "):");

    if(numeroAleatorio == numeroDigitado){
        if (isNaN(numeroDigitado))
        alert("Parabéns, você acertou o número"); 
        break;
    } 

    if(numeroAleatorio < numeroDigitado) {
        alert("Dica: O número aleatório é menor");
    } 

    if(numeroAleatorio > numeroDigitado) {
        alert("Dica: O número aleatório é maior");
    }
}

alert("O número aleatório é: " + numeroAleatorio);




