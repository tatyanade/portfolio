difference(){
    hull(){
    translate([-1,0,0]){
    cylinder(4,20/2,20/2,$fn=100);}
    translate([1,0,0]){
    cylinder(4,20/2,20/2,$fn=100);}
     }
    union(){
        cylinder(4,19/2,19/2,$fn=100);
        translate([10-.4,-1.5,]){
            cube([1,3,4]);
    }

        translate([-10-.6,-1.5,0]){
            cube([1,3,4]);
    }   
    }
}



