
//variáveis:
let email = prompt("Digite seu e-mail");
console.log(email);
let senha = prompt("Digite sua senha");
console.log(senha);

//se for uma coisa ou outra:
if ( email != "teste@reprograma.com" && senha=="teste123") {
    alert("Acesso concedido!");
} else {
    while (email !="teste@reprograma.com" || senha !="teste123") {
        alert("Email ou senha não confere");
        email = prompt("Digite novamente seu email") //prompt de repetição
        senha = prompt("Digite a senha novamente") //prompt de repetição
    }
    alert("Acesso liberado!") //prompt de confirmação
}