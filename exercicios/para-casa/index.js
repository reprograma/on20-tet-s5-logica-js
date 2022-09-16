 email = prompt("Digite seu email:");
console.log(email);

let senha = prompt("Digite sua senha:");
console.log(senha);





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

    while (containput != "teste@reprograma.com" || senhainput != "teste123") {
        alert("E-mail ou senha inválidos. Por favor, digite novamente");
        containput = prompt("Digite o seu e-mail por favor");
    console.log(containput);
        senhainput = prompt("Agora digite a sua senha");
    console.log(senhainput);
    
    }
