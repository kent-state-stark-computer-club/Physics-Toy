let balls = []

function setup() {
  createCanvas(400, 400);
  
  for(let i = 0; i < 10; i++) {
    let b = new Ball(i);
    balls.push(b);
  }
}

function draw() {
  background(220);
  
  for(let i = 0; i < balls.length; i++) {
    balls[i].collide();
    balls[i].show();
    balls[i].move();
    balls[i].edges();
  }
  
}

class Ball {
  constructor(index) {
    this.index = index;
    this.radius = random(10, 30);
    this.pos = createVector(random(this.radius, width-this.radius), random(this.radius, height-this.radius))
    this.vel = p5.Vector.random2D().mult(2);
    this.acc = createVector(0, 0.2);
  }
  
  collide() {
    // Checks all other balls in existance for collition (O(N)^2)
    for(let i = 0; i < balls.length; i++) {
      let d = dist(this.pos.x, this.pos.y, balls[i].pos.x, balls[i].pos.y)
    
      if (d < this.radius + balls[i].radius && this.index !== i) {
        fill(255, 0, 0);
        
        break;
      } else {
        fill(255);
      }
    }
  }
  
  edges() {
    if(this.pos.x <= this.radius || this.pos.x >= width-this.radius) {
      this.vel.x = -this.vel.x
    }
    
    if(this.pos.y <= this.radius || this.pos.y >= height-this.radius) {
      this.vel.y = -this.vel.y
    }
  }
  
  move() {
    this.pos.add(this.vel)
    this.vel.add(this.acc)
  }
  
  show() {
    noStroke()
    ellipse(this.pos.x, this.pos.y, this.radius*2)
  }
}