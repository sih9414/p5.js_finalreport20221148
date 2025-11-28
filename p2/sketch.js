function setup() {
  createCanvas(600, 400);
  pixelDensity(2);
  noLoop();
}

function draw() {
  background('#f6f2ed');


  const skin  = '#f3c9a8';
  const hair  = '#2f2420';
  const shirt = '#ffa24b';   
  const iris  = '#3a3f5a';
  const lip   = '#c45a6a';

  const cx = 300, cy = 200;


  noStroke();
  fill(shirt);
  rectMode(CENTER);
  rect(cx, cy + 210, 420, 220, 60);


  fill(skin);
  rect(cx, cy + 110, 64, 80, 14);

  fill(shirt); arc(cx, cy + 135, 150, 90, 0, PI);
  fill(skin);  arc(cx, cy + 135,  90, 56, 0, PI);


  fill(hair);
  ellipse(cx, cy - 24, 280, 240);


  const hairW = 70;  
  const hairH = 200;  
  const bottomR = 70; 


  rect(cx - 105, cy + 80, hairW, hairH);               
  arc(cx - 105, cy + 80 + hairH/2, bottomR, bottomR, 0, PI); 


  rect(cx + 105, cy + 80, hairW, hairH);
  arc(cx + 105, cy + 80 + hairH/2, bottomR, bottomR, 0, PI);


  fill(skin);
  ellipse(cx, cy, 190, 230);


  fill(skin);
  ellipse(cx - 102, cy + 10, 28, 40);
  ellipse(cx + 102, cy + 10, 28, 40);


  const eyeY = cy - 18;
  const lx = cx - 48, rx = cx + 48;

  fill(255);
  ellipse(lx, eyeY, 44, 26);
  ellipse(rx, eyeY, 44, 26);

  fill('#3a3f5a');
  circle(lx, eyeY, 14);
  circle(rx, eyeY, 14);

  fill(0);
  circle(lx, eyeY, 6);
  circle(rx, eyeY, 6);

  fill(255);
  circle(lx - 4, eyeY - 4, 4);
  circle(rx - 4, eyeY - 4, 4);


  stroke('#2c2220'); strokeWeight(5);
  line(lx - 22, eyeY - 18, lx + 18, eyeY - 20);
  line(rx - 18, eyeY - 20, rx + 22, eyeY - 18);


  stroke(90); strokeWeight(2);
  line(cx, cy - 2, cx, cy + 10);


  noFill(); stroke(lip); strokeWeight(3);
  arc(cx, cy + 48, 76, 26, 0, PI);


  noStroke(); fill(20);
  circle(rx + 16, eyeY + 16, 5);
}

function keyPressed() {
  if (key === 's' || key === 'S') saveCanvas('caricature', 'png');
}
