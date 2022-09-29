var hex = [];
var mids = [];

var rArmPts;
var lArmPts;
var rLegPts;
var lLegPts;


var raCurve;
var rlCurve;
var laCurve;
var llCurve;

var raCurvePts;

var sideLength;

var bigRad;
var smallRad;


var bodyColor;


function setup() { 
  var myCanvas = createCanvas(600, 600);
  //myCanvas.parent("monster_ct");
  background(255,255,200);
  frameRate(.5);
  angleMode(DEGREES);
  
  draw();

} 




function getColor(){
	var r = random(205,255);
	var g = random(87,132);
	var b = random(51,117);
	return color(r,g,b)

}

function draw(){
  
  try {
  	drawWrapper();
	} catch(err) {
  draw();
	}
	
 
}

function drawWrapper() { 
	bodyColor = getColor()
  
  

 	background(255,255,200); 
    
 	bodyHex(); 
 	bodyMids();
 	bodyLimbs(); 
 	armCurves();

 	getFaceInfo();

  ; 
}


function getFaceInfo(){
  var start = midPoint(hex[0],hex[1],hex[2],hex[3])



  var topLength = abs(hex[0]-hex[2])
  var x1 = start[0]
  var y1 = start[1]

  var x2 = x1 - random(20,40);
  var y2 = y1 - random(40,90);

  var x3 = x2 + random(-40,40);
  var y3 = y2 - random(20,30);

  var x4 = x3 + random(50,80);
  var y4 = y3 + random(20,30);

  var x5 = x3 + random(50,80);
  var y5 = y3 - random(20,30);

// strokeWeight(1)
// stroke(1);
  beginShape()
    //curveVertex(x1 - 20,y1)//-topLength/2,y1)
    curveVertex(x1 - 20,y1)//-topLength/2,y1)
    vertex(hex[0]-10,hex[1])

    curveVertex(x2 - 50,y2)// -topLength/2, y2)
    curveVertex( ( x2-50 + (x3-15))/2.5 ,  (y2 + y3 - 40)/2 - 10)
    vertex(x3-15,y3-40)// - topLength/2.7, y2)
    vertex(x5,y5);
    vertex(x3+4,y3-5);
    vertex(x3+4,y3+5)
    vertex(x4,y4);
    vertex(x2+30,y2+12);
    curveVertex(hex[2]-10,hex[3])
    curveVertex(hex[0]-10,hex[1])
    curveVertex(hex[0]-10,hex[1])



  endShape()

  var e1x = x3 + random(0,40)
  var e1y = y3 - random(20,40);
  var e2x = x3 - random( 10,100);
  var e2y = y3 - random(20,40);

strokeWeight(3);
stroke(255)

  var w = random(5,30);
  var w2 = w + random(max(10,w-20),20)

strokeWeight(4);
stroke(bodyColor)
  ellipse(e1x,e1y, w,w)
  ellipse(e2x,e2y, w2,w2)
  strokeWeight(3);
stroke(255)
  ellipse(e1x,e1y, w,w)
  ellipse(e2x,e2y, w2,w2)

  strokeWeight(.5);
stroke(10)
  ellipse(e1x,e1y, 1,1)
  ellipse(e2x,e2y, 1,1)

  noStroke();
  fill('bodyColor')

}



















function armCurves(){
 var ra = raCurve;
 var la = laCurve;
 var ll = llCurve;
 var rl = rlCurve;


bigRad = random(40,min(55,sideLength/2.5));
smallRad = random(10,bigRad);

 drawLimb(ra);
 drawLimb(la);

 drawLeg(rl);
 drawLeg(ll)

 drawBody();
}

function drawBody(){

  strokeWeight(10);
  stroke(bodyColor);
  fill(bodyColor);


  beginShape();

  for (var i = 0; i < hex.length ; i+=2)
  {
    curveVertex(hex[i],hex[i+1]);
  }
  curveVertex(hex[0],hex[1]);
  endShape();
}

