var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var sideRect1;
var sideRect2;
var sideRect3;
var sideRect4;
var SideRect5;
var SideRect6;
var SideRect7;
var SideRect8;
var SideRect9;
var horiRect;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	var canvas=createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor= "red";
 

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 sideRect1=new Siderect(550,630,20,100);
	 sideRect2=new Siderect(150,630,20,100);
	 sideRect3=new Siderect(250,630,20,100);
	 sideRect4=new Siderect(350,630,20,100);
	 sideRect5=new Siderect(450,630,20,100);
	 sideRect6=new Siderect(200,630,20,100);
	 sideRect7=new Siderect(300,630,20,100);
	 sideRect8=new Siderect(400,630,20,100);
	 sideRect9=new Siderect(500,630,20,100);
	 horiRect=new Horirect(250,250,20,5);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  sideRect1.display();
  sideRect2.display();
  sideRect3.display();
  sideRect4.display();
  sideRect5.display();
  sideRect6.display();
  sideRect7.display();
  sideRect8.display();
  sideRect9.display();
  horiRect.display();
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false);
    
  }
}



