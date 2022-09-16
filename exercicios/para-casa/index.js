
function startPrompt() {

    let email = prompt ("Digite seu email");

    if (email === "teste@reprograma.com") {
        let senha = prompt("Digite sua senha");
    
        if (senha === "teste123") {
            alert ("Sucesso");

            } else {
                alert ("Senha errada, digite novamente");
                startPrompt();
            }
                
    } else {
        alert ("Ingresse um email valido");
        startPrompt();
        }
}

startPrompt();

