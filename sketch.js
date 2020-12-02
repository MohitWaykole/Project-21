var bullet, wall, thickness;
var speed, weight;
var damage;

function setup(){
  createCanvas(1600, 400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 50, 30);
  bullet.velocityX = speed;

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = rgb(80,80,80);
}

function draw(){
  background("black");

  console.log(speed);
  if (bullet.x - wall.x < bullet.width/2 + wall.width/2 && 
    wall.x - bullet.x < wall.width/2 + bullet.width/2 && 
    bullet.y - wall.y < bullet.height/2 + wall.height/2 && 
    wall.y - bullet.y < wall.height/2 + bullet.height/2){

      bullet.velocityX = 0;

    }

  if (hasCollided(bullet, wall)){
    damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)
  }

  if (damage > 10){
    wall.shapeColor = rgb(255, 0, 0);
  }

  if (damage < 10){
    wall.shapeColor = rgb(0, 255, 0);
  }

  drawSprites();
}

function hasCollided(lWall, lBullet){
  bulletRightEdge = lBullet.x + lBullet.width;
  wallLeftEdge = lWall.x;

  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}