const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var rope1,rope1c;
var rope2,rope2c;
var rope3,rope3c;
var rope4,rope4c;
var rope5,rope5c;

//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var ball_options={
		restitution:0.8			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob1 = Bodies.circle(400,100,20,ball_options);
    World.add(world,bob1);
    bob2 = Bodies.circle(400,100,20,ball_options);
    World.add(world,bob2);
	bob3 = Bodies.circle(500,100,20,ball_options);
    World.add(world,bob3);
	bob4 = Bodies.circle(600,100,20,ball_options);
    World.add(world,bob4);
	bob5 = Bodies.circle(700,100,20,ball_options);
    World.add(world,bob5);

	rope1 = new rope(roof,bob1,-85,0,0.98,rope1c);

	rope2 = new rope(roof,bob2,-35,0,0.98,rope2c);

	rope3 = new rope(roof,bob3,-10,0,0.98,rope3c);

	rope4 = new rope(roof,bob4,+45,0,0.98,rope4c);

	rope5 = new rope(roof,bob5,+70.5,0,0.98,rope5c);

	//rope4 = new rope(roof,bob5,+35,0,0.98,rope4c);



	Engine.run(engine);
  
}

function draw() {
  background("#99004d");

  Engine.update(engine)
  
  rectMode(CENTER);
    
  ellipseMode(CENTER);
  fill("darkBlue");
  rect(roof.position.x,roof.position.y,200,20);
  fill("red");
  ellipse(bob1.position.x,bob1.position.y,40);
  fill("orange");
  ellipse(bob2.position.x,bob2.position.y,40);
  fill("yellow");
  ellipse(bob3.position.x,bob3.position.y,40);
  fill("green");
  ellipse(bob4.position.x,bob4.position.y,40);
  fill("lightBlue");
  ellipse(bob5.position.x,bob5.position.y,40);

  line(roof.position.x-85,roof.position.y,bob1.position.x,bob1.position.y);
  line(roof.position.x-35,roof.position.y,bob2.position.x,bob2.position.y);
  line(roof.position.x-15,roof.position.y,bob3.position.x,bob3.position.y);
  line(roof.position.x+45,roof.position.y,bob4.position.x,bob4.position.y);
  line(roof.position.x+70,roof.position.y,bob5.position.x,bob5.position.y);
  
  //call display() to show ropes here
  //rope1.show();

  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	
	if (keyCode===RIGHT_ARROW){
	  Matter.Body.applyForce(bob1,{x:0,y:0},{x:0.05,y:0});
	}
  
	if (keyCode===LEFT_ARROW){
	  Matter.Body.applyForce(bob1,{x:0,y:0},{x:-0.05,y:0});
	}
	  
	
    
}
