class Boy {
  constructor(x, y) {
    var options = {
      isStatic: false,
    };
    this.w = 80;
    this.h = 160
    //this.speed = 0.05;
    this.body = Bodies.rectangle(x, y, this.w,this.h, options);
    this.image = loadImage("./Assets/boy4.png");
    // this.animation = [this.image];

    World.add(world, this.body);
  }

  
  shoot() {
   
   // var newAngle = 45 - 28;
    //newAngle = newAngle * (3.14 / 180);
   // var velocity = p5.Vector.fromAngle(newAngle);
    //velocity.mult(1.5);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, {
      x: 6,
      y: -10
    });
   
  }

  show() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.w, this.h);
    pop();
  }
}
