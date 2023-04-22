let COUNT = 0;
let balls = [];
let shouldSpawnBall = false;

function setup() {
  createCanvas(400, 400);
  
  for(let i = 0; i < COUNT; i++)
  {
    let b = new Ball(i);
    balls.push(b);
  }
}

function draw() {
  background(220);
  
  for(let i = 0; i < balls.length; i++) 
  {
    balls[i].collide();
    balls[i].show();
    balls[i].move();
    balls[i].edges();
  }

  if (shouldSpawnBall) 
  {
    COUNT++;
    let b = new Ball(balls.length);
    balls.push(b);
    shouldSpawnBall = false;
    console.log(COUNT);
  }
}

function keyPressed()
{
  if (keyCode === 32)
    shouldSpawnBall = true;
}
