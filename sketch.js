
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var plane;
var stone;
var rubber;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10;
var iron;



function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(120,200);
  plane = new Plane(600,490,1200,20);
  stone = new Stone(800,350,100,100);
  rubber = new Rubber(300,250,35);
  

 sand1 = new Sand(100,300,10);
 sand2 = new Sand(200,300,10);
 sand3 = new Sand(50,300,10); 
 sand4 = new Sand(300,300,10);
 sand5 = new Sand(400,300,10);
 sand6 = new Sand(410,300,10);
 sand7 = new Sand(470,300,10);
 sand8 = new Sand(500,300,10);
 sand9 = new Sand(750,300,10);
 sand10 = new Sand(600,300,10);
 

  iron = new Iron(600,350,90,40);
  

	Engine.run(engine);
  
}


function draw() {
  
  background(rgb(12,104,112));
  Engine.update(engine);

  hammer.display();
  plane.display();
  stone.display();
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
  iron.display();



  
  drawSprites();
 
}



