let numAleatorio = Math.floor(Math.random() * 50) + 1;


let palpites = window.document.querySelector('.palpites');
let ultResultado = window.document.querySelector('.ultResultado');
let baixoOuAlto = window.document.querySelector('.baixoOuAlto');

let envPalpite = window.document.querySelector('.envioPalpite');
let campoPalpite = window.document.querySelector('.campoPalpite');

let contagemPalpites = 1;
let botaoReinicio; 

envPalpite.addEventListener('click', conferirPalpite);
let palpiteUs = campoPalpite;
function conferirPalpite() {
  
  if((contagemPalpites == 1)){
    palpites.textContent = 'Palpites anteriores: ';
    
  }
  palpites.textContent += (Number(palpiteUs.value) + ' ');
  
  if(palpiteUs.value == numAleatorio){
    ultResultado.textContent = 'Parabéns! Você acertou!';
    ultResultado.style.backgroundColor = 'green';
    baixoOuAlto.textContent = '';
    configFimDeJogo();

  }else if (contagemPalpites == 5){
    ultResultado.textContent = 'FIM DE JOGO!! O número certo é: ' + numAleatorio;
    baixoOuAlto.textContent = '';
    configFimDeJogo();
    
  }else{
    ultResultado.textContent = 'Errado!';
    ultResultado.style.backgroundColor = 'red';
    if(palpiteUs.value < numAleatorio){
      baixoOuAlto.textContent = 'Seu palpite está muito abaixo!';
    }else if(palpiteUs.value > numAleatorio){
      baixoOuAlto.textContent = 'Seu palpite está muito alto!';
    }
  }

  contagemPalpites++;
  campoPalpite.value = '';
  campoPalpite.focus();



}


function configFimDeJogo(){
  campoPalpite.disabled = true;
  envPalpite.disabled = true;
  botaoReinicio = document.createElement('button');
  document.body.appendChild(botaoReinicio);
  botaoReinicio.addEventListener('click', reiniciarJogo);
}

function reiniciarJogo(){
  contagemPalpites = 1;

  let reiniParas = document.querySelectorAll('.resParas p');
  for(let i = 0;i < reiniParas.length; i++){
    reiniParas[i].textContent = '';
  }

  botaoReinicio.parentNode.removeChild(botaoReinicio);

  campoPalpite.disabled = false;
  envPalpite.disabled = false;
  campoPalpite.value = '';

  ultResultado.style.backgroundColor = 'white';

  numAleatorio = Math.floor(Math.random() * 50) + 1;
}


/*
Descrição:
1 Gerar um número aleatório entre 1 e 100.
2 Gravar o número do turno que o jogador está. Iniciar em 1.
3 Dar ao jogador uma forma de adivinhar o número.
4 Após a tentativa ter sido submetida, primeiro gravar em algum lugar para que o usuário possa ver as tentativas anteriores.
5 Depois, verificar se o palpite está correto.
6 Se estiver correto:
  1 Escrever mensagem de parabéns.
  2 Impedir que o jogador insira mais respostas (isso pode bugar o jogo).
  3 Mostrar controle que permita ao jogador reiniciar o jogo.
7 Se o palpite estiver errado e o jogador ainda tem turnos sobrando.
  1 Dizer ao jogador que ele está errado.
  2 Permitir que ele insira outra resposta.
  3 Incrementar o número do turno em 1.
8 Se o jogador está errado mas não tem turnos sobrando:
  1 Dizer ao jogador que o jogo acabou.
  2 Impedir que o jogador insira mais respostas (isso pode bugar o jogo).
  3 Mostrar controle que permita ao jogador reiniciar o jogo.
9 Quando reiniciar, tenha certeza de resetar todas as variáveis e a interface do jogo, então volte para o passo 1.

*/