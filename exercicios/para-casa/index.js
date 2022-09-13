// alert();

let numeroAleatorio = Math.floor(Math.random()*(50+1));
console.log(numeroAleatorio);

let numeroUsuario = parseInt(prompt("Digite um número de 0 a 50: "));

for(var tentativa = 1; tentativa <5;tentativa++){
    if( numeroUsuario > numeroAleatorio){
        alert("o seu número é maior");
    }
    else if( numeroUsuario < numeroAleatorio){
        alert("o seu número é menor");
    }
    if(numeroUsuario === numeroAleatorio){
        alert("Parabéns você acertou!");
        break;
    }
    numeroUsuario = parseInt(prompt("Digite novamente um número de 0 a 50: "));
} 


