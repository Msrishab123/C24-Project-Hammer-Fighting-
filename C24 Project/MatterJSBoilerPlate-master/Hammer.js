class Hammer {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':1,
          'density':2
      }
      this.body = Bodies.rectangle(x, y, 100, 25, options);
      this.width = 100;
      this.height = 35;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("yellow");
      strokeWeight(3);
      stroke("yellow");
      rect(0, 0, this.width, this.height);
      pop();
    }
}