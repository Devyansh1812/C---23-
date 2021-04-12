class Box {
  constructor(x, y, width, height) {
    //arguements to the constructor are given so that the user can tell us where to make the box by giving actual values while creating the objects in sketch.js
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle=this.body.angle;
    //push captures the new settings
    push();
    //translate remaps the position of the moving object on the canvas hence while displaying put 0 for x and y position(line 24)
    translate(pos.x,pos.y);
    rotate(angle);// rotate will rotate the body with a particular angle 
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();// pop reverts to the old things
  }
};
