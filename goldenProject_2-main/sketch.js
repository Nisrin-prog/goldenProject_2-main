const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
  bg = loadImage("./Assets/bg.png");
  boyImg = loadAnimation(
    "./Assets/boy1.png",
    "./Assets/boy2.png",
    "./Assets/boy3.png",
    "./Assets/boy4.png"
  );
  boyStd = loadAnimation("./Assets/boy4.png");
  startingPoint = loadImage("./Assets/startingPoint.png");
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

  startingPoint = new Ground(100, height - 400, 100, 250, startingPoint);
  float1 = new Ground(450, height - 300, 100, 250, floatingIsland1);
  float2 = new Ground(700, height - 350, 100, 250, floatingIsland2);
  float3 = new Ground(950, height - 450, 100, 250, floatingIsland1);
  float4 = new Ground(1150, height - 250, 100, 250, floatingIsland2);
  //endingPoint = new Ground(1200, height - 300, 150, 250, startingPoint);
}

function draw() {
  background(255);
  Engine.update(engine);
  image(bg, width / 2, height / 2, width, height);
  textSize(30);
  fill("white");
  text("Press Space To Start", width / 2 - 100, 50);
  boy.show();
  startingPoint.show();
  float1.show();
  float2.show();
  float3.show();
  float4.show();

  var collision = Matter.SAT.collides(boy.body, startingPoint.body);
  console.log(collision)

  if(collision.collided){
    boy.body.velocity.x = 0
    if (keyDown("space")) {  
      boy.shoot();
    }
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  
}
