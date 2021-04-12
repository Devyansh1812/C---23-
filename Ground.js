//properties are inside the constructor,tells us how the ground looks like
//display is a function which helps the ground to be displayed
class Ground{
    constructor(x,y,width,height){
      var options= {
          isStatic:true
      } 
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
   display(){
       var pos= this.body.position
       rectMode(CENTER);
       fill(255)
       rect(pos.x,pos.y,this.width,this.height);
   }
    
}