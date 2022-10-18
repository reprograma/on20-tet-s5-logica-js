const input =document.querySelector('input')
const button =document.querySelector('button')
const numeroAleatorio=Math.floor(Math.random()*(50 - 0 +1));

button.addEventListener('click',function pegarValorDoInput(){
    const valorDoInput =input.value

    if(numeroAleatorio==valorDoInput){
     console.log('parabens')
    }
    if(numeroAleatorio<valorDoInput){
        console.log('é menor')
    }
    if(numeroAleatorio>valorDoInput){
        console.log('é maior')
    }
})


