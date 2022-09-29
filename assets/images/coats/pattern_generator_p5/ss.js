function setup(){
	makePattern();

}

let pattern = {}
function draw(){
	background(0)
	drawPattern()
}


function makePattern(){
	pattern = {}
	getValues();
	pattern.front = {}
	makeFront();
	pattern.back = {}
	makeBack();
}

function makeBody{
	makeFront();
	makeBack();
}

function drawPattern(){
	drawBody()
	drawCoattails()
	drawLapes()
	drawSleeves()
}


function makeBody
	pattern.body = {}

	neckline = {x:0, y: random(160,180)



	pattern.body.sleeve = {dx:random(10,130), dy:random(10,40)}
	sleeveIn = {x:random(30,200, y:0}
	sleeveOut = {x:sleeveIn.x - pattern.body.sleeve.dx , y:sleeveIn.y + pattern.body.sleeve.dy}

	pattern.body.armpit ={dx:60, dy:random(250,300)}
	armpit= {x:sleeveOut.x + pattern.body.armpit.x, y:neckline.y-pattern.body.armpit.dy}
	bottomOut = {x:armpit.x, y:sleeveIn.x+pattern.len}
	bottomIn = {x:neckline.x, y:sleeveIn.x+pattern.len}

	pattern.sleeve={armpit:armpit, bottomIn:bottomIn, bottomOut:bottomOut, neckline:neckline, sleeveIn:sleeveIn, sleeveOut:sleeveOut}
	patern.body.backWidth=400


	bottomOut = {x:0,y:bottomOut.y}
	neckline = {x:0, y: random(160,180)
	pattern.body.sleeve = {dx:random(10,130), dy:random(10,40)}
	armpit= {x:bottomOut.x+ random(0,50) , y:random(250,300)}

	sleeveOut = {x:armpit.x + pattern.body.armpit.dx, y:armpit.y+pattern.body.armpit.dy} //{x:armpit-60, y: sleeveOut.y}x:sleeveIn.x - pattern.body.sleeve.dx , y:sleeveIn.y + pattern.body.sleeve.dy}

	sleeveIn = {x:sleeveOut.x + pattern.body.sleeve.dx, y: sleeveOut.y - pattern.body.sleeve.dy//{x:random(30,200, y:0}

	bottomIn = {x:, y:bottomIn.y}
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

}

function drawArmholes(){

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


function makeLapels();{

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