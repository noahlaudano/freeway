function setup() {
  createCanvas(500, 400);
  soundTrack.loop();
}

function draw() {
  background(bgImage);
  drawPlayer();
  drawCars();
  movePlayer();
  moveCars();
  createCarLoops();
  verifyCollision();
  showScore();
  addPoints();
}
