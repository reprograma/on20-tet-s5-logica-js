let email = prompt("Digite o seu e-mail:");
console.log(email);
let senha = prompt("Digite a sua senha:");
console.log(senha);

if (email != "teste@reprograma.com" && senha=="teste123") {
    alert("acesso validado");
}
else {
    while (email !="teste@reprograma.com" || senha !="teste123") {
        alert("E-mail ou senha incorretos");
        email = prompt("Digite seu e-mail novamente")
        senha = prompt("Digite a sua senha novamente")
    }
    alert("Seja bem vindo a sua caixa de entrada!")
}