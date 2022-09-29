
let values = {};
//coatlength
// values.armholedx = r
// values.armholedy = r
// values.armholeLength



	// values.shoulderdx = randint(80,140);
	// values.shoulderdy = randint(30,60);

let features = {};
//lengthType
//hasSleeves
function setup(){

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


	features.hasSleeves = random([true, false]);
	features.neckline = random(['curve','line', 'curve'])
	features.hasNeckDart = random([true, false]);


	features.hasCollar = random([true, false, false, false])
	if (features.hasCollar) { features.neckline = 'line'}



}
// ██████╗ ██████╗  █████╗ ██╗    ██╗
// ██╔══██╗██╔══██╗██╔══██╗██║    ██║
// ██║  ██║██████╔╝███████║██║ █╗ ██║
// ██║  ██║██╔══██╗██╔══██║██║███╗██║
// ██████╔╝██║  ██║██║  ██║╚███╔███╔╝
// ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ ╚══╝╚══╝ 
                                  
function draw(){
		determineFeatures();
		makePattern();
		drawPattern();

		print(features);
		print(values);
		print('back')
		print(back);
		print('front')
		print(front);
	
}



function drawPattern(){
	background(0)

	drawBack();
	drawFront();

	drawPattern();

}


function makePattern(){
	makeBack();
	makeFront();

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
	xOffset = max(front.armpit.x, front.bottomOut.x) + 100
	translate(xOffset,0) 

	fill(255);
	drawBackBase();

	fill(0);
	drawBackNeck();
	drawBackArmhole();
	drawBackNeckDart();

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


	neckline = {
		x: randint(10,30),
		y: sleeveIn.y + randint(30,50)
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
	translate(30,0)

	fill(255);
	drawFrontBase();

	fill(0);
	// drawBackNeck();
	drawFrontArmhole();
	// drawBackNeckDart();

	pop();
}



function keyPressed(){
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

	x1 = back.armpit.x
	y1 = back.armpit.y
	x2 = back.armhole.x
	y2 = back.armhole.y
	x3 = back.sleeveOut.x
	y3 = back.sleeveOut.y

	sleeveBack.attatchment = {
		x1:x1,
		x2:x2,
		x3:x3,
		y1:y1,
		y2:y2,
		y3:y3
	}
}

function drawSleeveBack(){
	fill(0,255,0)

	//drawCurvedShape()

}

function drawSleeves(){
	xOffset = max(back.bottomOut.x, back.armpit.x) + 100;

	push()
	translate();
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
	curveVertex(list[0], list[1]);
	curveVertex(list[0], list[1]);

	endShape(CLOSE);


	// for(let i = 0; i < list.length; i+=2){
	// 	stroke(0,0,255);
	// 	fill(0,255,255);
	// 	circle(list[i], list[i+1], 10);

	// 	fill(0)
	// 	stroke(0)
	
	// }

	// if (name!=0 && drawDebug==true){console.log(name + ' done')}
}