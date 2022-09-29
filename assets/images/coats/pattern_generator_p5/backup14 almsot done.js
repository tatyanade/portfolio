function setup(){
	console.log('setup')
	createCanvas(2400,1400)
	angleMode(DEGREES)
	makePattern();

}

let pattern = {}
// ██████╗ ██████╗  █████╗ ██╗    ██╗
// ██╔══██╗██╔══██╗██╔══██╗██║    ██║
// ██║  ██║██████╔╝███████║██║ █╗ ██║
// ██║  ██║██╔══██╗██╔══██║██║███╗██║
// ██████╔╝██║  ██║██║  ██║╚███╔███╔╝
// ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ ╚══╝╚══╝ 
                                  
function draw(){
	background(0)
	drawPattern()
}

function drawPattern(){
	drawBody()
	drawLapels()
	drawSleeves()
}



// ███╗   ███╗ █████╗ ██╗  ██╗███████╗
// ████╗ ████║██╔══██╗██║ ██╔╝██╔════╝
// ██╔████╔██║███████║█████╔╝ █████╗  
// ██║╚██╔╝██║██╔══██║██╔═██╗ ██╔══╝  
// ██║ ╚═╝ ██║██║  ██║██║  ██╗███████╗
// ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
                                                                                                                               
function makePattern(){
	pattern = {}
	getValues();
	pattern.front = {}
	pattern.back = {}
	makeBody();

	makeLapels();
	makeSleeves();
}




function makeBody(){
	makeBases();
	makeArmholes();
	makeWaistCurve();
	makeWaistDarts();
	makeNecklines();
	makeCoattails();
	makeButtons()
}

function getValues(){
	pattern.attributes = {}

	pattern.len = random(450, 1350)

	if(pattern.len  < 500) { pattern.attributes.lenType = 'short'}
	else if(pattern.len > 700) { pattern.attributes.lenType =  'long'}
	else { pattern.attributes.lenType = 'normal'}

	pattern.attributes.hasWaistCurve = random(0,100) < 50
	pattern.attributes.frontNeckType = random(['curve', 'straight'])
	pattern.attributes.hasLapels = ((random(0,100) < 40)  && (pattern.attributes.frontNeckType == 'straight'))

	pattern.attributes.hasButtons = random(0,100) < 50
	pattern.attributes.hasFrontWaistDart = 	random(0,100) < 30 && 
											(pattern.attributes.lenType != 'short')
	pattern.attributes.hasBackWaistDart = 	random(0,100) < 45 &&
											(pattern.attributes.lenType != 'short')

	pattern.attributes.hasCoattails = (random(0,100) < 30 ) && (pattern.attributes.lenType != 'long')

	pattern.attributes.hasSleeves = random(0,100) < 50
	pattern.attributes.sleeveLenType = random(['short', 'long'])
	pattern.attributes.sleeveType = random(['flare','normal', 'taper'])
	pattern.attributes.sleevesBallon = random(0,100) < 30

}


// ███████╗██████╗  ██████╗ ███╗   ██╗████████╗
// ██╔════╝██╔══██╗██╔═══██╗████╗  ██║╚══██╔══╝
// █████╗  ██████╔╝██║   ██║██╔██╗ ██║   ██║   
// ██╔══╝  ██╔══██╗██║   ██║██║╚██╗██║   ██║   
// ██║     ██║  ██║╚██████╔╝██║ ╚████║   ██║   
// ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   


let padding=30
function drawFront(){
	fill(255)
	push()
	translate(padding,padding)

	drawShape([ pattern.front.sleeveIn.x, 	pattern.front.sleeveIn.y,
				pattern.front.sleeveOut.x, 	pattern.front.sleeveOut.y,
				pattern.front.armpit.x,	 	pattern.front.armpit.y,
				pattern.front.bottomOut.x, 	pattern.front.bottomOut.y,
				pattern.front.bottomIn.x, 	pattern.front.bottomIn.y,
				pattern.front.neckline.x, 	pattern.front.neckline.y])
	drawFrontArmholes()
	drawFrontWaistCurve()
	drawFrontDarts()
	drawFrontNeckline();
	drawButtons();
	pop()
}

