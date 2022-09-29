function setup(){
	createCanvas(2400,1400)
	noLoop()	
}

let pattern = {}

function draw(){
	background(0)
	makePattern();
	drawPattern()
}

function makePattern(){
	pattern = {}
	getValues();
	pattern.front = {}
	pattern.back = {}
	makeBody();
}



function drawPattern(){
	print('drawPattern')
	drawBody()
	drawCoattails()
	drawLapels()
	drawSleeves()
}


function makeBody(){
	makeBases();
	makeArmholes();
}

function makeBases(){
	pattern.body = {}

	neckline = //{x:0, y: random(160,180)}



	pattern.body.armhole = {dx:random(100,130), 
							dy:random(150,280)}
	pattern.body.frontNeckline = {dx:random(60,200), 
								  dy:random(40,50)}
	pattern.body.backNeckline= {dx:random(200,300),
								dy:random(10,40)}
	pattern.body.sleeve = {dx:random(80,130) ,dy:random(0,50)}


	neckline ={	x:0, 
			 	y:pattern.body.frontNeckline.dy}
	sleeveIn = {x:pattern.body.frontNeckline.dx, 
				y:0} 
	sleeveOut = {x:sleeveIn.x+ pattern.body.sleeve.dx,
				 y:sleeveIn.y+ pattern.body.sleeve.dy}
	armpit= {	x:sleeveOut.x +pattern.body.armhole.dx,
				y:sleeveOut.y +pattern.body.armhole.dy }
	bottomOut ={x:armpit.x,
				y:pattern.len} 
	bottomIn ={	x:0,
				y:pattern.len}

	pattern.front={armpit:armpit, bottomIn:bottomIn, bottomOut:bottomOut, neckline:neckline, sleeveIn:sleeveIn, sleeveOut:sleeveOut}

	pattern.front.width = (max([armpit.x,sleeveOut.x, bottomOut.x]) - min(bottomIn.x, neckline.x))
 

	bottomOut =	{x:0,
				y:pattern.len}
	armpit= 	{x:0, //random(0,100),
				 y:pattern.body.armhole.dy + pattern.body.sleeve.dy}
	sleeveOut = {x:armpit.x + pattern.body.armhole.dx,
				 y:pattern.body.sleeve.dy}
	sleeveIn = { x:sleeveIn.x+ pattern.body.sleeve.dx,
				 y:0}
	neckline = 	{x:sleeveIn.x + pattern.body.backNeckline.dx,
				 y:sleeveIn.y + pattern.body.backNeckline.dy}
	bottomIn = { x:neckline.x,
				 y:bottomOut.y}


	pattern.back={armpit:armpit, bottomIn:bottomIn, bottomOut:bottomOut, neckline:neckline, sleeveIn:sleeveIn, sleeveOut:sleeveOut}

}

let padding=30
function drawFront(){
	push()
	translate(padding,padding)

	drawFrontBase()
	drawFrontArmhole()

	pop()
}

function drawFrontBase(){
	print('dfb')
	fill(255)
	drawShape([ pattern.front.sleeveIn.x, 	pattern.front.sleeveIn.y,
				pattern.front.sleeveOut.x, 	pattern.front.sleeveOut.y,
				pattern.front.armpit.x,	 	pattern.front.armpit.y,
				pattern.front.bottomOut.x, 	pattern.front.bottomOut.y,
				pattern.front.bottomIn.x, 	pattern.front.bottomIn.y,
				pattern.front.neckline.x, 	pattern.front.neckline.y])
}
function drawBackBase(){
	fill(255)
	print('dbb')
	drawShape([ pattern.back.sleeveIn.x, 	pattern.back.sleeveIn.y,
				pattern.back.sleeveOut.x, 	pattern.back.sleeveOut.y,
				pattern.back.armpit.x,	 	pattern.back.armpit.y,
				pattern.back.bottomOut.x, 	pattern.back.bottomOut.y,
				pattern.back.bottomIn.x, 	pattern.back.bottomIn.y,
				pattern.back.neckline.x, 	pattern.back.neckline.y])

}

