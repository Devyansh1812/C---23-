const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground1;
var box2;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
// create the objects with actual value which will be substituted with the arguements in the constructor
    box1 = new Box(200,300,50,50);
    ground1= new Ground(200,390,400,20);
    box2 = new Box(240,100,50,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground1.display();
    box2.display();
   
}