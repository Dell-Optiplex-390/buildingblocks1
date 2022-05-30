
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;
var boxes=[];

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  var option={
    isStatic:false
  };
  ground=Bodies.rectangle(100,300,400,20);
  Matter.Body.setStatic(ground, true)

  World.add(world,ground);
  box1 = new Box(10,10,2,2);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}
function mousePressed(){
  boxes.push(
    
    
    new Box(mouseX,mouseY,mouseX,mouseY)
    
    
    )
}

function draw() 
{
  background(51);
  rect(ground.position.x,ground.position.y,700,10);
  Engine.update(engine);
  for(var i=0;i<boxes.length;i++) {
    boxes[i].show();}
     
  
}

