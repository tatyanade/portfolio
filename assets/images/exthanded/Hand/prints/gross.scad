translate([5,8,5]){
    union(){
    
    rotate([0,120,0]){
    difference(){
    cylinder(1,1.3,1.3,$fn=100);

cylinder(1,1,1,$fn=100);
}}}

}

translate([5,-8,5]){
    union(){
    
    rotate([0,120,0]){
    difference(){
    cylinder(1,1.3,1.3,$fn=100);

cylinder(1,1,1,$fn=100);
}}}

}


translate([-4,0,8.5]){
    union(){
    
    rotate([0,90,0]){
    difference(){
    cylinder(1,1.3,1.3,$fn=100);

cylinder(1,1,1,$fn=100);
}}}

}



translate([10,0,-8.5]){
    union(){
    
    rotate([0,90,0]){
    difference(){
    cylinder(1,1.3,1.3,$fn=100);

cylinder(1,1,1,$fn=100);
}}}

}


difference(){
translate([0,-5,0]){rotate([0,0,90]){cube([10,35,.5]);

translate([0,20,0]){
cube([10,10,10]);}
}}

translate([-30,-2,7]){cube([10,4,1]);
}


}




translate([0,-1,0]){
difference(){
    
    hull(){
    sphere(d=17, $fn=100);
translate([0,2,0]){
    sphere(d=17, $fn=100);
}
translate([10,0,0]){
    
    sphere(d=17, $fn=100);
translate([0,2,0]){
    sphere(d=17, $fn=100);
}

}
}




hull(){
    sphere(d=13, $fn=100);
translate([0,2,0]){
    sphere(d=13, $fn=100);
}
translate([20,0,0]){
    
    sphere(d=13, $fn=100);
translate([0,2,0]){
    sphere(d=13, $fn=100);
}

}
}
}}