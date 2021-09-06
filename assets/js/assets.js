//images
let bgImage;
let playerImage;
let greenCar;
let blackCar;
let yellowCar;

//sounds
let collisionSound;
let scoreSound;
let soundTrack;

function preload() {
  bgImage = loadImage("img/estrada.png");
  playerImage = loadImage("img/ator-1.png");
  greenCar = loadImage("img/carro-1.png");
  blackCar = loadImage("img/carro-2.png");
  yellowCar = loadImage("img/carro-3.png");
  carImages = [greenCar, blackCar, yellowCar, greenCar, blackCar, yellowCar];

  collisionSound = loadSound("sounds/colidiu.mp3");
  scoreSound = loadSound("sounds/pontos.wav");
  soundTrack = loadSound("sounds/trilha.mp3");
}
