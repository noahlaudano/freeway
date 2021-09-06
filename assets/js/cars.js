let carWidth = 50;
let carHeight = 40;

let carX = [600, 600, 600, 600, 600, 600];
let carY = [40, 96, 150, 210, 270, 318];
let carSpeed = [2, 2.5, 3.2, 5, 3.3, 2.3];

function drawCars() {
  for (let i = 0; i < carImages.length; i++) {
    image(carImages[i], carX[i], carY[i], carWidth, carHeight);
  }
}

function moveCars() {
  for (let i = 0; i < carImages.length; i++) {
    carX[i] -= carSpeed[i];
  }
}

function createCarLoops() {
  for (let i = 0; i < carImages.length; i++) {
    if (leftTheScreen(carX[i])) {
      carX[i] = 600;
    }
  }
}

function leftTheScreen(carX) {
  return carX < -50;
}
