var wall ,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,200);
  wall.shapeColor = color(80,80,80);

  speed = random(223,321);
  weight =  random(30,52);
  bullet = createSprite(400,200,30,10);
  bullet.velocityX = speed;
}  

function draw() {  
  if(hasCollided(bullet,wall)){

    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

   if(damage>10){
    wall.shapeColor ="green";
   }

   if(damage<10){
   
    wall.shapeColor ="red";
  }
}
  
  drawSprites();
}
