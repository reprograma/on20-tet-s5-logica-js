// - Explicação do exercício: Escrever um programa que receba um e-mail e uma senha e só permita que o login seja feito quando o e-mail for teste@reprograma.com e a senha seja teste123, caso um deles esteja errado escrever uma mensagem de erro e perguntar e-mail e senha novamente até o usuário acertar.

let email = prompt("Digite seu email: ");
let senha = prompt("Digite sua senha: ");

if (email == "teste@reprograma.com" && senha == "teste123") {
    alert("Acesso liberado!");
} else {
    // o laço se repete caso um dados estejam diferentes dos atribuídos   
    while (email != "teste@reprograma.com" || senha != "teste123") 
    {
        alert("Email ou senha inválidos. Tente novamente!");
        email = prompt("Digite seu email novamente: ");
        senha = prompt("Digite sua senha novamente: ");

    } alert("Acesso liberado!");
}




