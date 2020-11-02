
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  
  monkey=createSprite(100,350,20,20);
monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale=0.1;

  ground = createSprite(600,390,1200,10);
  ground.debug=true;
  ground.x = ground.width /2;
 ground.velocityX = -(6 + 3*score/100);
  
  
  foodGroup = new Group();
  obstaclesGroup = new Group();
  
  score=0;
}


function draw() {
background("white");
  
  text("Score: "+ score, 500,50);
  if(keyDown("space") && monkey.y >= 159){
      monkey.velocityY = -12;
    }
  
   monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  score = score + Math.round(getFrameRate()/60);
    ground.velocityX = -(6 + 3*score/100);
  
    monkey.collide(ground);
    spawnbanana();
    spawnobstaclesGroup();
  
  obstaclesGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
  
  
  
  drawSprites();
}

function spawnbanana(){
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,200,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(cloudImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    
    cloud.lifetime = 200;
    
 banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;   
  
     foodGroup.add(banana);
}

function spawnobstacles(){
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -(6 + 3*score/100);

    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }
    
     obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    
    obstaclesGroup.add(obstacle);
  }
}
}