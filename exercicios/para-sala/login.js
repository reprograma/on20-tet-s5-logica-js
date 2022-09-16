let email = prompt("Digite seu e-mail:");
console.log(email);
let senha = prompt("Digite a sua senha:");
console.log(senha);

if (email != "teste@reprograma.com" && senha=="teste123") {
    alert("Seu acesso foi autenticado!");
}
else {
    while (email !="teste@reprograma.com" || senha !="teste123") {
        alert("E-mail ou senha incorretos");
        email = prompt("Digite seu e-mail mais uma vez.")
        senha = prompt("Digite a sua senha mais uma vez.")
    }
    alert("Seja bem vindo. Seu acesso foi permitido!!")
}