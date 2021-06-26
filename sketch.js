
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, plane, stone, rubber, iron;

function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	hammer = new Hammer(10,100);
	plane = new Plane(600,height,1200,20)
  stone = new Stone(700,320,100,100);
  rubber = new Rubber(900,450,70);
  iron = new Iron(300,350);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  hammer.display();
  plane.display();
  stone.display();
  rubber.display();
  iron.display();

  drawSprites();
 
}
