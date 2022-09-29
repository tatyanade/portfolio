let backBase;

let backConnecionLength;
let sleeveConnectionLength;











let	 bSleeveInX 
let	 bSleeveInY 
	 	
let	 bSleeveOutX 
let	 bSleeveOutY
	 
let	 bArmpitX 	
let	 bArmpitY 	
	 
let	 bBottomOutX 
let	 bBottomOutY 
	 
let	 bBottomInX	
let	 bBottomInY	
	 
let	 bNecklineX 
let	 bNecklineY 


let fWaistX;
let	fWaistY;

let	 bArmholeX;
let	 bArmholeY;

let	 fArmholeX;
let	 fArmholeY;

let armholedx;
let armholedy;

let bNecklineCurveX;
let bNecklineCurveY;

let waistCurvedx;
let waistCurvedy;


let bWaistX;
let bWaistY;

let hasBackSnipNeck;

function setup(){
  //
 
 createCanvas(2400, 1500);
 //createCanvas(1200, 750);
 strokeWeight(3);
 
}

function draw(){
	background(0);


	generatePatternBack();
	generatePatternFront();

	push();
	translate(500,0)
	drawPatternBack();
	pop();


	push();
	translate(30,0);
	drawPatternFront();
	pop();


}



function generatePatternFront(){
	fSleeveInX	 = 120;
	fSleeveInY 	= 50;

	fSleeveOutX = 280;
	fSleeveOutY = bSleeveOutY;

	fArmpitX 	= 340;
	fArmpitY 	= bArmpitY;

	fBottomOutX = 420;
	fBottomOutY = bBottomOutY;

	fBottomInX	 = 0
	fBottomInY	 = 900

	fNecklineX 	= 0;
	fNecklineY 	= 150;	

	fArmholeX = fSleeveOutX - armholedx;
	fArmholeY = fSleeveOutY - armholedy + int(random(-20,20));

	fWaistX = fArmholeX + waistCurvedx
	fWaistY = fArmholeY + waistCurvedy
}


function drawPatternFront(){
	stroke(255);
	fill(255);
	stroke(0)
	strokeWeight(3)
	drawShape([fSleeveInX, fSleeveInY, fSleeveOutX, fSleeveOutY, fArmpitX, fArmpitY, fBottomOutX, fBottomOutY, fBottomInX, fBottomInY, fNecklineX, fNecklineY])

	fill(0);

	//fill(245,0,0)


	drawCurvedShape([fArmpitX, fArmpitY, fSleeveOutX, fSleeveOutY, fArmholeX, fArmholeY])

	drawCurvedShape([fArmpitX, fArmpitY, fBottomOutX, fBottomOutY, fWaistX, fWaistY])


}



function generatePatternBack(){

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



	 //curve for arm hole
	 bArmholeX = bSleeveOutX + int(random(20, 80));
	 bArmholeY = int(random(bSleeveOutY +12, bArmpitY-12));

	 armholedx = bArmholeX- bSleeveOutX ;
	 armholedy = bSleeveOutY - bArmholeY;




	//draws neckline cutout

	bNecklineCurveX = random(bSleeveInX+12, bNecklineX-12)
	let yMax = map(bNecklineCurveX, bSleeveInX, bNecklineX, bSleeveInY, bNecklineY )
	bNecklineCurveY = random(yMax,  bNecklineY)



	//waist
		bWaistY = int(random(bArmpitY+60,bBottomOutY-50))
	let xLimit = map(bWaistY, bArmpitY, bBottomOutY, bArmpitX, bBottomOutX)
	bWaistX = xLimit + int(random(0, 100))



	waistCurvedx = bArmpitX - bWaistX
	waistCurvedy = bWaistY - bArmpitY

	//snip some neck
	if(random(0,100) > 50){
		hasBackSnipNeck = true;
		bcutx1 = bNecklineX - int(random(0,100))
		bcuty1 = bSleeveInY;

		bcutx2 = bNecklineX;
		bcuty2 = bNecklineY + int(random(0,300))

		bcutx3 = bNecklineX;
		bcuty3 = bSleeveInY
	}

}



function drawPatternBack(){
	 stroke(255);
	 fill(255);
	  stroke(0)
	 strokeWeight(3)
	 

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

	 
	 drawCurvedShape([bArmpitX, bArmpitY, bSleeveOutX, bSleeveOutY, bArmholeX, bArmholeY])


	//draws neckline cutout

	drawCurvedShape([ bSleeveInX, bSleeveInY, bNecklineX, bNecklineY, bNecklineCurveX, bNecklineCurveY]);
	  



	//cutout waist
	drawCurvedShape([bArmpitX, bArmpitY, bBottomOutX, bBottomOutY, bWaistX, bWaistY])





	if(hasBackSnipNeck){
		drawShape([bcutx1, bcuty1, bcutx2, bcuty2, bcutx3, bcuty3])
	}


	// //waist indent on back
	// if( random(0, 100) > 0){
		 
	// 	bcentery1 = random(bArmpitY + 50, bBottomOutY - 150)
	// 	bcenterx1 = map(bcentery1, bNecklineY, bBottomInY, bNecklineX, bBottomInX)

	// 	bcentery3 = bcentery1 + int(random(0, 300));
	// 	bcenterx3 = map(bcentery3, bNecklineY, bBottomInY, bNecklineX, bBottomInX)

	// 	bcentery2 = int(random(bcentery1 + 75, bcentery3 - 75))
	// 	bcenterx2 = map(bcentery2, bNecklineY, bBottomInY, bNecklineX, bBottomInX) - int(random(0, (bcentery3-bcentery1)/3))

	// 	//drawCurvedShape([bcenterx3, bcentery3, bcenterx1, bcentery1,bcenterx2, bcentery2])

	// 	drawCurvedShape([bcenterx3, bcentery3- 10,bcenterx3, bcentery3, bcenterx1+10, bcentery1, bcenterx1, bcentery1,bcenterx2, bcentery2])

	// }









	noLoop();







}

function drawShape(list){



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