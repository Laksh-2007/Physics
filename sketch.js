const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object, ground1, ball;
var box1, box2;;
//laksh
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
box1 = new Box(240,100,50,50);
box2 = new Box(200,300,50,50);
ground1 = new Ground(200,370,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
box1.display();
box2.display();
ground1.display();
}
//paste this it should  translate and rotate too
//maam its not happening
  
 