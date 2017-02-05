

function setup(){
	createCanvas(768,768);
	rectMode(CENTER);	
	angleMode(RADIANS)
	
 
	
}

function draw(){
	background (239,241,241);

	fill(0);
  ellipse(300,300,400,400);
  
  fill(255,255,255);
  ellipse(450,600,100,100);
  
  push();
  translate(479,300);
  rotate(radians(frameCount));
  fill(255);
  arc(0,0, 280, 280, PI, TWO_PI);
  pop();
  
  push();
  translate(200,300);
  rotate(radians(frameCount));
  fill(255,51,0);
	rect(0,0, 5, 1400);
	pop();
  
  
  push();
  translate(700,70);
  rotate(radians(frameCount));
  fill(93,124,255);
  arc (0,0, 100, 100, PI, TWO_PI);
  pop();
  
 
  translate(400, 600); 
	rotate(radians(frameCount));
	noStroke()
  fill(255,51,0);
	rect(0, 0, 5, 700);
	
	translate(10, 60); 
	rotate(radians(frameCount));
	noStroke();
  fill(93,124,255);
	rect(0, 0, 30, 200);
	
	translate(20, 300); 
	rotate(radians(frameCount));
	noStroke();
  fill (36,55,28);
	rect(0, 0, 20, 800);

	
	
}