function drawLeg(limbPoints){
  var x1 = limbPoints[0];
  var y1 = limbPoints[1];
  var x2 = limbPoints[2];
  var y2 = limbPoints[3];
  var x3 = limbPoints[4];
  var y3 = limbPoints[5];	

  //print(limbPoints)
  var centerPoints = getCenter(x1,y1,x2,y2,x3,y3);
  var x0 = centerPoints[0];
  var y0 = centerPoints[1];

  var len = dist(x0,y0,x1,y1);

  strokeWeight(1);


  var curvePoints = [];
  //noStroke();

  var radius = dist(x0,y0,x1,y1)

  for (var i = 90; i < 450; i+=.5) {
  	// if(dist(x0,y0,x1,y1) > smallRad){
  	// 	radius--;
  	// }
  	var xTemp = x0+cos(i)*len;
  	var yTemp = y0+sin(i)*len;
  	if (isValidPtLeg(x1,y1,x3,y3,xTemp,yTemp,x0,y0)){
  		append(curvePoints,[xTemp,yTemp])
  	}
  }



 	var startI;
  	var i1 = curvePoints[0];

  	var i2 = curvePoints[curvePoints.length-1]
  	//error with this is that it always does the top
  	if(min(dist(i1[0],i1[1],x1,y1),dist(i1[0],i1[1],x3,y3)) <
  	   min(dist(i2[0],i2[1],x1,y1),dist(i1[0],i1[1],x3,y3)) ){
  		startI = 0;
  	} else { 
  		startI = curvePoints.length/2;
  	}

  	noStroke();	

  	var bottomCurve = [];

  	for (var i = 0; i < curvePoints.length/2; i++){
  		var point = curvePoints[i]
  		append(bottomCurve, point)

 	}

 	var topCurve = [];

  	for (var i = curvePoints.length/2; i < curvePoints.length; i++){
  		var point = curvePoints[i]
  		append(topCurve, point)
  
 	}

 	var top1 = topCurve[0]
 	var tX1 = top1[0]
 	var tY1 = top1[1]
 	var top2 = topCurve[topCurve.length-1]
 	var tX2 = top2[0]
 	var tY2 = top2[1]

 	var topDist = 	min(dist(x1,y1,tX1,tY1),dist(x3,y3,tX1,tY1)) +
 					min(dist(x1,y1,tX2,tY2),dist(x3,y3,tX2,tY2));

 	var bot1 = bottomCurve[0]
 	var bX1 = bot1[0]
 	var bY1 = bot1[1]
 	var bot2 = bottomCurve[bottomCurve.length-1]
 	var bX2 = bot2[0]
 	var bY2 = bot2[1]

 	var botDist = 	min(dist(x1,y1,bX1,bY1),dist(x3,y3,bX1,bY1)) +
 					min(dist(x1,y1,bX2,bY2),dist(x3,y3,bX2,bY2));


 	var goodArm;





 	//this gets the correct limb and draws
 	if (topDist < botDist){
 		goodArm = topCurve;
 	} else {
 		goodArm = bottomCurve;
 	}




  var endColor = getColor();

  var r = red(endColor);
  var g = green(endColor);
  var b = blue(endColor);

  var dR = (r - red(bodyColor))/(goodArm.length);
  var dG = (g - green(bodyColor))/(goodArm.length);
  var dB = (b - blue(bodyColor))/(goodArm.length);


 	//pretty sure radius is actually diameter but whatever
	var rad = bigRad;
	var dRad = (bigRad-smallRad)/goodArm.length

  	for (var i = 0; i < goodArm.length; i++){
  		var point = goodArm[i]

      if (i > goodArm.length/5){
        fill(color(r,g,b));
        r += dR;
        b += dB;
        g += dG;
      }
		ellipse(point[0],point[1],rad,rad)

		rad = rad+dRad;

		raCurvePts = topCurve;
	}




  fill(bodyColor);
}

function isValidPtLeg(x1,y1,x2,y2,x,y,x0,y0){
	if ( y > min(y1,y2) && y < max(y1,y2)){
		return true;
		}
	return false;
}


