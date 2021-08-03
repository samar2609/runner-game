var path,pathImg;
var runner, runnerAnimation
var edges;
var invisibleGround1;
var invisibleGround2;


function preload(){
  //pre-load images
pathImg = loadImage("path.png");
runnerAnimation = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(600,500);
  //create sprites here

path = createSprite(200,180,300,300);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.5;

 invisibleGround1 = createSprite(380,200,10,700)
 invisibleGround1.visible = false


invisibleGround2= createSprite(20,200,10,700)
invisibleGround2.visible = false


runner = createSprite(300,100,20,50)           
runner.addAnimation("runner",runnerAnimation);
runner.scale = 0.15;
}


function draw() {
  background("white");

  if(path.y > 400 ){
    path.y = height/2;
  }
  
runner.x = World.mouseX 


edges = createEdgeSprites();
runner.collide(edges[3])
runner.collide(invisibleGround1)
runner.collide(invisibleGround2)
drawSprites()
}
