let email = prompt("Digite o seu email: ");
console.log(email);

let senha = prompt("Digite a sua senha: ");
console.log(senha);

while(email != "teste@reprograma.com" || senha != "teste123"){
      email = prompt("Digite novamente seu email: ");
      console.log(email);
      senha = prompt("Digite novamente sua senha:");
      console.log(senha);
    }

    if( email == "teste@reprograma.com" && senha == "teste123" ) {
        alert("Acesso Permitido");
    }