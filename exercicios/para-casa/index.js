const REQUIRED_EMAIL = "teste@reprograma.com";
const REQUIRED_PASSWORD = "teste123";

let email;
let password;

// Operadores lógicos:
// && - and
// || - or

while (email !== REQUIRED_EMAIL || password !== REQUIRED_PASSWORD) {
    email = prompt("Por favor insira seu email");
    password = prompt("Por favor insira sua senha");
    if (email !== REQUIRED_EMAIL || password !== REQUIRED_PASSWORD) {
        alert("whoops, email ou senha incorretos 😢");
    }
    
}

alert("Parabéns, vc ganhou 1000 reais 😍👌✌👏💋");