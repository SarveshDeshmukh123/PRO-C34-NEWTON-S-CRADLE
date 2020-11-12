const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Bob, bob2, bob3, bob4, bob5;
var Roof;
var Rope;
var bobDiameter=80;


function preload()
{
	
}

function setup() {
	createCanvas(1100, 600);


	engine = Engine.create();
	world = engine.world;

	
	Bob = new bob(340,480,39.6);
	bob2 = new bob(420,480,39.6);
	bob3 = new bob(500,480,39.6);
	bob4 = new bob(580,480,39.6);
	bob5 = new bob(660,480,39.6);
	Roof = new roof(500,100,400,20);
	Rope1 = new rope(Bob.body,Roof.body,-bobDiameter*2,0)
	Rope2 = new rope(bob2.body,Roof.body,-bobDiameter*1,0)
	Rope3 = new rope(bob3.body,Roof.body,bobDiameter*0,0)
	Rope4 = new rope(bob4.body,Roof.body,bobDiameter*1,0)
	Rope5 = new rope(bob5.body,Roof.body,bobDiameter*2,0)

    
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(random(0,250,125),mouseX,mouseY);

  fill("black");
  Bob.display();
  
  bob2.display();
  
  bob3.display();
  
  bob4.display(); 
  
  bob5.display();

  fill("red")
  Roof.display();
  
  Rope1.display();
  Rope2.display();
  Rope3.display();
  Rope4.display();
  Rope5.display();
  
  drawSprites();
 
  textSize(30);
  fill ("black");
  text("THE LAW'S OF NEWTON SAYS THAT",270,30);
  text("EVERY ACTION HAS AN EQUAL AND OPPOSITE REACTION",100,65);
  text("PRESS UP ARROW KEY TO ENSURE THIS LAW",200,570);
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(Bob.body,Bob.body.position,{x:-800,y:-500})
	}
}