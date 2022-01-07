let gridSize = 16;
let cubeSize = 14;
let appleX, appleY;
let gameOver;
let started = false;
var canvas;

function setup() {
  canvas = createCanvas(430, 430);
  canvas.position(200, 500)
  background(0);
  // for(i = 0; i <= 26; i++) {
  //     rect(gridSize * i, gridSize * i, cubeSize);
  // }
  // for(i = 0; i <= 26; i++) {
  //     rect(gridSize * i, (26 - i) * gridSize, cubeSize);
  // }
  snake = new Snake(gridSize * 13, gridSize * 20);
  frameRate(10);
  appleX = floor(random(0, 26)) * gridSize;
  appleY = floor(random(0, 26)) * gridSize;
  textAlign(CENTER);
  textSize(24);
  textStyle(NORMAL);
  fill(255);
  text("HIT ANY KEY TO BEGIN", gridSize * 13.5, gridSize * 14.5);
}

function draw() {
  if(started) {
    snake.eat(appleX, appleY);
    if (!gameOver) {
      background(0);
      fill(255, 0, 0);
      rect(appleX, appleY, cubeSize);
      snake.update();
      fill(0, 230, 0);
      snake.show();
    } else {
      textSize(50);
      textStyle(BOLD);
      fill(75, 0, 0);
      text("GAME OVER!", gridSize * 13.5, gridSize * 14.5);
    }
  }
}

function keyPressed() {
  started = true;
  if (keyCode === RIGHT_ARROW || keyCode === 68) {
    snake.speedChange(1, 0);
  }
  if (keyCode === LEFT_ARROW || keyCode === 65) {
    snake.speedChange(-1, 0);
  }
  if (keyCode === UP_ARROW || keyCode === 87) {
    snake.speedChange(0, -1);
  }
  if (keyCode === DOWN_ARROW || keyCode === 83) {
    snake.speedChange(0, 1);
  }
}


