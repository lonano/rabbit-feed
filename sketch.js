var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var redLeaf,redLeafImg;
var greenLeaf,greenLeafImg;
var orangeLeaf,orangeLeafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  redLeafImg = loadImage("redleaf.png");
  greenLeafImg = loadImage("leaf.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// creating the background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit moving
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);



}

function draw() {
  background(0);
  var ran = Math.round(random(0,5))
  if(frameCount % 100 === 0){
    if(ran==1){
      createApples();
    }
   else if(ran==2){
    createGreenLeaves();
   }
   else if(ran==3){
    createRedLeaves();
   }
   else{
    createOrangeLeaves();
   }
    
  }
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX;
  drawSprites();
}

function createApples(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.05;
  apple.velocityY=6;
  apple.lifetime=68;
}
function createRedLeaves(){
  redLeaf = createSprite(random(50,350),40,10,10);
  redLeaf.addImage(redLeafImg);
  redLeaf.scale = 0.05;
  redLeaf.velocityY=4;
  redLeaf.lifetime=100;
}
function createGreenLeaves(){
  greenLeaf = createSprite(random(50,350),40,10,10);
  greenLeaf.addImage(greenLeafImg);
  greenLeaf.scale = 0.05;
  greenLeaf.velocityY=3;
  greenLeaf.lifetime=136;
}
function createOrangeLeaves(){
  orangeLeaf = createSprite(random(50,350),40,10,10);
  orangeLeaf.addImage(orangeLeafImg);
  orangeLeaf.scale = 0.05;
  orangeLeaf.velocityY=2;
  orangeLeaf.lifetime=200;
}