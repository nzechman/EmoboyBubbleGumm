var circleSize;
let drawbubble = false;
let star1=false;
let sound;

function setup() {
  sound = loadSound('assets/BubbleGumBlow.mp3');
  createCanvas(500, 500); 
  frameRate(5);
  circleSize=0.5;
}

 
function draw() {
  
  keyPressed();
  background(220);
  background ('rgb(0,0,255)')
 
 //ghravestone
  fill("grey")
  ellipse(400, 476,200, 405);
  
  
  //shirt
  fill("black")
  noStroke();
  ellipse(200, 476, 200, 405);
  
//head 
  noStroke();
  fill(176, 90, 36);
  ellipse(200, 200, 275, 260);
    
//blush 
  noStroke();
  fill(234, 91, 81, 185);
  ellipse(110, 250, 57, 40);
  ellipse(295, 250, 57, 40);
  
//blck eyes 
  fill(1,1,1);   
  circle(130, 200, 50);

  fill(1,1,1);   
  circle(290, 200, 40);

//mouth 
  noFill();
  stroke(61, 36, 14)
  strokeWeight(7)
  arc(205, 285, 20, 50, 3.14, 0.00);
  

//cross  

  fill('black');
  stroke('black')
  rect(400,10, 30, 400);
  rect (345,100, 140,30)
 
  fill("#121212")
  stroke("#121212")
  rect(405,20, 20, 400);
  rect (355,105, 120,20)

  //ghravestone
  fill("grey")
  stroke("grey")
  ellipse(400, 476,200, 405);
  
//Skull
  fill("white")
  noStroke();
  circle(200, 430, 80);
//skull eyes
  fill('black')
  circle(180, 420, 20);
  circle(220, 420, 20);
//skull teeth
  stroke('black')
  line(220, 440, 220, 475);
  line(200, 440, 200, 475);
  line(180, 440, 180, 475);
  
//moon
  fill('#f7eca1')
  stroke("#e3c812");
  ellipse(0, 0, 275, 260);
  circle(10, 30, 30);
  circle(80, 5, 80);
  circle(20, 85, 50);
  circle(70, 65, 15);
  
  
  
  //tinyplasticgirl
  fill("black")
  noStroke();
  textFont('Courier New', 25);
  text("R.I.P TPG",330,400);
  textSize(25);

 
 //triangle
  triangle(160, 115, 200, 5, 250, 115);
  //triangle(200, 100, 280, 15, 325, 150);
 
 //ears
  noStroke();
  fill(176, 90, 36);
 circle(60, 200, 30);
  circle(60, 220, 20);
   
  circle(340, 200, 30);
  circle(340, 220, 20);
  
  //earrings
  fill("000");
  circle(340, 220, 10);
  circle(60, 220, 10);

  //bubble gum
  if (drawbubble == true) {
  fill("pink");
  noStroke();
  ellipse(205,285,circleSize);
    
    //star
  if (star1 == true) {
  fill("yellow");
  noStroke();
  star(205, 285, 100, 50, 10);
    fill(0)
    textFont('Chalkduster', 30)
    text("POP!", 170, 300)
  }
}


function keyPressed() {
  if (key == 'b') {
    drawbubble = true; 
    //sound.play();
}

if (keyIsPressed) {
    if (key =='b'){
    circleSize = circleSize + 5;
  }
 else if (key =='d'){
      circleSize = circleSize - 5;
    }
 else if (key =='p'){
    star1=true;
 }}}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}}