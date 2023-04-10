function setup() {
  createCanvas(600, 350);
  somTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraVaca();
  mostraCarros();
  movimentaCarros();
  movimentaVaca();
  voltaCarros();
  verificaColisao();
  vacaBorda();
  maisPontos();
  marcaPonto();
}