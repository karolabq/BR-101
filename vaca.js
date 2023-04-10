//Código da Vaca

//variáveis da Vaca
let yVaca = 350
let xVaca = 120
let colisao = false
let pontos = 0

function mostraVaca(){
  image(imagemVaca, xVaca, yVaca, 30, 30);
}

function movimentaVaca(){
  if (keyIsDown(UP_ARROW)){
    yVaca -= 3;
  }  
  if (keyIsDown(DOWN_ARROW)){
    yVaca += 3;
  }  
  if (keyIsDown(LEFT_ARROW)){
    xVaca -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xVaca += 3;
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xVaca, yVaca, 10);
    if (colisao){
          colidiu();
      somColisao.play();
      if (pontosMaiorZero()){
        pontos -= 1
      }
    }
  }
}

function colidiu(){
  yVaca = 350;
}

function vacaBorda(){
  if (yVaca <= 0) {
    yVaca = 350;
  }
  if (yVaca >= 320){
    yVaca = 320;
  }
  if (xVaca <= 0){
    xVaca = 0;
  }
  if (xVaca >= 570){
    xVaca = 570;
  }
}

function maisPontos(){
  fill (color(255,102,0));
  textAlign(CENTER);
  textSize (20);
  text(pontos, width / 5, 22);
}

function marcaPonto(){
  if (yVaca < 5){
    pontos += 1
    somPontos.play();
  }
}

function pontosMaiorZero(){
  return pontos > 0
}