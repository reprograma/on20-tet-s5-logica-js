let email = prompt("Digite seu email:");
console.log(email);

let senha = prompt("Digite sua senha:");
console.log(senha);


/*caso um deles esteja errado escrever uma mensagem de erro e perguntar e-mail e senha novamente*/

if (email== "teste@reprograma.com" && senha == "teste123"){ 
    alert("Acesso permitido");
    }
    else {
        
        while (email != "teste@reprograma.com" || senha != "teste123") {
            alert("Email ou senha inválidos");
            email = prompt("Digite novamente seu login")
            senha= prompt("Digite senha novamente")
            
        }
        alert ('Acesso liberado!')
     
    }
    