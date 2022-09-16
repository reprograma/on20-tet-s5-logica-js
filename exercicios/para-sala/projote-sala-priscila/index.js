let receberEmail = "";
let receberSenha = "";

while (receberEmail != "teste@reprograma.com" || receberSenha != "teste123") {

    receberEmail = prompt("Digite seu e-mail.");
    receberSenha = prompt("Digite sua senha.");

    if (receberEmail != "teste@reprograma.com" && receberSenha == "teste123") {
        alert("E-mail Invalido");
    }

    if (receberSenha != "teste123" && receberEmail == "teste@reprograma.com") {
        alert("Senha Invalida");
    }

    if (receberEmail != "teste@reprograma.com" && receberSenha != "teste123") {
        alert("E-mail e Senha Invalida");
    }

} 

alert("Login efetuado com sucesso");