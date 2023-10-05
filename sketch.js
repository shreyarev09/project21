var Harry, HarryFlying, HarryStanding;
var Background, BackgroundImg;
var Accio, AccioImg, Expecto, ExpectoImg, Expelliarmus, ExpelliarmusImg, Avada, AvadaImg;
var AccioG,ExpectoG,ExpelliarmusG,AvadaG;
var GameOver, GameOverImg, Reset, ResetImg;
var score = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload() {
  BackgroundImg = loadImage("Background.png");
  HarryFlying = loadImage("Harryflying.png");
  HarryStanding = loadImage("Harrystanding.png");
  AccioImg = loadImage("Accio.png");
  ExpectoImg = loadImage("Expecto.png");
  ExpelliarmusImg = loadImage("Expelliarmus.png");
  AvadaImg = loadImage("Avada.png");
  GameOverImg = loadImage("GameOver.png");
  ResetImg = loadImage("Reset.png");
}

function setup() {
  createCanvas(600, 300);

  // Add Background
  Background = createSprite(600,300);
  Background.addImage("Background", BackgroundImg);
  
  

  // Add Harry
  Harry = createSprite(50, 160, 20, 50);
  Harry.addImage("Standing", HarryStanding);
  Harry.scale = 0.1;
  Harry.addImage("Flying", HarryFlying);
  

  // Add Spells

 

  // Add GameOver
  GameOver = createSprite(300, 100);
  GameOver.addImage("gameover", GameOverImg);
  GameOver.scale = 0.5;


  // Add Reset
  Reset = createSprite(350, 160);
  Reset.addImage("reset", ResetImg);
  Reset.scale = 0.2;

  score=0;

  AccioG=new Group();
ExpectoG=new Group();
ExpelliarmusG=new Group();
AvadaG=new Group();
}
 

function draw(){
 
//HarryStanding.visible=true;
//HarryFlying.visible=false;
//if(gameState === PLAY){
  if (Background.x < 0){
    Background.x = Background.width/2;
  }
  edges= createEdgeSprites();
  Harry.collide(edges);
GameOver.visible=false;
Reset.visible=false;
//HarryStanding.visible=true;
  text("Score: "+ score, 500,50)
  fill("purple");
  createAccio();
  createExpelliarmus();
  createExpecto()
  createAvada()
  if(keyDown("space")){
  Harry.changeAnimation("Flying", HarryFlying);
  Background.velocityX = -1;
  }

  if(keyDown("up_arrow")){
  Harry.velocityY=-2;
  }
  if(keyDown("down_arrow")){
    Harry.velocityY=+2;
  }
  if (AccioG.isTouching(Harry)) {
    AccioG.destroyEach();
    score=score+5;
    }
  else if (ExpelliarmusG.isTouching(Harry)) {
    ExpelliarmusG.destroyEach();
    score=score+5;
    
    }else if(ExpectoG.isTouching(Harry)) {
    ExpectoG.destroyEach();
    score= score +5;
    
    }else{
    if(AvadaG.isTouching(Harry)) {
      gameState=END;
     
     
      AccioG.destroyEach();
      ExpelliarmusG.destroyEach();
      ExpectoG.destroyEach();
      AvadaG.destroyEach();
      
      AccioG.setVelocityYEach(0);
      ExpelliarmusG.setVelocityYEach(0);
      ExpectoG.setVelocityYEach(0);
      AvadaG.setVelocityYEach(0);

      Harry.changeAnimation("Standing", HarryStanding);
      Harry.velocityY=0;
      Harry.visible=true;
      GameOver.visible=true;
      Reset.visible=true;

}

}

  drawSprites();
 
  
  
}

    
function createAccio() {
  if (World.frameCount % 200 == 0) {
  var Accio = createSprite(600,140, 100, 100);
  Accio.addImage(AccioImg);
 
  Accio.velocityX= -3;
  Accio.lifetime = 150;
  AccioG.add(Accio );
  }
}
function createExpelliarmus() {
  if (World.frameCount % 320 == 0) {
  var Expelliarmus = createSprite(600,40, 10, 10);
  Expelliarmus.addImage(ExpelliarmusImg);
  Expelliarmus.scale=0.3;
  Expelliarmus.velocityX = -3;
  Expelliarmus.lifetime = 150;
  ExpelliarmusG.add(Expelliarmus);
}
}
function createExpecto() {
  if (World.frameCount % 320 == 0) {
  var Expecto = createSprite(600,100, 10, 10);
  Expecto.addImage(ExpectoImg);

  Expecto.velocityX=-3;
  Expecto.lifetime = 150;
  ExpectoG.add(Expecto);
}
}
function createAvada() {
  if (World.frameCount % 320 == 0) {
  var Avada = createSprite(600,200, 10, 10);
  Avada.addImage(AvadaImg);
  Avada.scale=0.3
  Avada.velocityX= -3;
  Avada.lifetime = 150;
  AvadaG.add(Avada);
}
}

