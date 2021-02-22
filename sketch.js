var fairy,fairyImg;
var star,starImg;
var bg;
var canvas;


function preload()
{
   //preload the images here
bg = loadImage("images/starnight.png");
starImg = loadImage("images/star.png");
fairyImg = loadAnimation("images/fairy.png");
fairyImg1 = loadAnimation("images/fairy1.png","images/fairy2.png");

}

function setup() {
canvas =	createCanvas(800, 750);

fairy = createSprite(100,585);
fairy.addAnimation("fairyFlying",fairyImg1);
fairy.scale = 0.2;

star = createSprite(650,100);
star.addImage("star",starImg);
star.scale = 0.25;

star.debug = false
fairy.setCollider("circle",500,0,40);
fairy.debug = false
}


function draw() {
  background(bg);
  
  if(keyDown("left")){
    fairy.velocityX = -5;
    fairy.addAnimation("fairyFlying",fairyImg1);}

    if(keyDown("right")){
      fairy.velocityX = 5;
      fairy.addAnimation("fairyFlying",fairyImg1);}

      if(keyDown("down")){
        star.velocityY = 3;}
        
        if(fairy.isTouching(star)){
          fairy.velocityX=0;
        }


if(star.isTouching(fairy)){
  star.velocityY=0;
}



drawSprites();
}


