const senhaTeste = "teste123"
const email = "teste@reprograma.com "
const emailDigitado =""
var senhaDigitada = ""
var contador = 1


prompt("Digite o email")
if(email == emailDigitado){
    document.write("Acesso liberado");
    }  

while(senhaDigitada != senhaTeste && contador <=3) {
    senhaDigitada = prompt("Digite a senha");
    contador = contador + 1;
}

if(senhaDigitada == senhaTeste){
document.write("Acesso liberado");
} else {
    document.write("Senha inválida")
} 