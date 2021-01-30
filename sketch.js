var ground;
var tree;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	treeImage=loadImage("tree.png")
	boyImage=loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(400,600,1000,10);
	stone = new Stone(120,500,50)
  console.log(stone);
  mango1 = new Mango(100,100,10)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  ground.display();
  image(treeImage,300,100,500,500)
  image(boyImage,100,450,150,200)
  stone.display();
  mango1.display();
  drawSprites();
 
}