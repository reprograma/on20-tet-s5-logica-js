let emailDigitado = prompt("Digite seu e-mail");
let senhaDigitada = prompt("Digite sua senha");

const emailCorreto = "teste@reprograma.com";
const senhaCorreta = "teste123";


while (emailDigitado !== emailCorreto || senhaDigitada !== senhaCorreta) {
  alert("Login inválido. Digite seus dados novamente")
  emailDigitado = prompt("Digite seu e-mail");
  senhaDigitada = prompt("Digite sua senha");
}
alert("Login realizado com sucesso");

// && -> E
// || -> OU
