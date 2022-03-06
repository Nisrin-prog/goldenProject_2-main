const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var gameState,PLAY,END
var bg,boyImg,boyStd,boy
var startingPointImg,floatingIsland1,floatingIsland2
var float1,float2,float3,float4,startingPoint

function preload() {
  bg = loadImage("./Assets/bg.png");
  boyImg = loadAnimation(
    "./Assets/boy1.png",
    "./Assets/boy2.png",
    "./Assets/boy3.png",
    "./Assets/boy4.png"
  );
  boyStd = loadAnimation("./Assets/boy4.png");
  startingPointImg = loadImage("./Assets/startingPoint.png");
  floatingIsland1 = loadImage("./Assets/floatingIsland1.png");
  floatingIsland2 = loadImage("./Assets/floatingIsland2.png");
 
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  imageMode(CENTER);
  boy = new Boy(70, height - 605);
  console.log(boy.body);

  startingPoint = new Ground(100, height - 400, 100, 250, startingPointImg);
  float1 = new Ground(450, height - 300, 100, 250, floatingIsland1);
  float2 = new Ground(700, height - 350, 100, 250, floatingIsland2);
  float3 = new Ground(950, height - 450, 100, 250, floatingIsland1);
  float4 = new Ground(1150, height - 250, 100, 250, floatingIsland2);
  //endingPoint = new Ground(1200, height - 300, 150, 250, startingPoint);

  obstacle1 = new Obstacle(100,50)
  obstacle2 = new Obstacle(450,50)
  PLAY = 1
  END = 0 
  gameState = PLAY
}

function draw() {
  background(255);
  Engine.update(engine);
  image(bg, width / 2, height / 2, width, height);
  if(gameState === PLAY){
    // Game Background
   
    textSize(30);
    fill("black");
    text("Press Space To Jump", width / 2 - 100, height-50);
    // Displaying all our game objects
    boy.show();
    startingPoint.show();
    float1.show();
    float2.show();
    float3.show();
    float4.show();
    obstacle1.display()
    obstacle2.display()
    // checking the collision
    collisionWithPoints()
    if(boy.body.position.y > height-50){
      gameState = END
    }
  }
  else if(gameState === END){
    textSize(30);
    fill("black");
    text("GameOver",width/2,height/2)
    World.remove(world,boy)
  }
 
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function collisionWithPoints() {
  var collision = Matter.SAT.collides(boy.body, startingPoint.body);
  console.log(collision)

  if(collision.collided){
    text("Bomb is ready to drop, jump quickly",width/2-100,30)
    boy.body.velocity.x = 0
    if (keyDown("space")) {  
      boy.shoot();
    }
    setInterval(function(){Matter.Body.setStatic(obstacle1.body,false)},500)
    var bombcollision = Matter.SAT.collides(boy.body,obstacle1.body);
    if(bombcollision.collided){
      gameState = END
    }
  }

    
}
