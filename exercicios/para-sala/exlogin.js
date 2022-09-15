let email = prompt ("Digite seu e-mail");
console.log (email)
let senha = prompt ("Digite sua senha");
console.log (senha) 

 if (email == "teste@reprograma.com" && senha == "teste123") {
    alert ("acesso a página permitido");
    console.log

} else {
   while (email != "teste@reprograma.com" || senha != "teste123") {
    alert ("Ops! Você digitou algo errado. Digite email e senha novamente para acesso.")
    console.log
    email = prompt ("Digite seu e-mail navamente")
    console.log
    senha = prompt ("Digite sua senha novamente")
    alert ("acesso a página permitido <3")
    }
}

