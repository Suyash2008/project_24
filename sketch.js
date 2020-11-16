
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 paper = new Paper(50,400,50)
	 ground = new Ground(400,600,800,20)
	 bin = new Bin(700,520,10,150)
	 bin2 = new Bin(550,520,10,150);
	 bin3 = new Bin(620,590,150,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  bin.display();
  bin2.display();
  bin3.display();

if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-12})
}
if(keyCode === DOWN_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:0,y:12})
}
 
}



