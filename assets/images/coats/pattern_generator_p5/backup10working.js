
let values = {};

let features = {};

function setup(){
	angleMode(DEGREES)
	createCanvas(2400,1500)
	noLoop();

	draw();


}


function determineFeatures(){
	features.lengthType = random(['regular', 'crop']); //, 'front_crop',]);

	if (features.lengthType == 'regular'){
		values.coatLength = randint(700, 1000)
	} else if(features.lengthType == 'crop'){
		values.coatLength = randint(400,600)
	}


	features.hasSleeves = false//random([true, false]);
	features.neckline = random(['curve','line'])
	features.hasNeckDart = random([true, false]);



	features.hasCollar = random([true, false, false, false])
	if (features.hasCollar) { features.neckline = 'line'}

	features.sleeveType = random(['none', 'short', 'long'])
	features.hasSideWaist = (features.lengthType!='crop')


	features.hasFrontNeckCurve = true;//random([true, false]);
	features.frontNeckType ='line'//random(['line', 'line', 'line', 'vneck', 'bigScoop'])//, 'square'])//, 'lines']) //no lines


	if (features.frontNeckType == 'square' || features.frontNeckType == 'lines'){features.hasFrontNeckCurve = false}



}
// ██████╗ ██████╗  █████╗ ██╗    ██╗
// ██╔══██╗██╔══██╗██╔══██╗██║    ██║
// ██║  ██║██████╔╝███████║██║ █╗ ██║
// ██║  ██║██╔══██╗██╔══██║██║███╗██║
// ██████╔╝██║  ██║██║  ██║╚███╔███╔╝
// ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ ╚══╝╚══╝ 
                                  
function draw(){
	background(0)

	determineFeatures();
	makePattern();
	drawPattern();

	debugPrint()
}


function debugPrint(){
		print(features);
		print(values);
		print(back);
		print(front);
	
}


function drawPattern(){

	drawBack();
	drawFront();


	drawSleeves();




}

function drawFlipped(){
	//draw flipp
	push()
	translate(width,0)
	scale(-1,1)

	drawBack();
	drawFront();

	pop();
}

function makePattern(){
	makeBack();
	makeFront();
	makeSideWaists();

	makeSleeves();

}
//this doestn awork some realdosn


// ██████╗  █████╗  ██████╗██╗  ██╗
// ██╔══██╗██╔══██╗██╔════╝██║ ██╔╝
// ██████╔╝███████║██║     █████╔╝ 
// ██╔══██╗██╔══██║██║     ██╔═██╗ 
// ██████╔╝██║  ██║╚██████╗██║  ██╗
// ╚═════╝ ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝
                                

let back;
function makeBack(){
	makeBackBase();
	makeBackNeck();
	makeBackArmhole();
	makeBackNeckDart();


}

function makeBackNeck(){

	if( features.neckline == 'curve'){

		x = randint(back.sleeveIn.x+12, back.neckline.x-12)

		let yMax = map(x, back.sleeveIn.x, back.neckline.x, back.sleeveIn.y, back.neckline.y)
		y = randint (yMax +12, back.neckline.y - 12)


		back.necklineCurve = {
			x:x,
			y:y
		}
	}
}

function drawBackNeck(){
	if( features.neckline == 'curve'){
		drawCurvedShape( 	[ back.sleeveIn.x, back.sleeveIn.y,
						  	back.neckline.x, back.neckline.y,
						  back.necklineCurve.x, back.necklineCurve.y ])
	} else if (features.neckline == 'line'){
		//do nothing
	}
}