function drawLimb(limbPoints){
  var x1 = limbPoints[0];
  var y1 = limbPoints[1];
  var x2 = limbPoints[2];
  var y2 = limbPoints[3];
  var x3 = limbPoints[4];
  var y3 = limbPoints[5];
  
  //print(limbPoints)
  var centerPoints = getCenter(x1,y1,x2,y2,x3,y3);
  var x0 = centerPoints[0];
  var y0 = centerPoints[1];
  //print(centerPoints);

  var len = dist(x0,y0,x1,y1);


  var curvePoints = [];
  //noStroke();

  for (var i = 0; i < 360; i+=.5) {
  	if(rad > smallRad){
  		rad--;
  	}
  	var xTemp = x0+cos(i)*len;
  	var yTemp = y0+sin(i)*len;
  	if (isValidPt(x1,y1,x3,y3,xTemp,yTemp,x0,y0)){
  		append(curvePoints,[xTemp,yTemp])
  	}


  }


  	var startI;
  	var i1 = curvePoints[0];

  	var i2 = curvePoints[curvePoints.length-1]

  	//error with this is that it always does the top
  	if(min(dist(i1[0],i1[1],x1,y1),dist(i1[0],i1[1],x3,y3)) <
  	   min(dist(i2[0],i2[1],x1,y1),dist(i1[0],i1[1],x3,y3)) ){
  		startI = 0;
  	} else { 
  		startI = curvePoints.length/2;
  	}

  	noStroke();	

  	var bottomCurve = [];

  	for (var i = 0; i < curvePoints.length/2; i++){
  		var point = curvePoints[i]
  		append(bottomCurve, point)
 	}

 	var topCurve = [];

  	for (var i = curvePoints.length/2; i < curvePoints.length; i++){
  		var point = curvePoints[i]
  		append(topCurve, point)
 	}

 	var top1 = topCurve[0]
 	var tX1 = top1[0]
 	var tY1 = top1[1]
 	var top2 = topCurve[topCurve.length-1]
 	var tX2 = top2[0]
 	var tY2 = top2[1]

 	var topDist = 	min(dist(x1,y1,tX1,tY1),dist(x3,y3,tX1,tY1)) +
 					min(dist(x1,y1,tX2,tY2),dist(x3,y3,tX2,tY2));

 	var bot1 = bottomCurve[0]
 	var bX1 = bot1[0]
 	var bY1 = bot1[1]
 	var bot2 = bottomCurve[bottomCurve.length-1]
 	var bX2 = bot2[0]
 	var bY2 = bot2[1]

 	var botDist = 	min(dist(x1,y1,bX1,bY1),dist(x3,y3,bX1,bY1)) +
 					min(dist(x1,y1,bX2,bY2),dist(x3,y3,bX2,bY2));


 	var goodArm;





 	//this gets the correct limb and draws
 	if (topDist < botDist){
 		goodArm = topCurve;
 	} else {
 		goodArm = bottomCurve;
 	}

 var endColor = getColor();

  var r = red(endColor);
  var g = green(endColor);
  var b = blue(endColor);

  var dR = (r - red(bodyColor))/(goodArm.length);
  var dG = (g - green(bodyColor))/(goodArm.length);
  var dB = (b - blue(bodyColor))/(goodArm.length);


 	//pretty sure radius is actually diameter but whatever
	var rad = bigRad;
	var dRad = (bigRad-smallRad)/goodArm.length




      if (i > goodArm.length/5){
        fill(color(r,g,b));
        r += dR;
        b += dB;
        g += dG;
      }

  	for (var i = 0; i < goodArm.length; i++){
  		var point = goodArm[i]
		ellipse(point[0],point[1],rad,rad)

		rad = rad+dRad;

		raCurvePts = topCurve;
	}


}

	function isValidPt(x1,y1,x2,y2,x,y,x0,y0){
		if ( x > min(x1,x2) && x < max(x1,x2)){
	return true;
	}
	return false;
}

function getCenter(x1,y1,x2,y2,x3,y3){
  //help from https://stackoverflow.com/questions/32861804/how-to-calculate-the-centre-point-of-a-circle-given-three-points
  var yD_a = y2 - y1;
  var xD_a = x2 - x1;
  var yD_b = y3 - y2;
  var xD_b = x3 - x2;
    
  var aSlope = yD_a/xD_a;
  var bSlope = yD_b/xD_b;
  
  x = (aSlope*bSlope*(y1 - y3) + bSlope*(x1 + x2) - aSlope*(x2+x3) )/(2* (bSlope-aSlope) );
  y = -1*(x - (x1+x2)/2)/aSlope +  (y1+y2)/2;
  var center = [ x, y  ]
  return center;
} 

function bodyLimbs(){
  var armLen = random(80,150);
  var legLen = random(50,150);
  
  
  var rArm = getRArm(armLen, 1);
  var lArm = getLArm(armLen, -1);
  //legs
  var rLeg = getRLeg(legLen);
  var lLeg = getLLeg(legLen);
  strokeWeight(2312413);
  //noStroke();
  var limbs = [rArm, rLeg, lLeg, lArm];
  beginShape(); curveVertex(rArm[0],rArm[1]); 
   							curveVertex(rArm[2],rArm[3]); 
  							curveVertex(rArm[4],rArm[5]); endShape();
  
  strokeWeight(1);
  stroke(2);

  raCurve = rArm;
  llCurve = lLeg;
  laCurve = lArm;
  rlCurve = rLeg;
}

function getRLeg(length){
  var x = lLegPts[0];
  var y = lLegPts[1]; 
  var len = length + random(0,20);
  
  ellipse(x,y,1,1);
  
  
  var deg = random(220,320)%360;
  var endX = x + len*cos(deg);
  var endY = y - len*sin(deg);
  
  //var middle = midPoint(x,y,endX,endY);
  var midX = (endX+x)/2 + random([random(20,40),random(-20,-40)]);
  var midY = (endY+y)/2 + random(-5,5); //+ random(-30,30); //(max(endY,y)-min(endY,y))/2 + min(endY,y) + random(-50,50);
  

  
  return [int(x),int(y),int(midX),int(midY),int(endX),int(endY)];
}

