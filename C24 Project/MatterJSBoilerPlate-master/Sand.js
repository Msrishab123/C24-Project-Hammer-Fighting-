class Sand {
    constructor(x, y, radius) {
        var options ={
        'restitution':1.3,
          'friction':5,
          'density':1
    }

this.body = Bodies.circle(x,y,radius,options);
this.r = radius;
World.add(world, this.body);
}
display() { 
    var sandpos=this.body.position; 
    push() 
    translate(sandpos.x, sandpos.y); 
    rectMode(CENTER) 
    strokeWeight(4); 
    stroke("brown"); 
    fill("brown"); 
    ellipse(0,0,this.r, this.r); 
    pop() 
}
}