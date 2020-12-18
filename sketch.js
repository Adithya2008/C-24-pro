const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,dustbin2,dustbin3,ground1,paperObject;
var dustbinblock,dustbinImage;
var paddle1,paddle2,paddle3;
var wallLeft,wallUp,wallRight,wallDown;

function preload()
{
	dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	
	createCanvas(1200, 700);
	
	engine = Engine.create();
	world = engine.world;

	dustbin1 = new Dustbin(930,500,20,329);
	dustbin2 = new Dustbin(1040,660,200,20);
	dustbin3 = new Dustbin(1150,500,20,329);
	

	paperObject = new Paper(100,505,40);
	
	//paperObject = addImage(paperImage);
	dustbinblock = createSprite(1040,500,5,5);

	dustbinblock.addImage(dustbinImage);
	
	paddle1= new Paddle(350,605,100,20);
	paddle2= new Paddle(550,505,100,20);
	paddle3= new Paddle(750,405,100,20);

	ground1= new Ground(600,680,1200,20);
	//Create the Bodies Here.
	
	wallLeft = new Border(10,330,20,700 );
	wallUp = new Border(600,10,1200,20);
	wallRight = new Border(1200,330,20,700)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("limegreen");
  Engine.update(engine);
 
  
  drawSprites();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paperObject.display();
  ground1.display();
  dustbinblock.display();
  paddle1.display();
  wallLeft.display();
  wallUp.display();
  wallRight.display();
  paddle2.display();
  paddle3.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)
	{ 	
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:20,y:-20});

	}
	if(keyCode === LEFT_ARROW)
	{ 	
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:-10,y:10});

	}
	if(keyCode === RIGHT_ARROW)
	{ 	
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:10,y:10});

	}
}
