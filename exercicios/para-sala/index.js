
let numeroAleatorio = Math.floor (Math.random ()*(50 - 0 + 1 ))

let meuChute = Number (prompt ("chute um número aqui!"))

while (numeroAleatorio !== meuChute){
    if (numeroAleatorio > meuChute){
        alert ("Ihh, você errou! o número sorteado é menor!")
    } else{
        alert("ihh, você errou! o número sorteado é maior!")
    }
    let meuChute = Number (prompt ("chute um número aqui!"))
}
alert("Parabéns, acertou em cheio.")