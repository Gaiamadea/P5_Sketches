

  function setup() {
  
  createCanvas (displayWidth, displayHeight);
  pixelDensity(4);
  background (239,241,241);
  noStroke();
  rectMode(CENTER);
  angleMode(RADIANS);

  }

  function draw() {
  
  cursor(CROSS);
  
  // Text
  
  fill(0);
  smooth();
  textSize(15);
  textFont('Futura PT');
  text("MODERNIST COMPOSITIONS ________ Instructions: Move your cursor anywhere on the display and press any of the following keys '1' '2' '3' '4' '5' '6' '7' '8' '9''0'. Press 'S' to save or reload the page to restart your composition.  ", 50, 50);

  }



  function keyTyped() { 
  
  if (key === '1') { //big black circle
  fill (0);
  ellipse(mouseX, mouseY,300,300);
  
  }
  
  if (key=== '4') { // transparent circle
  fill(255,255,255,90)  
  ellipse(mouseX, mouseY, 100,100);
  
  } 
  
  if (key === '2') { // vertical blue rectangle
  fill(93,124,255);
  rect(mouseX, mouseY,15,150);
  
  }
  
  if (key === '3') { // horizonal red rectangle
  fill(255,51,0);
  rect(mouseX, mouseY,500,2);
  
  }
  
  if (key=== '4') { // transparent circle
  fill(255,255,255,90)  
  ellipse(mouseX, mouseY, 100,100);
  
  }
  
  if (key === '5') { // green arc
  fill(36,55,28);
  arc(mouseX, mouseY, 200, 200, PI, TWO_PI);
  
  }
  
  if (key === '6') { // dark blue horizontal rectangle
  fill(0,0,102);
  rect(mouseX, mouseY,200,30);
  
  }
  
  if (key === '7') { // small yellow arc
  fill(243,224,51);
  arc(mouseX, mouseY, 100, 100, PI, TWO_PI);
  
  
  }
  
  if (key === '8') { // dark green long line
  fill(36,55,28);
  rect(mouseX,mouseY,5,900);
 
  }
  
  if (key === '9') { // transparent square
  fill(255,255,255,80)
  rect(mouseX,mouseY,400,400);
  
  }
  
  if (key === '0') {
  fill(255,51,0);
  rect(mouseX, mouseY,200,100);
  
  
  
  }
  
  
  if (key === 'q') {
  
  
  }
  
  if (key === 'w') {
  
  
  }
  
  
  if (key === 'e') {
  
  
  }
  
  if (key === 'r') {
  
  
  }
  
  
  if (key === 't') {
  
  
  }
  
  if (key === 'y') {
  
  
  }
  
  if (key === 'u') {
  
  
  }
  
  if (key === 'i') {
  
  
  }
  
  if (key === 'o') {
  
  
  }
  
  if (key === 'p') {
  
  
  }
  
  
  if (key === 's') { // save the comopsition
  save('laszlocomposition.png');
  
  
  }
  
  
  
}





