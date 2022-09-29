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
  drawPatternBack();
}

function drawPatternBack(){
  background(0);
 stroke(255);
 fill(255);
  stroke(0)
 strokeWeight(3)
 


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
 
 bBottomInX = 430 + int(random(-100,0));
 bBottomInY = 950 + int(random(10,80));
 
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


//draws arm cutout
 bArmholeX = bSleeveOutX + int(random(20, 80));
 bArmholeY = int(random(bSleeveOutY +12, bArmpitY-12));
 
 drawCurvedShape([bArmpitX, bArmpitY, bSleeveOutX, bSleeveOutY, bArmholeX, bArmholeY])


//draws neckline cutout

bNecklineCurveX = random(bSleeveInX+12, bNecklineX-12)
let yMax = map(bNecklineCurveX, bSleeveInX, bNecklineX, bSleeveInY, bNecklineY )
bNecklineCurveY = random(yMax,  bNecklineY)
  
 //fill(255, 0, 0)
drawCurvedShape([ bSleeveInX, bSleeveInY, bNecklineX, bNecklineY, bNecklineCurveX, bNecklineCurveY]);
  



//cutout waist
bWaistY = int(random(bArmpitY+60,bBottomOutY-50))
let xLimit = map(bWaistY, bArmpitY, bBottomOutY, bArmpitX, bBottomOutX)
bWaistX = xLimit + int(random(0, 100))

drawCurvedShape([bArmpitX, bArmpitY, bBottomOutX, bBottomOutY, bWaistX, bWaistY])





//snip some neck
if(random(0,100) > 50){
	bcutx1 = bNecklineX - int(random(0,100))
	bcuty1 = bSleeveInY;

	bcutx2 = bNecklineX;
	bcuty2 = bNecklineY + int(random(0,300))

	bcutx3 = bNecklineX;
	bcuty3 = bSleeveInY
	drawShape([bcutx1, bcuty1, bcutx2, bcuty2, bcutx3, bcuty3])
}


//waist indent on back
if( random(0, 100) > 0){
	 
	bcentery1 = random(bArmpitY + 50, bBottomOutY - 150)
	bcenterx1 = map(bcentery1, bNecklineY, bBottomInY, bNecklineX, bBottomInX)

	bcentery3 = bcentery1 + int(random(0, 300));
	bcenterx3 = map(bcentery3, bNecklineY, bBottomInY, bNecklineX, bBottomInX)

	bcentery2 = int(random(bcentery1 + 75, bcentery3 - 75))
	bcenterx2 = map(bcentery2, bNecklineY, bBottomInY, bNecklineX, bBottomInX) - int(random(0, (bcentery3-bcentery1)/3))

	//drawCurvedShape([bcenterx3, bcentery3, bcenterx1, bcentery1,bcenterx2, bcentery2])

	drawCurvedShape([bcenterx3, bcentery3- 10,bcenterx3, bcentery3, bcenterx1+10, bcentery1, bcenterx1, bcentery1,bcenterx2, bcentery2])

}









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