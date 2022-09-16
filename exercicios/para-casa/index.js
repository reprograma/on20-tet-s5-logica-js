let usuarioCadastrado = "teste@reprograma.com";
let senhaCadastrada = "teste123";
let usuarioInformado = prompt("Informe seu login");
let senhaInformada = prompt("Informe sua senha");
let tentativas = 1

while (usuarioInformado != usuarioCadastrado || senhaInformada != senhaCadastrada) {
    	alert("Os dados informados não conferem com os dados cadastrados. Tente novamente.");
		usuarioInformado = prompt("Informe seu login");
        senhaInformada = prompt("Informe sua senha");
		

     if (usuarioInformado === "teste@reprograma.com" && senhaInformada === "teste123") {
	 alert("Sistema liberado. Seja bem vindo!");
	 }
		
	
}