
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var hammer;
var stone;
var iron;
var rubber;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground (400,height,800,20);

	hammer = new Hammer(200,200);

	stone = new Stone(400, 550, 100,100);

	iron = new Iron (200,550,50,50);

  rubber = new Rubber(700,690,105); 

  sand1 = new Sand (200,500,10);
  sand2 = new Sand (200,500,10);
  sand3 = new Sand (200,500,10);
  sand4 = new Sand (200,500,10);
  sand5 = new Sand (200,500,10);
  sand6 = new Sand (200,500,10);
  sand7 = new Sand (200,500,10);
  sand8 = new Sand (200,500,10);
  sand9 = new Sand (200,500,10);
  sand10 = new Sand (200,500,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  ground.display();
  hammer.display();
  stone.display();
  iron.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  drawSprites();
 
}