function makeBackBase(){
	//values = {}

	sleeveIn = {
		x: 200,
		y: 20
	}


	values.shoulderdx = randint(80,140);
	values.shoulderdy = randint(30,60);

	//if (features.hasSleeves == true) armholeLength+=10;

	sleeveOut = {
		x: sleeveIn.x - values.shoulderdx,
		y: sleeveIn.y +  values.shoulderdy 
	}


	values.armholedx = randint(50,70);
	values.armholedy = randint(260, 300)
	values.armholeLength = dist(0, 0, 	values.armholedx, 	values.armholedy)

	armpit = {
		x: sleeveOut.x - values.armholedx,
		y: sleeveOut.y + values.armholedy 
	}


	neckline = {
		x: sleeveIn.x + randint(200,250),
		y: sleeveIn.y + randint(100,150)
	}


	bottomIn = {
		x: neckline.x,
		y: sleeveIn.y + values.coatLength
	}

	bottomOut = {
		x: armpit.x + randint( -50, 50),
		y: bottomIn.y + randint (-30,30)
	}


	back = { sleeveIn: sleeveIn,
			 sleeveOut: sleeveOut,
			 armpit: armpit,
			 bottomOut: bottomOut,
			 bottomIn: bottomIn,
			 neckline: neckline}

	values.sidedx =  back.bottomOut.x - back.armpit.x
	values.sidedy =  back.bottomOut.x - back.armpit.x


}



function drawBackBase(){
	drawShape([ back.sleeveIn.x, back.sleeveIn.y,
				back.sleeveOut.x, back.sleeveOut.y,
				back.armpit.x, back.armpit.y,
				back.bottomOut.x, back.bottomOut.y,
				back.bottomIn.x, back.bottomIn.y,
				back.neckline.x, back.neckline.y])
}

function drawBack(){
	push();
	values.xOffsetBack = max(front.armpit.x, front.bottomOut.x) + 20 + values.xOffsetFront
	translate(values.xOffsetBack,0) 

	fill(255);
	drawBackBase();

	fill(0);
	drawBackNeck();
	drawBackArmhole();
	drawBackNeckDart();
	drawBackSideWaist();

	pop();

}

function makeBackNeckDart(){
	//  dx
	// 3--1
	//  \ | dx
	//   \|
	//    2
	if(features.hasNeckDart == true){

		dy = randint(40,300);
		dx = randint(10,100);

		x1= back.neckline.x
		y1= back.neckline.y
		y2= back.neckline.y+dy;
		x2= map(y2, back.neckline.y, back.bottomIn.y, back.neckline.x, back.bottomIn.x)
		x3= x1 - dx
		y3=	map(x3, back.sleeveIn.x, back.neckline.x, back.sleeveIn.y,back.neckline.y)

		back.neckDart = {
			x1: x1,
			y1: y1,
			x2: x2,
			y2: y2,
			x3: x3,
			y3: y3
		}

	}

}

function drawBackNeckDart(){
	if(features.hasNeckDart == true){
		drawShape([	back.neckDart.x1, back.neckDart.y1,
					back.neckDart.x2, back.neckDart.y2,
					back.neckDart.x3, back.neckDart.y3])

	}
}

function makeBackArmhole(){
	dy = randint(60, values.armholedy)
	dx = map(dy, 0, values.armholedy, 0, values.armholedx) + randint(0, values.armholedx)

	values.drawBackArmhole = {
		dx: dx,
		dy: dy
	}
	back.armhole = {
		x: back.sleeveOut.x + dx,
		y: back.sleeveOut.y + dy
	}
}

function drawBackArmhole(){
	drawCurvedShape([back.armpit.x, back.armpit.y,
					back.sleeveOut.x, back.sleeveOut.y,
					back.armhole.x, back.armhole.y])
}

// ███████╗██████╗  ██████╗ ███╗   ██╗████████╗
// ██╔════╝██╔══██╗██╔═══██╗████╗  ██║╚══██╔══╝
// █████╗  ██████╔╝██║   ██║██╔██╗ ██║   ██║   
// ██╔══╝  ██╔══██╗██║   ██║██║╚██╗██║   ██║   
// ██║     ██║  ██║╚██████╔╝██║ ╚████║   ██║   
// ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   
                                            

