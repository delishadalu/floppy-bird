
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var newX=500
var gameState="play"
function preload()
{
birdImg=loadImage("Skay.png")	
pipeImg=loadImage("Fa.png")	
pipe2Img=loadImage("bottom.png")
}

function setup() {
	createCanvas(800, 700);

pipeGroup= new Group()
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   bird1 = new Bird()
 
   
for (var i=0; i<30; i++){
	pipe1 = new Pipe( newX)
	newX+=500
	pipeGroup.add(pipe1.body)
	pipeGroup.add(pipe1.body2)
}
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 bird1.gravity()
camera.position.x= bird1.body.x+200

 if(keyDown("space")){
	 bird1.moveUp()
 }
if(gameState==="end"){
	textSize(30)
	fill("white")
 text ("gameover", bird1.body.x, height/2)
 bird1.body.velocityX=0
 bird1.body.velocityY=0

}

 bird1.body. collide ( pipeGroup, kill)
}

function kill(bird, pipe){
	gameState="end"
}



