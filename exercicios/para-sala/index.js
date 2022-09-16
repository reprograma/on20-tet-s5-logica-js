let email = prompt("Informe o e-mail de acesso")

console.log(email)
console.log(email)

let senha = prompt("Informe a senha de acesso");
console.log(senha)

if (email == "teste@reprograma.com" && senha == "teste123") {
    alert("Acesso autorizado")
} else {
    while (email != "teste@reprograma.com" || senha != "teste123") {
        email = prompt("Informe novamente o email de acesso: ");
        console.log(email);
        senha = prompt("Digite novamente a senha de acesso:");
        console.log(senha);
    }
    alert("Seja bem vindo!")

}