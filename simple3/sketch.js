let bgR = 220;
let bgG = 235;
let bgB = 220;

let headY = 0;
let headSpeed = 0.3;

function setup() {
  createCanvas(400, 400);
}

function keyPressed() {
  if (key === 'c' || key === 'C') {
    bgR = random(200, 255);
    bgG = random(200, 255);
    bgB = random(200, 255);
  }
  
  if (key === 's' || key === 'S') {
    saveGif('mySketch', 5);
  }
}

function draw() {
  background(bgR, bgG, bgB);

  headY += headSpeed;
  if (headY > 5 || headY < -5) {
    headSpeed *= -1;
  }

  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = 5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'rgba(0, 0, 0, 0.2)';

  translate(width / 2, height / 2 - 30 + headY);
  scale(0.8);

  let wiggleX = random(-1, 1);
  let wiggleY = random(-1, 1);

  fill(180);
  stroke(80);
  strokeWeight(4);
  ellipse(-150 + wiggleX, 50 + wiggleY, 110, 120);
  ellipse(150 + wiggleX, 50 + wiggleY, 110, 120);

  fill(220, 210, 210);
  noStroke();
  ellipse(-150 + wiggleX, 50 + wiggleY, 60, 70);
  ellipse(150 + wiggleX, 50 + wiggleY, 60, 70);

  fill(255, 230, 200);
  stroke(80);
  strokeWeight(4);
  ellipse(0, 40, 340, 350);
  drawingContext.shadowColor = 'rgba(0, 0, 0, 0)';

  fill(30, 30, 30);
  noStroke();
  beginShape();
  vertex(-170, -40);
  bezierVertex(-170, -200, 170, -200, 170, -40);
  vertex(130, -10);
  vertex(90, 20);
  vertex(60, -10);
  vertex(0, 30);
  vertex(-60, -10);
  vertex(-90, 20);
  vertex(-130, -10);
  endShape(CLOSE);

  if (frameCount % 180 < 10) {
    noFill();
    stroke(50);
    strokeWeight(4);
    arc(-70, 40, 45, 20, 0, PI);
    arc(70, 40, 45, 20, 0, PI);
  } else {
    fill(10, 10, 10);
    noStroke();
    ellipse(-70, 40, 45, 45);
    ellipse(70, 40, 45, 45);
    let sparkleX_L = -65 + (mouseX - width / 2) * 0.03;
    let sparkleX_R = 75 + (mouseX - width / 2) * 0.03;
    sparkleX_L = constrain(sparkleX_L, -80, -50);
    sparkleX_R = constrain(sparkleX_R, 60, 90);
    fill(255);
    ellipse(sparkleX_L, 30, 12, 12);
    ellipse(sparkleX_R, 30, 12, 12);
  }

  fill(80, 80, 90);
  noStroke();
  ellipse(0, 100, 60, 90);

  if (mouseIsPressed) {
    fill(50);
    noStroke();
    ellipse(0, 165, 20, 20);
  } else {
    stroke(50);
    strokeWeight(4);
    noFill();
    line(-20, 160, 20, 160);
  }
}