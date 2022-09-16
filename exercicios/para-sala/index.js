 let email = prompt ("Coloque seu email")
console.log (email)
 /*let email = prompt ("Coloque seu email"); 
console.log(email) */
 /* email = "outroemail" */ 
console.log (email)
let senha = prompt ("Coloque sua senha");
console.log(senha)
if (email=="teste@reprograma.com" && senha== "teste123") {
    alert ("seja bem vindo")
} else {
    while(email != "teste@reprograma.com" || senha != "teste123"){
        email = prompt("Digite novamente seu email: ");
        console.log(email);
        senha = prompt("Digite novamente sua senha:");
        console.log(senha);
      }
  alert("Seja bem vindo!")
}



//email== "teste@reprograma.com"

/*else if (email != "teste@reprograma.com") {
    alert("o email esta errado")
} else if (senha != "teste123") {
    alert ("a senha esta errada")

}*/

 /*let variavel = 0;
while(variavel<50){
    console.log (variavel);
    variavel = variavel +5;
} */