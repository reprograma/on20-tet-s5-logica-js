let emailCorreto = "teste@reprograma.com";
console.log(emailCorreto);

let senhaCorreta = "teste123";
console.log(senhaCorreta);

let containput = prompt("Digite o seu e-mail por favor");
console.log(containput);
let senhainput = prompt("Agora digite a sua senha");
console.log(senhainput);

if (containput== "teste@reprograma.com" && senhainput == "teste123"){ 
    alert("Acesso permitido");
    }

while (containput != "teste@reprograma.com" || senhainput != "teste123") {
    alert("E-mail ou senha inválidos. Por favor, digite novamente");
    containput = prompt("Digite o seu e-mail por favor");
console.log(containput);
    senhainput = prompt("Agora digite a sua senha");
console.log(senhainput);

}

