//this 1 variable will take the image according to random no.
var balloon;
//separate groups for each colour
var redGroup,greenGroup,blueGroup,pinkGroup;
//different colours
var redBalloon,blueBalloon,pinkBalloon,greenBalloon;
var bg,bgImg;
var bow,bowImg;
var score;
//random no.s
var rand,r;
//arrow variable and group
var arrow,arrowsGroup,arrowImg,temp_arrow;

function preload() {
  redBalloon = loadImage("red_balloon0.png");
  blueBalloon = loadImage("blue_balloon0.png");
  pinkBalloon = loadImage("pink_balloon0.png");
  greenBalloon = loadImage("green_balloon0.png");
  bgImg = loadImage("background0.png");
  bowImg = loadImage("bow0.png");
  arrowImg = loadImage("arrow0.png");
}

function setup() {
  createCanvas(600, 600);
  
  //making a moving background
  bg = createSprite(0,0,600,600);
  bg.addImage(bgImg);
  bg.scale = 3;
  
  //bow
  bow = createSprite(550,300,25,25);
  bow.addImage(bowImg);
  
  //making arrow and balloons group
  arrowsGroup = new Group();
  balloonGroup = new Group();
  redGroup = new Group();
  pinkGroup = new Group();
  blueGroup = new Group();
  greenGroup = new Group();
  
  score=0;
}

function draw() {
  background("white");
  
  //to give velocity and making background infinite
  bg.velocityX = -3;
  if(bg.x<0){
    bg.x = bg.width/2;
  }
  
  //to make bow move with mouse
  bow.y=World.mouseY;
  
  //random no. for generating y position
  rand = Math.round(random(30,370));
  
  makeBalloons();
  
  //make arrows
  if(keyDown("space")){
    temp_arrow = makeArrows();
  }
  
  if(arrowsGroup.isTouching(redGroup)){
    arrowsGroup.destroyEach();
    redGroup.destroyEach();
    score=score+2; //2 pts for red
  }
  
  if(arrowsGroup.isTouching(greenGroup)){
    arrowsGroup.destroyEach();
    greenGroup.destroyEach();
    score=score+3; //3 ptss for green
  }
  
  if(arrowsGroup.isTouching(blueGroup)){
    arrowsGroup.destroyEach();
    blueGroup.destroyEach();
    score=score+4; //4 pts for blue
  }
  
  if(arrowsGroup.isTouching(pinkGroup)){
    arrowsGroup.destroyEach();
    pinkGroup.destroyEach();
    score=score+1; //1 pt for pink
  }
  
  drawSprites();
  //scoring display
  textSize(20);
  text("Score : "+score,270,30);
}

function makeBalloons() {
  
  if(frameCount%100===0){
    //genrate random no.s for balloon
    r = Math.round(random(1,4));
    switch(r){
        case 1: redB();
        break;
        case 2: blueB();
        break;
        case 3: pinkB();
        break;
        case 4: greenB();
        break;
        default:
    }
  }
}

function redB(){
  red = createSprite(0,rand,20,20);
  red.velocityX = 3;
  red.addImage(redBalloon);
  red.scale = 0.13;
  red.lifetime = 200;
  redGroup.add(red);
  //varibale for red baloons
}

function greenB(){
  green = createSprite(0,rand,20,20);
  green.velocityX = 3;
  green.addImage(greenBalloon);
  green.scale = 0.13;
  green.lifetime = 200;
  greenGroup.add(green);
  //variable for green balloons
}

function blueB(){
  blue = createSprite(0,rand,20,20);
  blue.velocityX = 3;
  blue.addImage(blueBalloon);
  blue.scale = 0.15;
  blue.lifetime = 200;
  blueGroup.add(blue);
  //variable for blue balloons
}

function pinkB(){
  pink = createSprite(0,rand,20,20);
  pink.velocityX = 3;
  pink.addImage(pinkBalloon);
  pink.scale = 1.5;
  pink.lifetime = 200;
  pinkGroup.add(pink);
  //variable for pink balloons
}

function makeArrows(){
  arrow = createSprite(550,300,60,10);
  arrow.addImage(arrowImg);
  arrow.scale = 0.25;
  arrow.velocityX = -4;
  arrow.y=World.mouseY;
  arrow.lifetime = 150;
  arrowsGroup.add(arrow);
}