function drawBack(){
	fill(255)
	push()
	translate(padding*2 + pattern.front.width,padding)

	drawBackBase()
	drawBackArmhole()

	pop()
}

function makeBack(){

}


function drawBody(){
	drawFront()
	drawBack()
}

function getValues(){
	pattern.attributes = {}

	pattern.len = random(450, 1350)

	if(pattern.len  < 500) { pattern.lenType = 'short'}
	else if(pattern.len > 700) { pattern.lenType =  'long'}
	else { pattern.lenType = 'normal'}


}

function makeBack(){ 
}

// ███╗   ██╗███████╗ ██████╗██╗  ██╗██╗     ██╗███╗   ██╗███████╗
// ████╗  ██║██╔════╝██╔════╝██║ ██╔╝██║     ██║████╗  ██║██╔════╝
// ██╔██╗ ██║█████╗  ██║     █████╔╝ ██║     ██║██╔██╗ ██║█████╗  
// ██║╚██╗██║██╔══╝  ██║     ██╔═██╗ ██║     ██║██║╚██╗██║██╔══╝  
// ██║ ╚████║███████╗╚██████╗██║  ██╗███████╗██║██║ ╚████║███████╗
// ╚═╝  ╚═══╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝╚═╝  ╚═══╝╚══════╝
                                                               

function makeNeckline(){

}

function drawNecklines(){

}



//  █████╗ ██████╗ ███╗   ███╗██╗  ██╗ ██████╗ ██╗     ███████╗███████╗
// ██╔══██╗██╔══██╗████╗ ████║██║  ██║██╔═══██╗██║     ██╔════╝██╔════╝
// ███████║██████╔╝██╔████╔██║███████║██║   ██║██║     █████╗  ███████╗
// ██╔══██║██╔══██╗██║╚██╔╝██║██╔══██║██║   ██║██║     ██╔══╝  ╚════██║
// ██║  ██║██║  ██║██║ ╚═╝ ██║██║  ██║╚██████╔╝███████╗███████╗███████║
// ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝╚══════╝


function makeArmholes(){
//	pattern.armholes.dx = random(0,pattern.armholeHeight)
	
	// pattern.body.armhole = {dx:random(100,130), 
	// 						dy:random(150,280)}

	dy = randint(60,pattern.body.armhole.dy)
	dx = map(dy, 0, pattern.body.armhole.dy, 0, pattern.body.armhole.dx) + randint(0, 30)

	pattern.armholes.dx = dx
	pattern.armholes.dy = dy

	values.drawBackArmhole = {
		dx: dx,
		dy: dy
	}

	back.armhole = {
		x: back.sleeveOut.x + dx,
		y: back.sleeveOut.y + dy
	}

}

function drawFrontArmhole(){

}

function drawBackArmhole(){

}

// ██╗    ██╗ █████╗ ██╗███████╗████████╗ ██████╗██╗   ██╗██████╗ ██╗   ██╗███████╗
// ██║    ██║██╔══██╗██║██╔════╝╚══██╔══╝██╔════╝██║   ██║██╔══██╗██║   ██║██╔════╝
// ██║ █╗ ██║███████║██║███████╗   ██║   ██║     ██║   ██║██████╔╝██║   ██║█████╗  
// ██║███╗██║██╔══██║██║╚════██║   ██║   ██║     ██║   ██║██╔══██╗╚██╗ ██╔╝██╔══╝  
// ╚███╔███╔╝██║  ██║██║███████║   ██║   ╚██████╗╚██████╔╝██║  ██║ ╚████╔╝ ███████╗
//  ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝╚══════╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝  ╚═╝  ╚═══╝  ╚══════╝


function makeWaistCurve(){

}

function drawWaistCurve(){

}


// ██████╗  █████╗ ██████╗ ████████╗███████╗
// ██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔════╝
// ██║  ██║███████║██████╔╝   ██║   ███████╗
// ██║  ██║██╔══██║██╔══██╗   ██║   ╚════██║
// ██████╔╝██║  ██║██║  ██║   ██║   ███████║
// ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝
                                         