let front = {}
function makeFrontBase(){

	sleeveIn = {
		x: 120,
		y: back.sleeveIn.y
	}

	sleeveOut = {
		x: sleeveIn.x + values.shoulderdx,
		y: sleeveIn.y +  values.shoulderdy 
	}

	armpit = {
		x: sleeveOut.x + (back.sleeveOut.x - back.armpit.x),//values.armholedx,
		y: sleeveOut.y + values.armholedy 
	}


	necklinedx = randint(150, 250);

	values.xOffsetFront = abs(necklinedx)

	neckline = {
		x: sleeveIn.x - necklinedx, // randint(200,400),
		y: sleeveIn.y + randint(30,200)
	}


	bottomIn = {
		x: neckline.x,
		y: back.bottomIn.y
	}

	bottomOut = {
		x: armpit.x + (back.armpit.x - back.bottomOut.x),// + randint( -50, 50),
		y: bottomOut.y// + randint (-30,30)
	}


	front = { sleeveIn: sleeveIn,
		 sleeveOut: sleeveOut,
		 armpit: armpit,
		 bottomOut: bottomOut,
		 bottomIn: bottomIn,
		 neckline: neckline}

}

function drawFrontBase(){
	drawShape([ front.sleeveIn.x, 	front.sleeveIn.y,
				front.sleeveOut.x, 	front.sleeveOut.y,
				front.armpit.x,	 	front.armpit.y,
				front.bottomOut.x, 	front.bottomOut.y,
				front.bottomIn.x, 	front.bottomIn.y,
				front.neckline.x, 	front.neckline.y])
}


function makeFront(){
	makeFrontBase();
	makeFrontArmhole();
	makeFrontNeckline();
}

function makeFrontArmhole(){
	//weighter
	features.armholesTheSame = random([true, false, false])

	dx = values.drawBackArmhole.dx
	dy = values.drawBackArmhole.dy

	if(features.armholesTheSame == false){
		dx += randint(-45,15),
		dy += randint(-15,15)
	}

	front.armhole = {
		x: front.sleeveOut.x - dx,
		y: front.sleeveOut.y + dy
	}
}

function drawFrontArmhole(){
	drawCurvedShape([front.armpit.x, front.armpit.y,
					front.sleeveOut.x, front.sleeveOut.y,
					front.armhole.x, front.armhole.y])
}


function drawFront(){
	push();
	translate(values.xOffsetFront,0)

	fill(255);
	drawFrontBase();

	fill(0);
	// drawBackNeck();
	drawFrontArmhole();
	// drawBackNeckDart();
	drawFrontSideWaist();
	drawFrontNeckline();

	pop();
}



function makeFrontNeckline(){

	if( features.hasFrontNeckCurve == true){

		x = randint(front.sleeveIn.x+30, front.neckline.x-12)

		let yMax = map(x, front.sleeveIn.x, front.neckline.x, front.sleeveIn.y, front.neckline.y)
		y = randint (yMax -50, front.neckline.y - 12)


		front.necklineCurve = {
			x:x,
			y:y
		}
	} 


	if (features.frontNeckType == 'vneck'){

		dx1 = randint(40, 100)

		x1 = front.neckline.x + dx1 //randint(15,40);


		y1 = front.sleeveIn.y

		dy2 = randint (100,500);

		y2 = front.neckline.y + dy2

		x2 = front.neckline.x


		front.vneck = { x1:x1,
			y1:y1,
			x2:x2,
			y2:y2
		}
	} if (features.frontNeckType == 'bigScoop'){
		x1 = randint(30,50),
		y1 = randint(300,500)

		front.neckScoop= {
			x:x1, 
			y:y1
		}

	} if (features.frontNeckType == 'square'){
		front.neckSquareLength = randint( 120, front.sleeveIn.x - front.neckline.x);
	} if (features.frontNeckType == 'lines') {
		dx = randint(100,200)
		x1 = front.neckline.x + dx
		dy = randint(50,150)
		y1 = front.neckline.y + dy
		x2 = x1+ randint(40,100)
		front.neckLines = {x:x1, y:y1, x2:x2 }


	}
}