// ██████╗  █████╗  ██████╗██╗  ██╗
// ██╔══██╗██╔══██╗██╔════╝██║ ██╔╝
// ██████╔╝███████║██║     █████╔╝ 
// ██╔══██╗██╔══██║██║     ██╔═██╗ 
// ██████╔╝██║  ██║╚██████╗██║  ██╗
// ╚═════╝ ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝


function drawBack(){
	fill(255)
	push()
	translate(padding*2 + pattern.front.width, padding)


	drawShape([ pattern.back.sleeveIn.x, 	pattern.back.sleeveIn.y,
				pattern.back.sleeveOut.x, 	pattern.back.sleeveOut.y,
				pattern.back.armpit.x,	 	pattern.back.armpit.y,
				pattern.back.bottomOut.x, 	pattern.back.bottomOut.y,
				pattern.back.bottomIn.x, 	pattern.back.bottomIn.y,
				pattern.back.neckline.x, 	pattern.back.neckline.y])
	drawBackArmholes()
	drawBackWaistCurve()
	drawBackDarts()
	drawBackNeckline();
	drawCoattails()
	pop()
}

function drawBody(){
	drawFront()
	drawBack()
}

// ██████╗  █████╗ ███████╗███████╗
// ██╔══██╗██╔══██╗██╔════╝██╔════╝
// ██████╔╝███████║███████╗█████╗  

// ██╔══██╗██╔══██║╚════██║██╔══╝  
// ██████╔╝██║  ██║███████║███████╗
// ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝
                                
