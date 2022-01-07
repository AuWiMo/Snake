function Snake(startX, startY) {
  this.x = startX;
  this.y = startY;
  this.xSpeed = 0;
  this.ySpeed = -1;
  this.total = 0;
  this.tail = [];
  
  this.show = function() {
    for (let i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, 14, 14);
    }
    rect(this.x, this.y, cubeSize, cubeSize)
    textAlign(CENTER);
    textSize(12);
    textStyle(NORMAL);
    fill(255);
    text("Score: " + this.total, gridSize * 2, gridSize * 1.5);
    
  }
  
  this.placeApple = function() {
    appleX = floor(random(0, 26)) * gridSize;
    appleY = floor(random(0, 26)) * gridSize;
    for (let i = 0; i < this.tail.length; i++) {
      if ((this.x == appleX && this.y == appleY) || (this.tail[i].x == appleX && this.tail[i].y == appleY)) {
        this.placeApple();
        console.log("success")
      }
    }
  } 
  
  this.eat = function(ax, ay) {
    if (appleX == this.x && appleY == this.y) {
      this.placeApple();
      this.total++;
    }
  }
  
  this.reset = function(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.xSpeed = 0;
    this.ySpeed = -1;
    this.total = 0;
    this.tail = [];
  }
  
  this.update = function() {
    if (this.total == this.tail.length) {
      for (let i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i+1];
      }
    }
    if(this.total >= 1) {
      this.tail[this.total - 1] = createVector(this.x, this.y);
    }
    this.x += gridSize * this.xSpeed;
    this.y += gridSize * this.ySpeed;
    if (this.x > width || this.x < 0 || this.y < 0 || this.y > height) {
      this.death();
    }
    for (let i = 0; i < this.tail.length; i++) {
      if (this.tail[i].x == this.x && this.tail[i].y == this.y) {
        this.death();
      }
    }
    lookingForInput = true;
  }
  
  
  this.speedChange = function(x, y) {
    if(x != -this.xSpeed || y != -this.ySpeed) {
      this.xSpeed = x;
      this.ySpeed = y;
    }
  }
  
  this.death = function() {
    gameOver = true;
    
  }

}