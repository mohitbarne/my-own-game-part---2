//variables
var bg1,bg2,bg3,bg4

var oz,ozRun,ozJump,ozSlide,ozFall
var table1,table2

function preload() {
  bg1 = loadImage("images/room1.jpg");
  bg2 = loadImage("images/room2.jpg");
  bg3 = loadImage("images/room3.jpg");
  bg4 = loadImage("images/room4.jpg");
  
  //oz animation
  boy1 = loadAnimation("images/boy1.PNG");
  ozRun = loadAnimation("images/boy2.PNG","images/boy3.PNG",
    "images/boy4.PNG","images/boy5.PNG","images/boy6.PNG",
    "images/boy7.PNG");
  ozJump =loadAnimation("images/boy9.PNG");
  ozSlide = loadAnimation("images/boy11.PNG");
  ozFall = loadAnimation("images/boy12.PNG")
  
  gameover = loadImage("images/gameover.png");
  
  box1 = loadImage("images/box1.png");
  box2 = loadImage("images/box2.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  oz = createSprite(windowHeight-200, 200, 50, 50);
  oz.addAnimation("run",ozRun)
  oz.addAnimation("jump",ozJump)
  oz.addAnimation("slide",ozSlide)
  oz.addAnimation("fall",ozFall)
  oz.scale =2

  ground = createSprite(windowWidth/2, windowHeight-30,windowWidth,10)
  //ground.visible = false

  obstaclesGroup = createGroup()

}

function draw() {
  background(bg1); 

  //jump
  if(keyDown("up") ){
    oz.velocityY =-20
    oz.changeAnimation("jump",ozJump)
  }
  if(oz.y >880){
    oz.changeAnimation("run",ozRun)
  }
  //slide
  if(keyDown("down")){
    oz.changeAnimation("slide",ozSlide)
  }

  //camera position for oz
  camera.position.x = oz.x
  camera.position.y = oz.y

  //gravity
  oz.velocityY += 1.0  
  oz.collide(ground)
 //console.log(oz.y)
    
  spawnObstacles()
  
   
 
  //46: starting page- title, rules,button,
  
  /*oz is from another far away planet ZATHURA and he escaped from his planet
  beacuse didnt like his planet, he found earth very intersting
  but people of his plant are truying to search him
  help oz escape as he is innocent...
  */
 //if you fail to help him escape.=, he will be taken away 
 
 //47: life for oz -- 3 heart and score
  //48: testing...sound
  
  drawSprites();
}

//like spawn obstacles in trex same like that make your obstacles
function spawnObstacles() {
  //write code here to spawn the obstacles
  if (frameCount % 260 === 0) {
    var obstacles = createSprite(windowWidth,1000,40,10);

    var r = Math.round(random(1,2))
    switch(r){
      case 1 : obstacles.addImage(box1);
      break;
      case 2: obstacles.addImage(box2);
      break;



      default: break;
    }
    
    obstacles.scale = 1.0;
    obstacles.velocityX = -6;
    
     //assign lifetime to the variable
     obstacles.lifetime = 800;
    
    //adjust the depth
    
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacles);
  }
  
}

//for spawning food




