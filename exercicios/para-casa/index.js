let emailConst = "teste@reprograma.com"
let emailDig = prompt ("Digite aqui o e-mail")

while (emailConst != emailDig) {
    emailDig = prompt ("Erro, digite e-mail correto")
}

let senhaConst = "123"
let senhaDig = Number(prompt("Digite a senha"));

while (senhaConst != senhaDig) {
    senhaDig = prompt ("Erro, digite a senha correta")
}
alert ("Logado com Sucesso")
