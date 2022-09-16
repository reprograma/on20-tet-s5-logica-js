// essas constantes estao dando o valor correto do email e da senha
const emailCorreto = 'teste@reprograma.com'
const senhaCorreta = 'teste123'

// se nao inicializar a variavel, o valor do email e da senha no while nao estarao definidos e nao vai rodar o programa
let email = prompt('Digite seu email')
let senha = prompt('Digite sua senha')

// enquanto a condicao nao for satisfeita, ele vai continuar no loop. ele faz o que esta dentro do loop ate a condicao ser satisfeita
while (email !== emailCorreto || senha !== senhaCorreta) {
  alert('Erro: dados incorretos. Tente novamente!')
  email = prompt('Digite seu email:')
  senha = prompt('Digite sua senha:')
}
if (email === emailCorreto && senha === senhaCorreta)
  alert('Login feito com sucesso!') 