function drawFrontNeckline(){
	//fill(233,2,2)
	//['curve', 'line', 'vneck', 'bigScoop'])
	if (features.frontNeckType == 'lines'){
		drawShape([front.neckLines.x, front.neckline.y,
				front.neckLines.x, front.neckLines.y,
				front.neckLines.x2, front.sleeveIn.y,
				front.neckline.x, front.sleeveIn.y])
	}

	if( features.hasFrontNeckCurve == true){
		drawCurvedShape( 	[ front.sleeveIn.x, front.sleeveIn.y,
						  	front.neckline.x, front.neckline.y,
						  front.necklineCurve.x, front.necklineCurve.y ])
	} 
	if (features.frontNeckType == 'vneck'){
		drawShape([ front.vneck.x1, front.vneck.y1,
					front.vneck.x2, front.vneck.y2,
					front.neckline.x, front.neckline.y])

	}

	if (features.frontNeckType == 'square'){
		drawShape([front.neckline.x, front.neckline.y,
					front.neckline.x + front.neckSquareLength, front.sleeveIn.y,
					front.neckline.x + front.neckSquareLength, front.neckline.y])
	}

	if (features.frontNeckType == 'bigScoop'){
		drawCurvedShape([front.neckline.x, front.neckline.y,
			front.neckline.x-40, front.neckScoop.y,
			front.neckScoop.x, front.neckScoop.y,
			front.neckScoop.x, front.sleeveIn.y
			])
	}

	
}

// ██╗    ██╗ █████╗ ██╗███████╗████████╗
// ██║    ██║██╔══██╗██║██╔════╝╚══██╔══╝
// ██║ █╗ ██║███████║██║███████╗   ██║   
// ██║███╗██║██╔══██║██║╚════██║   ██║   
// ╚███╔███╔╝██║  ██║██║███████║   ██║   
//  ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝╚══════╝   ╚═╝   
                                      

function makeSideWaists(){
	if (features.hasSideWaist = true){
		dy =  randint(100, 300)
		dx = randint(20,dy/2)//map(dy, 0, values.sidedy, 0, values.sidedx) + randint(10,75)

		values.waist ={	dx : dx,
						dy : dy
	}

	back.waist = {x: back.armpit.x + dx,
				  y: back.armpit.y + dy}

	front.waist = {x: front.armpit.x - dx,
				   y: front.armpit.y + dy}
}
}

function drawFrontSideWaist(){
	print('drawfrontddwdwdawd')
	if (features.hasSideWaist = true){


		drawCurvedShape([front.armpit.x, front.armpit.y,
						front.bottomOut.x, front.bottomOut.y,
						front.waist.x, front.waist.y])

	}		
}
function drawBackSideWaist(){
	if (features.hasSideWaist = true){

		drawCurvedShape([back.armpit.x, back.armpit.y,
						back.bottomOut.x, back.bottomOut.y,
						back.waist.x, back.waist.y])


	}	
}

// ███████╗██╗     ███████╗███████╗██╗   ██╗███████╗███████╗
// ██╔════╝██║     ██╔════╝██╔════╝██║   ██║██╔════╝██╔════╝
// ███████╗██║     █████╗  █████╗  ██║   ██║█████╗  ███████╗
// ╚════██║██║     ██╔══╝  ██╔══╝  ╚██╗ ██╔╝██╔══╝  ╚════██║
// ███████║███████╗███████╗███████╗ ╚████╔╝ ███████╗███████║
// ╚══════╝╚══════╝╚══════╝╚══════╝  ╚═══╝  ╚══════╝╚══════╝
              
let sleeveFront = {}

function makeSleeves(){
	makeSleeveFront();
	makeSleeveBack();
}

let sleeveBack = {}      

