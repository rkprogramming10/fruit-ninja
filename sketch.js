var PLAY = 1;
var END = 0;
var gameState = PLAY;
var swordImage,gameoverImage;
var fruitGroup,fruit1,fruit2,fruit3,fruit4;
var alienGroup,alien1,alien2;
var score;
var gameoverSound,knifeSwooshSound;



function preload(){
  alienImage = loadAnimation("alien1.png","alien2.png");
  swordImage = loadImage("sword.png");
  fruit1= loadImage("fruit1.png");
  fruit2= loadImage("fruit2.png");
 fruit3= loadImage("fruit3.png");
  fruit4= loadImage("fruit4.png");
  gameoverImage= loadImage("gameover.png");
  knifeSwooshSound = loadSound("knifeSwooshSound.mp3");
  gameoverSound = loadSound("gameover.mp3");
  
  
  
}
function setup() {
  createCanvas(600,500);
  sword = createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale=0.7;
  
  gameover = createSprite(300,250);
  gameover.addImage(gameoverImage);
  
  fruitGroup = createGroup();
  alienGroup= createGroup();
  
  console.log("hello" + 5);
  
 score= 0
  
}
function draw(){
background("black");
  
  text("score: "+ score,500,50);
 
  if(gameState == PLAY){
    sword.y=World.mouseY
    sword.x= World.mouseX
    
  }
  if(alienGroup.isTouching(sword)){
    gameState= END;
    gameoverSound.play();
  }
  else if(gameState==END){
    sword.addImage(gameoverImage);
    sword.x=200;
    sword.y=200;
    
  }
  
  if(fruitGroup.isTouching(sword)) {
    fruitGroup.destroyEach();
    knifeSwooshSound.play();
    score= score+2;
  }
  
  drawSprites();
}
  function fruit(){
   position= Math.round(random(1,2));
    fruit= createSprite(400,200,20,20);
    if(position==1)
      {
        fruit.x=400;
        fruit.velocityX=-(7+score/4);
    }
    else
      {
        if(position==2){
          fruit.x=0;
          fruit.velocityX=(7+score/4);
        }
      }
    
  
  }
function enemy(){
  if(World.frameCount % 200==0){
    alien= createSprite(400,200,20,20);
    alien.addAnimation("moving",alienImage);
    alien.y=Math.round(random(100,300));
    alien.velocityX=-(8+score/10);
    alien.setLifetime=50;
    
    alienGroup.add(alien);
  }
}

