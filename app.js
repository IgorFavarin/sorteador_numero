

function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
        if(quantidade > ate){
            alert('A quantidade de numeros sorteados não pode ser maior que o numero máximo de valores a ser sorteados!');
            reiniciar();
            AlteraStatusBotaoreIniciar();
            AlteraStatusBotaoreSortear();
        } else {

        let numerosSorteados = [];
        let numero;
        
        for(let i = 0; i < quantidade; i++){
            numero = gerarNumeroAleatorio(de, ate);
            
            while(numerosSorteados.includes(numero)){
            numero = gerarNumeroAleatorio(de, ate);
            }
            numerosSorteados.push(numero);
        }   
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados} </label>`
        AlteraStatusBotaoreSortear();
        AlteraStatusBotaoreIniciar();
        //alert(numerosSorteados);
    }
}

function gerarNumeroAleatorio(min, max){
let numeroAleatorio = Math.floor(Math.random() * (max - min)) + min;
return numeroAleatorio;

}

function AlteraStatusBotaoreIniciar(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
    
}

function AlteraStatusBotaoreSortear(){
    let botao = document.getElementById('btn-sortear');
    if (botao.classList.contains('container__botao')){
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    } else {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }  

}
function reiniciar(){
   document.getElementById('quantidade').value = '';
   document.getElementById('de').value = '';
   document.getElementById('ate').value = '';
   resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`
   AlteraStatusBotaoreIniciar();
   AlteraStatusBotaoreSortear();
}