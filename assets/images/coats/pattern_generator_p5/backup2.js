let backBase;

function setup(){
  //
 
 createCanvas(2400, 1500);
 //createCanvas(1200, 750);
 strokeWeight(3);
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


 drawShape([ bSleeveInX,bSleeveInY
			,bSleeveOutX,bSleeveOutY
			,bArmpitX, bArmpitY
			,bBottomOutX, bBottomOutY
			,bBottomInX, bBottomInY
			,bNecklineX, bNecklineY])

 

 //draw in black  to 'subtract' it from the pattern
  
 fill(0);
 stroke(0)
 strokeWeight(2)

//draws arm cutout
 bArmholeX = bSleeveOutX + int(random(20, 80));
 bArmholeY = int(random(bSleeveOutY +12, bArmpitY-12));
 
 drawCurvedShape([bArmpitX, bArmpitY, bSleeveOutX, bSleeveOutY, bArmholeX, bArmholeY])


//draws neckline cutout

bNecklineCurveX = random(bSleeveInX+12, bNecklineX-12)
let yMax = map(bNecklineCurveX, bSleeveInX, bNecklineX, bSleeveInY, bNecklineY )
bNecklineCurveY = random(yMax,  bNecklineY)
  
 fill(255, 0, 0)
drawCurvedShape([ bSleeveInX, bSleeveInY, bNecklineX, bNecklineY, bNecklineCurveX, bNecklineCurveY]);
  
 noLoop();







}

function drawShape(list){

	//  beginShape();
 // vertex(bSleeveInX,bSleeveInY);
 // vertex(bSleeveOutX,bSleeveOutY);
 // vertex(bArmpitX, bArmpitY);
 // vertex(bBottomOutX, bBottomOutY);
 // vertex(bBottomInX, bBottomInY);
 // vertex(bNecklineX, bNecklineY);
 // endShape();
	beginShape();
	for(let i = 0; i < list.length; i+=2){
		vertex(list[i], list[i+1]);
	}
	endShape();

}

function drawCurvedShape(list){
	beginShape();
	for(let i = 0; i < list.length; i+=2){
		curveVertex(list[i], list[i+1]);
	}
	curveVertex(list[0], list[1]);
	curveVertex(list[0], list[1]);

	endShape(CLOSE);

}