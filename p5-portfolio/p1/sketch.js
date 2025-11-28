function setup() {
  createCanvas(600, 400);
  noLoop(); 
}

function draw() {
  background(240, 240, 230); 


  noStroke();
  fill(255, 200, 200, 180);
  rect(50, 50, 200, 300);


  fill(180, 200, 255, 200);
  circle(450, 200, 250);


  fill(200, 255, 180, 180);
  triangle(300, 100, 500, 350, 100, 350);


  fill(255, 220, 100, 200);
  circle(150, 100, 80);
  fill(255, 120, 150, 200);
  circle(200, 150, 60);
  fill(120, 200, 255, 200);
  circle(100, 200, 70);


  stroke(80);
  strokeWeight(3);
  line(0, 0, 600, 400);
  line(0, 400, 600, 0);


  noStroke();
  fill(100, 180, 200, 220);
  rect(500, 50, 40, 40);
  rect(550, 100, 30, 30);
  rect(520, 150, 50, 50);


  fill(255, 80, 80, 220);
  circle(width/2, height/2, 40);
  
    saveCanvas("abstract_art", "png");
}
