
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj, crumpledBall, groundObj;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj = new Ground(600,height,1200,20)
	crumpledBall = new Ball(200,400,40);
	dustbinObj = new Dustbin(1200,650)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  crumpledBall.display();
  groundObj.display();
  dustbinObj.display();
 
}



