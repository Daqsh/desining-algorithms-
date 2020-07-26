var movingrect; 
var fixedrect;
function setup() {
  createCanvas(800,400);
movingrect= createSprite(30,20,70,20);
/*movingrect.velocityX=0;
movingrect.velocityY=-2;*/

fixedrect= createSprite(200,200,70,20);
  }

function draw() {
  background(255,255,255);  
  movingrect.y=mouseY;
  movingrect.x=mouseX;

  if(fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 
    && movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    && movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 
    && fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";
  
}
else{
  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";
}
drawSprites();
}