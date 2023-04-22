class Ball {
    constructor(index) {
      this.index = index;
      this.radius = random(10, 30);
      this.pos = createVector(random(this.radius, width-this.radius), random(this.radius, height-this.radius))
      this.vel = p5.Vector.random2D().mult(2);
      this.acc = createVector(0, 0.2);
    }
    
    // Object collision detection
    collide()
    {
      // Checks all other balls in existance for collition (O(N)^2)
      for(let i = 0; i < balls.length; i++)
      {
        let distance = dist(this.pos.x, this.pos.y, balls[i].pos.x, balls[i].pos.y)

        if (distance < this.radius + balls[i].radius && this.index !== i)
        {
          fill(255, 0, 0);
          break;
        } 
        else 
        {
          fill(255);
        }
      }
    }
    
    // Edge collision detection
    edges()
    {
      if(this.pos.x <= this.radius || this.pos.x >= width-this.radius) 
      this.vel.x *= -1;
      
      if(this.pos.y <= this.radius || this.pos.y >= height-this.radius) 
      this.vel.y *= -1;
    }
    
    // Position updater
    move()
    {
      this.pos.add(this.vel);
      this.vel.add(this.acc);
    }
    
    // Renderer
    show()
    {
      noStroke();
      ellipse(this.pos.x, this.pos.y, this.radius*2);
    }
  }