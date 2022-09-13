var email = prompt("digite o e-mail")
console.log = email
var senha = prompt("senha")
console.log = senha

if (email != "teste@reprograma.com" || senha != "teste123") {
    alert("Tente novamente")
    var email = prompt("digite o e-mail")
    var senha = prompt("senha")
} else if (email != "teste@reprograma.com" & senha != "teste123") {
    alert("Tente novamente")
    var email = prompt("digite o e-mail")
    var senha = prompt("senha")
} else {
    alert("Login realizado")
}