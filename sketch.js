var score=0;

var alien,grass, ground;
var alienImg,grassImg;
var edges;

function preload(){
  alienImg = loadImage("image1.png");
  grassImg = loadImage("image2.png");
}

function setup() {
  createCanvas(400, 400);
  
  ground= createSprite(0,390,1000,30);
  ground.shapeColor="green";
  
  alien = createSprite(200, 50);
  alien.addImage(alienImg);
  alien.scale = 0.3;

  grass=createSprite(200,380);
  grass.addImage(grassImg);
  grass.scale=0.2;
}

function draw() {
  background("black");
  
      if(keyDown("RIGHT")) {
      alien.x = alien.x + 4
    }
  
        if(keyDown("LEFT")){
      alien.x = alien.x - 4
    }
  
  edges = createEdgeSprites();
  alien.bounceOff(edges[0]);
  alien.bounceOff(edges[1]);
  
  grass.velocityY=-5;
  
  stroke("black");
  textSize(22);
  fill("white");
  text("Score: " +score,10,200);
  
  if (grass.isTouching(alien)){
   grass.x=random(30,360);
   score = score + 10;
   grass.y=380;
  }
  
  if (grass.y<0){
    background("red");
    textSize(30);
    fill("black");
    text("YOU LOST !",130,200);
    alien.visible = false;
    ground.visible = false;
  }
  
  drawSprites();
}
