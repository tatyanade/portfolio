let backBase = [];

function setup(){
  //
 
 createCanvas(2400, 1500);
 //createCanvas(1200, 750);
  drawPattern();
 
}

function drawCurvedShape( ){
  beginShape();
  
  
  endShape();
}


function draw(){
  drawPattern();
}

function drawPattern(){
  background(0);
 stroke(255);
 fill(255);
 
 


 //back
 bdx = 10; //back dx -- x shift
 beginShape();
 
 bSleeveInX = 200;
 bSleeveInY = 25;
 
 bSleeveOutX = 100;
 bSleeveOutY = 70;
 
 bArmpitX = 50;
 bArmpitY = 340;
 
 bBottomOutX = 0;
 bBottomOutY = 950;
 
 bBottomInX = 430;
 bBottomInY = 950;
 
 bNecklineX = 430;
 bNecklineY = 150;

//draw in white the basic hull of pattern 
 // beginShape();
 // vertex(bSleeveInX,bSleeveInY);
 // vertex(bSleeveOutX,bSleeveOutY);
 // vertex(bArmpitX, bArmpitY);
 // vertex(bBottomOutX, bBottomOutY);
 // vertex(bBottomInX, bBottomInY);
 // vertex(bNecklineX, bNecklineY);
 // endShape();


 // (bSleeveInX,bSleeveInY),
 // (bSleeveOutX,bSleeveOutY),
 // (bArmpitX, bArmpitY),
 // (bBottomOutX, bBottomOutY),
 // (bBottomInX, bBottomInY),
 // (bNecklineX, bNecklineY)

 backBase = [ (bSleeveInX,bSleeveInY),
 			  (bSleeveOutX,bSleeveOutY),
 			  (bArmpitX, bArmpitY),
			  (bBottomOutX, bBottomOutY),
 			  (bBottomInX, bBottomInY),
			  (bNecklineX, bNecklineY)]


drawShape(backBase);
 
 //draw in black armhole, to 'subtract' it from the pattern
 
 bArmholeX = bSleeveOutX + int(random(20, 80));
 bArmholeY = int(random(bSleeveOutY +12, bArmpitY-12));
 
 
 beginShape();
 fill(255,0,0);
 stroke(255,0,0);
 curveVertex(bArmpitX-5, bArmpitY);
  curveVertex(bSleeveOutX-5, bSleeveOutY);
  curveVertex(bArmholeX, bArmholeY);
  curveVertex(bArmpitX-5, bArmpitY);
 curveVertex(bArmpitX-5, bArmpitY);
 endShape();
 // 
 circle(bSleeveOutX, bSleeveOutY,12);
 circle(bArmholeX, bArmholeY,12);
 circle(bArmpitX, bArmpitY,12);

  
  noLoop();
}

function drawCurvedShape( points){
	beginShape();



	endShape();
}

function drawShape( points){

beginShape();

for ( i = 0; i < points.length ; i+=2 ){
	vertex( points[i], points[i+1]);
	console.log(point)
}

 // vertex(bSleeveInX,bSleeveInY);
 // vertex(bSleeveOutX,bSleeveOutY);
 // vertex(bArmpitX, bArmpitY);
 // vertex(bBottomOutX, bBottomOutY);
 // vertex(bBottomInX, bBottomInY);
 // vertex(bNecklineX, bNecklineY);
 endShape();


}