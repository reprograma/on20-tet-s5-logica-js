let email = prompt("coloque seu email")
console.log = email
let senha = prompt("coloque sua senha")
console.log = senha

if (email  !== "teste@reprograma.com" || senha !== "teste123" ) {
    alert("opa, tente novamente!")
    let email = prompt("email")
    let senha = prompt("senha")
}
else{
    alert ("Parabéns, você logou!")

}