function makeSleeveBack(){
	if(values.hasSleeves == true){
		values.sleeveAngle =randint(145,150)
	
		print('SLEEVEABGLE' + values.sleeveAngle)
	
		print(features.sleeveType)
		if (features.sleeveType == 'short'){
			values.sleeveLength = randint(80,150)
	
		} else if(features.sleeveType == 'long'){
			values.sleeveLength = randint(300,400)
		}
	
		sleeveBack.armhole = {	x: back.armhole.x,	y:back.armhole.y}
		sleeveBack.armpit =	{	x:back.armpit.x, 	y:back.armpit.y}
		sleeveBack.shoulder = {	x:back.sleeveOut.x,	y:back.sleeveOut.y}
	
	
		v = p5.Vector.fromAngle(values.sleeveAngle, values.sleeveLength);
	  	vx = v.x;
	  	vy = v.y;
	
	  	sleeveBack.holeTop = {x:sleeveBack.shoulder.x-abs(vx),
	  						  y:sleeveBack.shoulder.y+abs(vy)}
	
		bottomAngle = values.sleeveAngle+randint(5,10)
	
		v2 = p5.Vector.fromAngle(values.sleeveAngle, values.sleeveLength);
	  	v2x = v2.x;
	  	v2y = v2.y;  	
	
	
	  	sleeveBack.holeBottom = {x:sleeveBack.armpit.x-abs(v2x),
	  							 y:sleeveBack.armpit.y+abs(v2y)}
	}
}

function drawSleeveBack(){
	if(values.hasSleeves){
		print('drawSleve')
		print(sleeveBack)
	  	
		//drawBackArmhole();
		drawCurvedShape([sleeveBack.armpit.x, 	sleeveBack.armpit.y,
						sleeveBack.shoulder.x, 	sleeveBack.shoulder.y,
						sleeveBack.armhole.x, 	sleeveBack.armhole.y])

		drawShape([sleeveBack.armpit.x, sleeveBack.armpit.y,
					sleeveBack.shoulder.x, sleeveBack.shoulder.y,
					sleeveBack.holeTop.x, sleeveBack.holeTop.y,
					sleeveBack.holeBottom.x, sleeveBack.holeBottom.y])

		fill(255)
		 circle(sleeveBack.shoulder.x, sleeveBack.shoulder.y,12)
		}
}

function drawSleeves(){
	values.xOffsetSleeves = max(back.bottomIn.x, back.neckline.x) + 20 + values.xOffsetBack;

	push()
	translate(values.xOffsetSleeves,20);
	drawSleeveBack();
	pop();
}

function makeSleeveFront(){

}

function drawSleeveFront(){

}

function drawShape(list, name=0){
	if (name!=0){console.log(name)}


	beginShape();
	for(let i = 0; i < list.length; i+=2){
		vertex(list[i], list[i+1]);
	}
	endShape();

}


function randint(x, y){
	return int(random(x, y))
}



function drawCurvedShape(list, name = 0){

	// if (name!=0 && drawDebug==true){console.log(name)}

	beginShape();
	for(let i = 0; i < list.length; i+=2){
		curveVertex(list[i], list[i+1]);


	}
	//curveVertex(list[0], list[1]);
	//curveVertex(list[0], list[1]);

	endShape(CLOSE);

}
function keyPressed(){
	print('keyPressed')
	print(month() + '_' + day() + '_' + hour() + "_" + minute() +  "_" + second())
	//save("coat" + month() + '_' + day() + '_' + hour() + "_" + minute() +  "_" + second() + ".png")

	draw();
	print(features)
	print(back)
}













// //
// function makeCoatTails(){
// 	if (hasCoatTails){

// 	}
// }

// function drawCoatTails(){
// 	if (hasCoatTails){

// 	}

// }


// function makeBottomDart(){

// }

// function drawBottomDart(){

// }



// //collar has flat back neckline & flat front neckline
// function makeCollar(){

// }

// function drawCollar(){}


// //has flat front cut out
// function makeLapel(){}
