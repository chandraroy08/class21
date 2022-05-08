const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground1
var ground2
var ground3
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  ground1= new Ground(200,390,400,20)
  ground2= new Ground(80,200,20,400)
  ground3= new Ground(385,200,20,400)

  
  
}

function draw() 
{
  background("green");
  Engine.update(engine);
  ground1.display()
  ground2.display()
  ground3.display()
}

