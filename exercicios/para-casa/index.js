let login = prompt("Digite o seu email: ");
console.log(login);

let password = prompt("Digite a sua senha: ");
console.log(password);

if (login == "teste@reprograma.com" && password == "teste123") {
    alert("Acesso Permitido");

} else {

    while (login != "teste@reprograma.com" || password != "teste123") {
        alert("Email ou senha inválidos. Por favor, tente novamente.");
        login = prompt("Digite novamente seu email")
        console.log(login);
        password = prompt("Digite novamente sua senha")
        console.log(password);

    }
    alert("Acesso Permitido")

}

