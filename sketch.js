const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
    world = engine.world;

  ground =new Ground(800, 350, 50, 10);
}

function draw() {
  background(255,255,255);  

  ground.display();
  drawSprites();
}