let listaDeNumerosSorteado = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function ExibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
}

function ExibirMensagemIncial() {
    ExibirTextoNaTela('h1','Jogo do Número secreto');
    ExibirTextoNaTela('p', 'Escolha um numero de 1 a 100'); 
}
ExibirMensagemIncial();


function verificarChute(){
    let chute = document.querySelector('input').value;
   
    if(chute == numeroSecreto){
        ExibirTextoNaTela('h1','BOA! Você acertou!!!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}.`;
        ExibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto){
            ExibirTextoNaTela('p','O número secreto é menor');

        } else{
            ExibirTextoNaTela('p','O número secreto é maior');

        }
    }
    tentativas++;
    limparCampo();

    
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteado.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteado = [];
    }

    if (listaDeNumerosSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteado.push(numeroEscolhido);
        console.log(listaDeNumerosSorteado);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    ExibirMensagemIncial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}