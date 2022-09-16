let email= prompt ('Digite seu email')
console.log (email)

let senha= prompt(' Digite sua senha')
console.log (senha) 

if (email == 'teste@reprograma.com' && senha =='teste123') {
    alert ('Acesso permitido')
} else {
    while (email != 'teste@reprograma.com' || senha !='teste123') {
    alert('email ou senha invalidos')
    email= prompt ('Digite novamente seu email')
    senha= prompt ('Digite novamente sua senha')
    } 
    alert('Acesso permitido')
}