function getLArm(length, xOrientation){
  var x = lArmPts[0];
  var y = lArmPts[1]; 
  var len = length + random(-20,20);
  
  ellipse(x,y,1,1);
  
  
  var deg = random(330,360)%360;
  var endX = x+ len*cos(deg)*xOrientation;
  var endY = y + len*sin(deg);
  
  //var middle = midPoint(x,y,endX,endY);
  var midX = (endX+x)/2 + random(-5,5);
  var midY = (max(endY,y)-min(endY,y))/2 + min(endY,y) + random(-50,50);
  

  
  return [x,y,midX,midY,endX,endY];
}

function getLLeg(length){
  var x = rLegPts[0];
  var y = rLegPts[1]; 
  var len = length + random(0,20);
    
  
  var deg = random(220,320)%360;
  var endX = x + len*cos(deg);
  var endY = y - len*sin(deg);
  
  //var middle = midPoint(x,y,endX,endY);
  var midX = (endX+x)/2 + random([random(20,40),random(-20,-40)]);
  var midY = (endY+y)/2 + random(-5,5); //+ random(-30,30); //(max(endY,y)-min(endY,y))/2 + min(endY,y) + random(-50,50);
  

  
  return [x,y,midX,midY,endX,endY];
}

function getRArm(length, xOrientation){
  var x = rArmPts[0];
  var y = rArmPts[1]; 
  var len = length + random(-20,20);
    
  
  var deg = random(330,360)%360;
  var endX = x+ len*cos(deg)*xOrientation;
  var endY = y + len*sin(deg);
  
  //var middle = midPoint(x,y,endX,endY);
  var midX = (endX+x)/2 + random(-5,5);
  var midY = (max(endY,y)-min(endY,y))/2 + min(endY,y) + random(-50,50);
  

  var result =  [x,y,midX,midY,endX,endY];
  return result;
}

function drawMonster(){
  bodyHex();
}

function bodyHex(){
  var x1 = random(150,325);
  var y1 = random(200,300);
  var x2 = x1 + random(40,80);
  var y2 = y1 + random(-40,40);
  
  var x3 = x2 + random(0,100);
  var y3 = y2 + random(50,175);
  
  var x5 = x1 - random(0,75);
  var y5 = y3 + random (-30,30);
  
  var x4 = x5 + ((x3 - x5)/2) + random(-15,15);
  var y4 = max(y5,y3) + random(5,35);
  
  var hexPoints = [x1,y1,x2,y2,x3,y3,x4,y4,x5,y5];
  
  beginShape();
  for (var i = 0; i < hexPoints.length ; i+=2)
  {
    vertex(hexPoints[i],hexPoints[i+1]);
  }
  vertex(hexPoints[0],hexPoints[1]);
  endShape();
  
  hex = hexPoints;
}

//finds the midpoint of any 2 points
function midPoint(x1,y1,x2,y2){
  var xLength = max(x1,x2) - min(x1,x2);
  var yLength = max(y1,y2) - min(y1,y2);
  
  //Box Surrounding
  //line(x1,y1,x1+xLength,y1);
  //line(x1,min(y1,y2),x1,min(y1,y2)+yLength);
  //return x,y,length of line
  //var slope;
  //if (x1 == x2) { slope = -1; }
  //else {   var slope = (y1-y2)/(x1-x2); }
  return([min(x1,x2)+xLength/2,min(y1,y2)+yLength/2,dist(x1,y1,x2,y2)]); //,slope);
}

function bodyMids(){
 var h = hex;

 append(h,hex[0]);
 append(h,hex[1]);

 var armRight = midPoint(h[2],h[3],h[4],h[5]);

 var armLeft = midPoint(h[0],h[1],h[8],h[9]);
  
 var legLeft = midPoint(h[6],h[7],h[8],h[9]);
  
 var legRight = midPoint(h[6],h[7],h[4],h[5]);
  

 rArmPts = armRight;
 lArmPts = armLeft;
 lLegPts = legLeft;
 rLegPts = legRight;
  

 sideLength = min(dist(h[0],h[1],h[8],h[9]),dist(h[2],h[3],h[4],h[5]))

 for (var i = 0; i < h.length ; i+=2){
   var mid = midPoint(h[i],h[i+1],h[i+2],h[i+3]);
   append(mids, mid);
   
 }
}
