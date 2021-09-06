let xPlayer = 85;
let yPlayer = 366;
let radiusPlayer = 15;
let hit = false;
let scorePlayer = 0;

function drawPlayer() {
  image(playerImage, xPlayer, yPlayer, 30, 30);
}

function movePlayer() {
  if (keyIsDown(UP_ARROW)) {
    yPlayer -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (playerCanMove()) {
      yPlayer += 3;
    }
  }
}

function verifyCollision() {
  for (let i = 0; i < carImages.length; i++) {
    hit = collideRectCircle(
      carX[i],
      carY[i],
      carWidth,
      carHeight,
      xPlayer,
      yPlayer,
      radiusPlayer
    );
    if (hit) {
      collisionSound.play();
      backToStartPosition();
      scorePlayer -= 1;
      verifyPoints();
    }
  }
}

function backToStartPosition() {
  yPlayer = 366;
}

function showScore() {
  textSize(24);
  textAlign(CENTER);
  fill(255, 260, 60);
  text(scorePlayer, width / 5, 27);
}

function addPoints() {
  if (yPlayer < 15) {
    scoreSound.play();
    backToStartPosition();
    scorePlayer += 1;
  }
}

function verifyPoints() {
  if (scorePlayer <= 0) {
    scorePlayer = 0;
  }
}

function playerCanMove() {
  return yPlayer < 366;
}
