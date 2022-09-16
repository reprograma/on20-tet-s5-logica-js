let email;
let senha;

let acesso = false;

while (!acesso){
    email = prompt ("Digite seu email");
    senha =  prompt("Digite sua senha");

    if (email == "teste@reprograma.com" && senha == "teste123"){
        acesso = true
        alert("acesso liberado");
    } else { 
        alert("email ou senha incorreta");
   }
}
console.log('fim');