function makeBackDart(){

}

function makeBackWaistDarts(){

}

function makeBackBottomDarts(){

}

function makeFrontWaistDarts(){

}

function drawBackDarts(){

}

function drawFrontDarts(){}
// ██╗      █████╗ ██████╗ ███████╗██╗     ███████╗
// ██║     ██╔══██╗██╔══██╗██╔════╝██║     ██╔════╝
// ██║     ███████║██████╔╝█████╗  ██║     ███████╗
// ██║     ██╔══██║██╔═══╝ ██╔══╝  ██║     ╚════██║
// ███████╗██║  ██║██║     ███████╗███████╗███████║
// ╚══════╝╚═╝  ╚═╝╚═╝     ╚══════╝╚══════╝╚══════╝


function makeLapels(){

}
function drawLapels(){

}

//  ██████╗ ██████╗  █████╗ ████████╗████████╗ █████╗ ██╗██╗     ███████╗
// ██╔════╝██╔═══██╗██╔══██╗╚══██╔══╝╚══██╔══╝██╔══██╗██║██║     ██╔════╝
// ██║     ██║   ██║███████║   ██║      ██║   ███████║██║██║     ███████╗
// ██║     ██║   ██║██╔══██║   ██║      ██║   ██╔══██║██║██║     ╚════██║
// ╚██████╗╚██████╔╝██║  ██║   ██║      ██║   ██║  ██║██║███████╗███████║
//  ╚═════╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝      ╚═╝   ╚═╝  ╚═╝╚═╝╚══════╝╚══════╝
//                                                                       

function drawCoattails(){

}

function makeCoattails(){
	fill(0)

}

// ███████╗██╗     ███████╗███████╗██╗   ██╗███████╗███████╗
// ██╔════╝██║     ██╔════╝██╔════╝██║   ██║██╔════╝██╔════╝
// ███████╗██║     █████╗  █████╗  ██║   ██║█████╗  ███████╗
// ╚════██║██║     ██╔══╝  ██╔══╝  ╚██╗ ██╔╝██╔══╝  ╚════██║
// ███████║███████╗███████╗███████╗ ╚████╔╝ ███████╗███████║
// ╚══════╝╚══════╝╚══════╝╚══════╝  ╚═══╝  ╚══════╝╚══════╝
//                                                          

function makeSleeves(){


}

function drawSleeves(){
	fill(255)

}

// ██████╗ ██╗   ██╗████████╗████████╗ ██████╗ ███╗   ██╗███████╗
// ██╔══██╗██║   ██║╚══██╔══╝╚══██╔══╝██╔═══██╗████╗  ██║██╔════╝
// ██████╔╝██║   ██║   ██║      ██║   ██║   ██║██╔██╗ ██║███████╗
// ██╔══██╗██║   ██║   ██║      ██║   ██║   ██║██║╚██╗██║╚════██║
// ██████╔╝╚██████╔╝   ██║      ██║   ╚██████╔╝██║ ╚████║███████║
// ╚═════╝  ╚═════╝    ╚═╝      ╚═╝    ╚═════╝ ╚═╝  ╚═══╝╚══════╝
//                                                               
function makeButtons(){

}

function drawButtons(){

}


// ██╗  ██╗███████╗██╗     ██████╗ ███████╗██████╗ 
// ██║  ██║██╔════╝██║     ██╔══██╗██╔════╝██╔══██╗
// ███████║█████╗  ██║     ██████╔╝█████╗  ██████╔╝
// ██╔══██║██╔══╝  ██║     ██╔═══╝ ██╔══╝  ██╔══██╗
// ██║  ██║███████╗███████╗██║     ███████╗██║  ██║
// ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝     ╚══════╝╚═╝  ╚═╝
                                                


function drawShape(list, name=0){
	if (name!=0){console.log(name)}


	beginShape();
	for(let i = 0; i < list.length; i+=2){
		vertex(list[i], list[i+1]);
	}
	endShape();

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
	draw()
}