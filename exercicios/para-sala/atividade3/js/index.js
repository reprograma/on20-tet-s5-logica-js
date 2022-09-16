let usuario = prompt("digite seu e-mail");
console.log(usuario);
let senha = prompt("digite sua senha");
console.log(senha);


  if (usuario != "teste@reprograma.com" && senha != "teste123") {
    alert("dados corretos, acesso libarado");
    window.location = "page2.html";
  }
  else {
    alert("Dados incorretos, informe o e-mail e senha novamente");
  }

