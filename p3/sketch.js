
let altHair = false;
const defaultHair = '#2f2420'; 
const altHair2 = '#a38d6b';    
let isRecording = false;


function setup() {
  createCanvas(600, 400);

  pixelDensity(1);
  angleMode(RADIANS);
  frameRate(60);
}


function draw() {

  const skin = '#f3c9a8';
  const shirt = '#ffa24b';
  const iris = '#3a3f5a';
  const lip = '#c45a6a';

  const hair = altHair ? altHair2 : defaultHair;

  const cx = width / 2;
  const cy = height / 2;


  background('#f6f2ed');

 
  noStroke();
  fill(shirt);
  rectMode(CENTER);
  rect(cx, cy + 210, 420, 220, 60);


  fill(skin);
  rect(cx, cy + 110, 64, 80, 14);


  fill(shirt);
  arc(cx, cy + 135, 150, 90, 0, PI);
  fill(skin);
  arc(cx, cy + 135, 90, 56, 0, PI);


  fill(hair);
  ellipse(cx, cy - 24, 280, 240);


  const hairW = 70;
  const hairH = 200;
  const bottomR = 70;

 
  rect(cx - 105, cy + 80, hairW, hairH);
  arc(cx - 105, cy + 80 + hairH / 2, bottomR, bottomR, 0, PI);


  rect(cx + 105, cy + 80, hairW, hairH);
  arc(cx + 105, cy + 80 + hairH / 2, bottomR, bottomR, 0, PI);


  fill(skin);
  ellipse(cx, cy, 190, 230);


  ellipse(cx - 102, cy + 10, 28, 40);
  ellipse(cx + 102, cy + 10, 28, 40);


  const eyeY = cy - 18;
  const lx = cx - 48;
  const rx = cx + 48;


  const blinkInterval = 180; 
  const blinkDuration = 10;  
  const blinkState = frameCount % blinkInterval;
  const isBlinking = blinkState < blinkDuration;

  if (!isBlinking) {

    fill(255);
    ellipse(lx, eyeY, 44, 26);
    ellipse(rx, eyeY, 44, 26);


    const maxTravel = 5;

    const angleL = atan2(mouseY - eyeY, mouseX - lx);
    const angleR = atan2(mouseY - eyeY, mouseX - rx);

    const pupilLX = lx + cos(angleL) * maxTravel;
    const pupilLY = eyeY + sin(angleL) * maxTravel;
    const pupilRX = rx + cos(angleR) * maxTravel;
    const pupilRY = eyeY + sin(angleR) * maxTravel;


    fill(iris);
    circle(pupilLX, pupilLY, 14);
    circle(pupilRX, pupilRY, 14);


    fill(0);
    circle(pupilLX, pupilLY, 6);
    circle(pupilRX, pupilRY, 6);


    fill(255);
    circle(pupilLX - 4, pupilLY - 4, 4);
    circle(pupilRX - 4, pupilRY - 4, 4);
  } else {

    stroke(0);
    strokeWeight(2);
    line(lx - 22, eyeY, lx + 22, eyeY);
    line(rx - 22, eyeY, rx + 22, eyeY);
  }


  stroke(hair);
  strokeWeight(5);
  line(lx - 22, eyeY - 18, lx + 18, eyeY - 20);
  line(rx - 18, eyeY - 20, rx + 22, eyeY - 18);


  stroke(90);
  strokeWeight(2);
  line(cx, cy - 2, cx, cy + 10);

 
  noFill();
  stroke(lip);
  strokeWeight(3);

  if (mouseIsPressed) {
 
    noStroke();
    fill('#d9818f');
    ellipse(cx, cy + 60, 40, 10);
  } else {

    noFill();
    stroke(lip);
    strokeWeight(3);
    arc(cx, cy + 48, 76, 26, 0, PI);
  }


  noStroke();
  fill(20);
  circle(rx + 16, eyeY + 16, 5);


  if (isRecording) {
    fill(255, 0, 0);
    noStroke();
    textSize(14);
    text('GIF 저장 중…', 10, 22);
  }
}


function keyPressed() {
 
  


  if (key === 'h' || key === 'H') {
    altHair = !altHair;
    return;
  }


  if (key === 'g' || key === 'G') {
    if (isRecording) return;

    isRecording = true;
    const loadingMessage = document.getElementById('loading-message');
    loadingMessage?.style && (loadingMessage.style.display = 'block');

 
    saveGif('moving_caricature', 600, {
      units: 'frames',
      silent: false
    });


    return;
  }


  if (key === 'x' || key === 'X') {
    isRecording = false;
    const loadingMessage = document.getElementById('loading-message');
    loadingMessage?.style && (loadingMessage.style.display = 'none');
    return;
  }
}
