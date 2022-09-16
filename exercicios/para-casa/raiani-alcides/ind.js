let emailLogin = ("teste@reprograma.com")
let senhaLogin = ("teste123")

let perguntaEmail = (prompt("Email"))
let perguntaSenha = (prompt("Senha"))

while (emailLogin !== perguntaEmail || senhaLogin !== perguntaSenha) {
    if (perguntaEmail !== emailLogin) {
       alert("Email incorreto.")
    } 
    if (perguntaSenha !== senhaLogin) {
        alert("Senha Incorreta")
    }
    
   perguntaEmail = (prompt("Email"))
   perguntaSenha = (prompt("Senha"))
}

alert("Login realizado com sucesso!")