function makeBases(){
	pattern.body = {}
	pattern.sleeves = {}

	neckline = //{x:0, y: random(160,180)}



	pattern.body.armhole = {dx:random(50,70), 
							dy:random(260,300)}
	pattern.body.frontNeckline = {dx:random(60,200), 
								  dy:random(40,130)}
	pattern.body.backNeckline= {dx:random(100,200),
								dy:random(40,100)}
	pattern.body.sleeve = {	dx:random(80,130) ,
							dy:random(0,50)}
	pattern.body.sideSeam = {dx: random(-10,30)}


	neckline ={	x:0, 
			 	y:pattern.body.frontNeckline.dy}
	sleeveIn = {x:pattern.body.frontNeckline.dx, 
				y:0} 
	sleeveOut = {x:sleeveIn.x+ pattern.body.sleeve.dx,
				 y:sleeveIn.y+ pattern.body.sleeve.dy}
	armpit= {	x:sleeveOut.x +pattern.body.armhole.dx,
				y:sleeveOut.y +pattern.body.armhole.dy }
	bottomOut ={x:armpit.x + pattern.body.sideSeam.dx,
				y:pattern.len } 
	bottomIn ={	x:0,
				y:pattern.len}



	pattern.front={armpit:armpit, bottomIn:bottomIn, bottomOut:bottomOut, neckline:neckline, sleeveIn:sleeveIn, sleeveOut:sleeveOut}

	pattern.front.width = (max([armpit.x,sleeveOut.x, bottomOut.x]) - min([bottomIn.x, neckline.x]))
 	pattern.body.sideSeam.dy = pattern.len - armpit.x

	bottomOut =	{x:0,
				y:pattern.len}
	armpit= 	{x:0 + pattern.body.sideSeam.dx, //random(0,100),
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

	pattern.back.width =max([neckline.x, bottomIn.x]) - min([bottomOut.x, armpit.x])

}

// ███╗   ██╗███████╗ ██████╗██╗  ██╗██╗     ██╗███╗   ██╗███████╗
// ████╗  ██║██╔════╝██╔════╝██║ ██╔╝██║     ██║████╗  ██║██╔════╝
// ██╔██╗ ██║█████╗  ██║     █████╔╝ ██║     ██║██╔██╗ ██║█████╗  

// ██║╚██╗██║██╔══╝  ██║     ██╔═██╗ ██║     ██║██║╚██╗██║██╔══╝  
// ██║ ╚████║███████╗╚██████╗██║  ██╗███████╗██║██║ ╚████║███████╗
// ╚═╝  ╚═══╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝╚═╝  ╚═══╝╚══════╝
                                                               

function makeNecklines(){
	if(pattern.attributes.frontNeckType == 'curve'){
		neckline = pattern.front.neckline
		sleeveIn = pattern.front.sleeveIn
		dx = random(50, sleeveIn.x - neckline.x - 50) //random( neckline.x + 40, sleeveIn.x  -40)
		dyMax = neckline.y - sleeveIn.y
		dyMin = map(dx, 0, sleeveIn.x - neckline.x, 0 ,neckline.y - sleeveIn.y)
		dy = random(dyMin, dyMax)//map(dx, 0, sleeveIn.x - neckline.x, 0, sleeveIn.y - neckline.y)
	
		pattern.front.neckCurve = {x: neckline.x + dx,
								   y: sleeveIn.y + dy}
	}


	if(pattern.attributes.backNeckType == 'curve'){
		neckline = pattern.back.neckline
		sleeveIn = pattern.back.sleeveIn
		dx =  random(50, neckline.x - sleeveIn.x -50)
		dyMax = neckline.y - sleeveIn.y
		dyMin = map(dx, 0, neckline.x - sleeveIn.x, 0 ,neckline.y - sleeveIn.y)
		dy =  random(dyMin, dyMax)// map(dx, 0, neckline.x -sleeveIn.x, 0, neckline.y - sleeveIn.y)
	
		pattern.back.neckCurve = {x: sleeveIn.x + dx,
								  y: sleeveIn.y + dy}
	}
}

function drawFrontNeckline(){
	fill(0)

	if(pattern.attributes.frontNeckType == 'curve'){
		
		drawCurvedShape( 	[pattern.front.sleeveIn.x, 		pattern.front.sleeveIn.y,
						  	 pattern.front.neckline.x, 		pattern.front.neckline.y,
						     pattern.front.neckCurve.x, pattern.front.neckCurve.y ])
	}
}

function drawBackNeckline(){
	fill( 0)

	if(pattern.attributes.backNeckType == 'curve'){
		drawCurvedShape( [ 	pattern.back.sleeveIn.x,  pattern.back.sleeveIn.y,
					  		pattern.back.neckline.x,  pattern.back.neckline.y,
					 	 	pattern.back.neckCurve.x, pattern.back.neckCurve.y ])
	}
}

//  █████╗ ██████╗ ███╗   ███╗██╗  ██╗ ██████╗ ██╗     ███████╗███████╗
// ██╔══██╗██╔══██╗████╗ ████║██║  ██║██╔═══██╗██║     ██╔════╝██╔════╝
// ███████║██████╔╝██╔████╔██║███████║██║   ██║██║     █████╗  ███████╗

// ██╔══██║██╔══██╗██║╚██╔╝██║██╔══██║██║   ██║██║     ██╔══╝  ╚════██║
// ██║  ██║██║  ██║██║ ╚═╝ ██║██║  ██║╚██████╔╝███████╗███████╗███████║
// ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝╚══════╝

//fix this??
function makeArmholes(){
	console.log(pattern)

	dy = random(60,pattern.body.armhole.dy-60)
	dx = map(dy, 0, pattern.body.armhole.dy, 0, pattern.body.armhole.dx)// + random(0, 10)

	//pattern.sleeves.armhole = {dx: dx, dy:dy}

	dy2= dy// + random(10,10)
	dx2= dx// + random(0,-20)

	pattern.front.armhole = {x: pattern.front.sleeveOut.x - dx2,
							 y: pattern.front.sleeveOut.y + dy2,
							 dx:dx2,
							 dy:dy2}


	pattern.back.armhole = {x: pattern.back.sleeveOut.x + dx,
							 y: pattern.back.sleeveOut.y + dy,
							 dx:dx,
							 dy:dy}
}

function drawFrontArmholes(){
	fill(0)
	drawCurvedShape([pattern.front.armpit.x, pattern.front.armpit.y,
					pattern.front.sleeveOut.x, pattern.front.sleeveOut.y,
					pattern.front.armhole.x, pattern.front.armhole.y])
}

function drawBackArmholes(){
	fill(0)
	drawCurvedShape([pattern.back.armpit.x, pattern.back.armpit.y,
					pattern.back.sleeveOut.x, pattern.back.sleeveOut.y,
					pattern.back.armhole.x, pattern.back.armhole.y])
}
// ██╗    ██╗ █████╗ ██╗███████╗████████╗ ██████╗██╗   ██╗██████╗ ██╗   ██╗███████╗
// ██║    ██║██╔══██╗██║██╔════╝╚══██╔══╝██╔════╝██║   ██║██╔══██╗██║   ██║██╔════╝
// ██║ █╗ ██║███████║██║███████╗   ██║   ██║     ██║   ██║██████╔╝██║   ██║█████╗  

// ██║███╗██║██╔══██║██║╚════██║   ██║   ██║     ██║   ██║██╔══██╗╚██╗ ██╔╝██╔══╝  
// ╚███╔███╔╝██║  ██║██║███████║   ██║   ╚██████╗╚██████╔╝██║  ██║ ╚████╔╝ ███████╗
//  ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝╚══════╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝  ╚═╝  ╚═══╝  ╚══════╝

function makeWaistCurve(){
	//if(hasWaistCurve)
	dy =  random(50, min([pattern.body.sideSeam.dy - 30,500]))
	dx = map(dy, 0, pattern.body.sideSeam.dy, 0, pattern.body.sideSeam.dx) + random(0,100)

	pattern.front.waistCurve = {x: pattern.front.armpit.x - dx,
								y:pattern.front.armpit.y + dy}

	pattern.back.waistCurve = {x: pattern.back.armpit.x + dx,
								y:pattern.front.armpit.y + dy}

	pattern.body.waist = {y:pattern.front.waistCurve.y}


}

function drawFrontWaistCurve(){
	fill(0)
	if(pattern.attributes.hasWaistCurve){
		drawCurvedShape([	pattern.front.armpit.x, pattern.front.armpit.y,
							pattern.front.bottomOut.x, pattern.front.bottomOut.y,
							pattern.front.waistCurve.x, pattern.front.waistCurve.y])
	}
}

function drawBackWaistCurve(){
	fill(0)
	if(pattern.attributes.hasWaistCurve){
		drawCurvedShape([	pattern.back.armpit.x, pattern.back.armpit.y,
							pattern.back.bottomOut.x, pattern.back.bottomOut.y,
							pattern.back.waistCurve.x, pattern.back.waistCurve.y])
	}
}



// ██████╗  █████╗ ██████╗ ████████╗███████╗
// ██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔════╝
// ██║  ██║███████║██████╔╝   ██║   ███████╗
// ██║  ██║██╔══██║██╔══██╗   ██║   ╚════██║
// ██████╔╝██║  ██║██║  ██║   ██║   ███████║
// ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝
                                         
function makeBackDart(){

}

function makeWaistDarts(){
	y = pattern.body.waist.y

	height = random(100,320)
	width = random(40,height/3)

	backX = random(pattern.back.waistCurve.x + 20, pattern.back.neckline.x - 100)
	frontX = random(pattern.front.neckline.x + 100, pattern.front.waistCurve.x - 20)
	print(frontX + " :" + pattern.back.neckline.x + " -- " + 's')

	pattern.body.waist.xBack = backX + width/2
	pattern.body.waist.xFront = frontX - width/2

	pattern.body.waistDart = {dx:width, dy:height}

	x1 = backX + width/2
	x3 = backX + width/2
	x2 = backX + width
	x4 = backX 

	y2 = y;
	y4 = y;
	y1 = y - height/2
	y3 = y + height/2

	pattern.back.waistDart = { 	x1:x1,
								y1:y1,
								x2:x2,
								y2:y2,
								x3:x3,
								y3:y3,
								x4:x4,
								y4:y4
	}

	x1 = frontX - width/2
	x3 = frontX - width/2
	x2 = frontX 
	x4 = frontX - width

	pattern.front.waistDart = { 	x1:x1,
								y1:y1,
								x2:x2,
								y2:y2,
								x3:x3,
								y3:y3,
								x4:x4,
								y4:y4
	}
}

function makeBottomDarts(){
	height = pattern.body.waistDart.dy
	width = pattern.body.waistDart.dx

}

//heoght for waist darts max is the min of wahtever rn and half of side dy


function drawBackDarts(){
	fill(0)

	if(pattern.attributes.hasBackWaistDart){
		drawShape([pattern.back.waistDart.x1, pattern.back.waistDart.y1,
				pattern.back.waistDart.x2, pattern.back.waistDart.y2,
				pattern.back.waistDart.x3, pattern.back.waistDart.y3,
				pattern.back.waistDart.x4, pattern.back.waistDart.y4])
	}


}

function drawFrontDarts(){
	if(pattern.attributes.hasFrontWaistDart){
		drawShape([pattern.front.waistDart.x1, pattern.front.waistDart.y1,
			pattern.front.waistDart.x2, pattern.front.waistDart.y2,
			pattern.front.waistDart.x3, pattern.front.waistDart.y3,
			pattern.front.waistDart.x4, pattern.front.waistDart.y4])
	}
}
// ██╗      █████╗ ██████╗ ███████╗██╗     ███████╗
// ██║     ██╔══██╗██╔══██╗██╔════╝██║     ██╔════╝
// ██║     ███████║██████╔╝█████╗  ██║     ███████╗
// ██║     ██╔══██║██╔═══╝ ██╔══╝  ██║     ╚════██║
// ███████╗██║  ██║██║     ███████╗███████╗███████║
// ╚══════╝╚═╝  ╚═╝╚═╝     ╚══════╝╚══════╝╚══════╝


function makeLapels(){
	if(pattern.attributes.hasLapels == true){
		console.log('lapels')
	}
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
function makeCoattails(){
	if(pattern.attributes.lenType != 'long'){


		x1 = pattern.back.bottomOut.x +2
		y1 = pattern.back.bottomOut.y

		x2 = pattern.back.bottomIn.x -2
		y2 = pattern.back.bottomIn.y

		x3 = random(x1, x2)
		y3 = pattern.len + random(100, 1300 - pattern.len)

		pattern.back.coattail = { x1: x1, x2: x2, x3: x3, y1:y1, y2:y2, y3:y3}
	}

}

function drawCoattails(){
	fill(255)
	stroke(255)
	strokeWeight(2)
	if(pattern.attributes.hasCoattails){
		drawShape([pattern.back.coattail.x1, pattern.back.coattail.y1,
					pattern.back.coattail.x2, pattern.back.coattail.y2,
					pattern.back.coattail.x3, pattern.back.coattail.y3])
	}

}



// ███████╗██╗     ███████╗███████╗██╗   ██╗███████╗███████╗
// ██╔════╝██║     ██╔════╝██╔════╝██║   ██║██╔════╝██╔════╝
// ███████╗██║     █████╗  █████╗  ██║   ██║█████╗  ███████╗
// ╚════██║██║     ██╔══╝  ██╔══╝  ╚██╗ ██╔╝██╔══╝  ╚════██║
// ███████║███████╗███████╗███████╗ ╚████╔╝ ███████╗███████║
// ╚══════╝╚══════╝╚══════╝╚══════╝  ╚═══╝  ╚══════╝╚══════╝
//                                                          


function getSleeveHoles(){
	getSleeveHoleFront()
	getSleeveHoleBack()
}

function getSleeveHoleBack(){

	shoulder = {x: pattern.back.sleeveOut.x,
				y: pattern.back.sleeveOut.y}
	armhole = {x: pattern.back.armhole.x,
				y: pattern.back.armhole.y}
	armpit = {x: pattern.back.armpit.x,
				y: pattern.back.armpit.y}

	yoffset = min([shoulder.y, armhole.y, armpit.y])

	shoulder.y -= yoffset
	armhole.y -= yoffset
	armpit.y -= yoffset

	shoulder.x = abs(shoulder.x-armhole.x)
	armpit.x = abs(armpit.x - armhole.x)
	armhole.x = 0	

	pattern.sleeves.back = {shoulder:shoulder,
							 armhole:armhole,
							 armpit:armpit}
}

function getSleeveHoleFront(){

	shoulder = {x: pattern.front.sleeveOut.x,
				y: pattern.front.sleeveOut.y}
	armhole = {x: pattern.front.armhole.x,
				y: pattern.front.armhole.y}
	armpit = {x: pattern.front.armpit.x,
				y: pattern.front.armpit.y}

	xoffset = min([shoulder.x, armhole.x, armpit.x])

	shoulder.x -= xoffset
	armhole.x -= xoffset
	armpit.x -= xoffset

	yoffset = min([shoulder.y, armhole.y, armpit.y])

	shoulder.y -= yoffset
	armhole.y -= yoffset
	armpit.y -= yoffset

	pattern.sleeves.front = {shoulder:shoulder,
							 armhole:armhole,
							 armpit:armpit}

}

function makeSleeves(){
	pattern.attributes.sleeveLenType = random(["short","long"])
	sleeveLenType = 'long'//pattern.attributes.sleeveType

	let length;
	angle = 25;

	//set length
	if(sleeveLenType == 'short'){
		length = random(100,150)
	} else {
		length = random(300,550)
	}

	
	getSleeveHoles()

	//same for all lengths
	sleeve = pattern.sleeves.front 
	shoulder = sleeve.shoulder
	armpit = sleeve.armpit

	dx = int(length*cos(angle))
	dy = int(length*sin(angle))

	cuffTop = {x: shoulder.x + dx,
			   y: shoulder.y + dy,
				dx:dx,
				dy:dy}

	pattern.sleeves.shoulder = shoulder;
	pattern.sleeves.cuffTop = cuffTop;
	pattern.sleeves.armpit = armpit;

	if(sleeveLenType == 'short'){
		pattern.sleeves.cuffBottom = armpit
	}else {
		let angle2;

		sleeveType = 'flared' //pattern.attributes.sleeveType
		if(sleeveType == 'taper') { 
			angle2 = angle -= 12

	    	intersect = xsect(cuffTop.x, cuffTop.y, angle-90, armpit.x, armpit.y, angle2)
	    	pattern.sleeves.cuffBottom = {x:intersect[0],y:intersect[1]}

		} 
	    else if (sleeveType == 'flared'){ 
	    	angle2 = angle+= random(10,14)


	    	intersect = xsect(cuffTop.x, cuffTop.y, angle-90-10, armpit.x, armpit.y, angle2)
	    	pattern.sleeves.cuffBottom = {x:intersect[0],y:intersect[1]}

	    }
	    else { 
	    	angle2 = angle

	    	intersect = xsect(cuffTop.x, cuffTop.y, angle-90, armpit.x, armpit.y, angle2)
	    	pattern.sleeves.cuffBottom = {x:intersect[0],y:intersect[1]}

	    }






	}


	// make sleeveBody = same for both




}

function drawSleeveBody(){
	fill(233,0,233)
	drawShape([pattern.sleeves.armpit.x, pattern.sleeves.armpit.y,
			  pattern.sleeves.shoulder.x, pattern.sleeves.shoulder.y,
			  pattern.sleeves.cuffTop.x, pattern.sleeves.cuffTop.y,
			  pattern.sleeves.cuffBottom.x, pattern.sleeves.cuffBottom.y])

	fill(100,0,100)
	circle(pattern.sleeves.shoulder.x, pattern.sleeves.shoulder.y, 10)
	fill(150,0,150)
	circle(pattern.sleeves.armpit.x, pattern.sleeves.armpit.y, 10)
	fill(200,0,100)
	circle(pattern.sleeves.cuffTop.x, pattern.sleeves.cuffTop.y,10)

}


function drawSleeves(){
	console.log('ss')
	if(pattern.attributes.hasSleeves){
		push()
		fill(23,23,233)
		translate(padding*3 + pattern.front.width + pattern.back.width, padding)
		sleeve = pattern.sleeves.front
		drawCurvedShape([sleeve.shoulder.x, sleeve.shoulder.y,
					sleeve.armpit.x, sleeve.armpit.y,
					sleeve.armhole.x, sleeve.armhole.y])

		fill(0,0,255)
		circle(sleeve.shoulder.x, sleeve.shoulder.y,10)
		fill(0,255,0)
		circle(sleeve.armpit.x, sleeve.armpit.y, 10)
		fill(255)

		drawSleeveBody()

		push()
		console.log(pattern.attributes.sleeveType == 'taper')
		yoffset = padding*2 + pattern.sleeves.front.armpit.y + padding*5*(pattern.attributes.sleeveType == 'taper')
		translate(0, yoffset)
		fill(244,210,0)
		sleeve = pattern.sleeves.back
		drawCurvedShape([sleeve.shoulder.x, sleeve.shoulder.y,
					sleeve.armpit.x, sleeve.armpit.y,
					sleeve.armhole.x, sleeve.armhole.y])

		fill(0,0,255)
		circle(sleeve.shoulder.x, sleeve.shoulder.y,10)
		fill(0,255,0)
		circle(sleeve.armpit.x, sleeve.armpit.y, 10)
		fill(255)

		drawSleeveBody()

		pop()
		pop()

	}
}

// ██████╗ ██╗   ██╗████████╗████████╗ ██████╗ ███╗   ██╗███████╗
// ██╔══██╗██║   ██║╚══██╔══╝╚══██╔══╝██╔═══██╗████╗  ██║██╔════╝

// ██████╔╝██║   ██║   ██║      ██║   ██║   ██║██╔██╗ ██║███████╗
// ██╔══██╗██║   ██║   ██║      ██║   ██║   ██║██║╚██╗██║╚════██║
// ██████╔╝╚██████╔╝   ██║      ██║   ╚██████╔╝██║ ╚████║███████║
// ╚═════╝  ╚═════╝    ╚═╝      ╚═╝    ╚═════╝ ╚═╝  ╚═══╝╚══════╝
//                                                               
function makeButtons(){
	if (pattern.attributes.hasButtons == true){
		width = random(20,40);
		height = random([width, random(14,25)])

		x1 = pattern.front.neckline.x + random(40,50);
		y1 = pattern.front.neckline.y + random(40,200);

		spacing = height + random(30,90)

		maxButtons = ( bottomIn.y - y1 )/ spacing 
		total= random(1, maxButtons)

		pattern.front.buttons = {width:width,
								height:height,
								x1:x1,
								y1:y1,
								spacing:spacing,
								total:total}	
	}

}

function drawButtons(){
	fill(0)
	if (pattern.attributes.hasButtons == true){
		buttons = pattern.front.buttons

		x = buttons.x1;
		y = buttons.y1;

		for (i = 0; i < buttons.total; i++){
			ellipse(x, y, buttons.width, buttons.height)
			y+=buttons.spacing
		}
	}
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
	endShape(CLOSE);

}


function drawCurvedShape(list, name = 0){
	strokeWeight(2)
	stroke(0)
	// if (name!=0 && drawDebug==true){console.log(name)}

	beginShape();
	for(let i = 0; i < list.length; i+=2){
		curveVertex(list[i], list[i+1]);


	}
	//curveVertex(list[0], list[1]);
	//curveVertex(list[0], list[1]);

	endShape(CLOSE);
	noStroke()

}


function keyPressed(){
	makePattern();
}



//https://math.stackexchange.com/questions/1990698/intersection-of-two-lines-each-defined-by-a-point-and-an-angle
function xsect(x0, y0, a0, x1, y1, a1) {
    if ((((a0-a1) % 180) + 180) % 180 === 0) throw parallelError
    if (((a0 % 180) + 180) % 180 === 90) {
        // vertical line at x = x0
        return [x0, tan(a1) * (x0-x1) + y1]//Math.tan(a1*toRad) * (x0-x1) + y1]
    }
    else if (((a1 % 180) + 180) % 180 === 90) {
        // vertical line at x = x0
        return [x1, tan(a0) * (x1-x0) + y0]
    }
    let m0 = tan(a0) // Line 0: y = m0 (x - x0) + y0
    let m1 = tan(a1) // Line 1: y = m1 (x - x1) + y1
    let x = ((m0 * x0 - m1 * x1) - (y0 - y1)) / (m0 - m1)
    return [x, m0 * (x - x0) + y0]
}