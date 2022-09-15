let emailLogin = ("teste@reprograma.com")
let senhaLogin = ("teste123")

let perguntaEmail = String(prompt("Email"))
let perguntaSenha = String(prompt("Senha"))

while (emailLogin !== perguntaEmail || senhaLogin !== perguntaSenha) {
    if (perguntaEmail !== emailLogin) {
       alert("Email incorreto.")
    } 
    if (perguntaSenha !== senhaLogin) {
        alert("Senha Incorreta")
    }
    
   perguntaEmail = String(prompt("Email"))
   perguntaSenha = String(prompt("Senha"))
}

alert("Login realizado com sucesso!")