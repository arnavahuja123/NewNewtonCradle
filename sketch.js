
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var bobobject1,bobobject2,bobobject3,bobobject4,bobobject5;
var roof2;

function setup() {
  createCanvas(800, 700);
  
	engine = Engine.create();
	world = engine.world;

	bobobject1 = new Bob(320,380,50,50);
	bobobject2 = new Bob(250,350,50,50);
	bobobject3 = new Bob(180,320,50,50);
	bobobject4 = new Bob(110,290,50,50);
	bobobject5 = new Bob(40,260,50,50);

	roof2 = new Roof(250,100,350,20);

 rope1 = new Rope(bobobject1.body,roof2.body,(bobobject5.body.position.x * (-1) +200),0);
 rope2 = new Rope(bobobject2.body,roof2.body,(bobobject5.body.position.x * (-1) +150),0);
 rope3 = new Rope(bobobject3.body,roof2.body,(bobobject5.body.position.x * (-1) +100),0);
 rope4 = new Rope(bobobject4.body,roof2.body,(bobobject5.body.position.x * (-1) +50),0);
 rope5 = new Rope(bobobject5.body,roof2.body,bobobject5.body.position.x * (-1),0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();
  roof2.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed() {
   if (keyCode === UP_ARROW) 
   { Matter.Body.applyForce(bobobject1.body,bobobject1.body.position,{x:-50,y:-45});
   }
   }

