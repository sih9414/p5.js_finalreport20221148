let cA, cB;
let isRecording = false;
let recordingStartedAt = 0;

function setup() {
  createCanvas(600, 400);
  frameRate(60);

 
  colorMode(HSB, 360, 100, 100, 255);


  rerollPalette();
}

function rerollPalette() {
 
  cA = color(random(360), random(60, 100), random(70, 100), 210);
  cB = color((hue(cA) + random(60, 180)) % 360, random(60, 100), random(70, 100), 210);
}

function draw() {

  const t = frameCount * 0.03;
  const ms = millis() * 0.001;

  background(45, 10, 95);

 
  const blend = (sin(ms) + 1) / 2; // 0~1
  const liveCol = lerpColor(cA, cB, blend);

  
  const pulseBig   = 1 + 0.08 * sin(t * 1.2);
  const pulseMid   = 1 + 0.12 * cos(t * 1.6);
  const pulseSmall = 1 + 0.18 * sin(t * 2.1);


  const swayX = sin(t) * 18;
  const swayY = cos(t * 0.9) * 10;

  noStroke();


  fill(liveCol);
  rect(50, 50 + sin(t * 0.8) * 14, 200 * pulseMid, 300 * pulseBig, 10);


  fill((hue(liveCol) + 40) % 360, 75, 95, 200);
  circle(450 + cos(t * 0.7) * 22, 200 + sin(t * 0.7) * 10, 250 * pulseBig);


  fill((hue(liveCol) + 120) % 360, 60, 95, 190);
  triangle(
    300 + sin(t * 1.1) * 10, 100 + cos(t * 1.3) * 10,
    500 + cos(t * 0.9) * 12, 350 + sin(t * 1.0) * 8,
    100 + sin(t * 1.4) * 14, 350 + cos(t * 0.8) * 8
  );


  fill((hue(liveCol) + 200) % 360, 70, 95, 200);
  circle(150 + cos(t * 1.2) * 16, 100 + sin(t * 1.2) * 16, 80 * pulseSmall);

  fill((hue(liveCol) + 260) % 360, 75, 95, 200);
  circle(
    200 + cos(t * 1.6 + 1) * 14,
    150 + sin(t * 1.6 + 1) * 10,
    60 * (1 + 0.15 * cos(t * 1.8))
  );

  fill((hue(liveCol) + 320) % 360, 65, 95, 200);
  circle(
    100 + cos(t * 1.0 + 2) * 12,
    200 + sin(t * 1.0 + 2) * 18,
    70 * (1 + 0.12 * sin(t * 1.4))
  );


  stroke(0, 0, 25, 200);
  strokeWeight(3);
  line(0 + swayX, 0 + swayY, width - swayX, height - swayY);
  line(0 + swayX, height - swayY, width - swayX, 0 + swayY);


  noStroke();
  fill((hue(liveCol) + 30) % 360, 55, 85, 220);
  rect(500 + sin(t * 1.5) * 8, 50 + cos(t * 1.1) * 10, 40 * pulseSmall, 40 * pulseSmall);

  fill((hue(liveCol) + 70) % 360, 55, 85, 220);
  rect(550 + cos(t * 1.3) * 10, 100 + sin(t * 1.7) * 8, 30 * pulseMid, 30 * pulseMid);

  fill((hue(liveCol) + 110) % 360, 55, 85, 220);
  rect(520 + sin(t * 1.1 + 0.7) * 10, 150 + cos(t * 1.4 + 0.7) * 10, 50 * pulseBig, 50 * pulseBig);


  fill((hue(liveCol) + 160) % 360, 85, 95, 240);
  circle(
    width / 2 + sin(t) * 10,
    height / 2 + cos(t) * 10,
    40 * (1 + 0.22 * sin(t * 2.2))
  );


  if (isRecording) {
    const elapsed = millis() - recordingStartedAt;
    const left = max(0, 10 - elapsed / 1000);

    noStroke();
    fill(0, 0, 15, 170);
    rect(12, 12, 170, 34, 10);

    fill(0, 0, 98, 255);
    textSize(14);
    text(`GIF 생성 중… ${left.toFixed(1)}s`, 22, 34);
  }
}


function mousePressed() {
  rerollPalette();
}


function keyPressed() {
  


  if (key === 'g' || key === 'G') {
    if (isRecording) return;

    isRecording = true;
    recordingStartedAt = millis();

    const el = document.getElementById('loading-message');
    if (el) el.style.display = 'block';


    saveGif('moving_shapes', 600, { units: 'frames', silent: false });


    setTimeout(() => {
      isRecording = false;
      const el2 = document.getElementById('loading-message');
      if (el2) el2.style.display = 'none';
    }, 10000);

    return;
  }
}
