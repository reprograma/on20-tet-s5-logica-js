let email = prompt("Insira seu e-mail:")
console.log(email)
let senha = prompt("Ok. Agora insira sua senha:")
console.log(senha)
emailCerto = "teste@reprograma.com"
senhaCerta = "teste123"    
while (email != emailCerto || senha != senhaCerta) {
    alert("Tente outra veeeeeeez~~~!")
 
    email = prompt("Insira seu e-mail novamente:")
    console.log(email)
    senha = prompt("Ok. Agora insira sua senha novamente:")
    console.log(senha)
} alert("Acabou!")
