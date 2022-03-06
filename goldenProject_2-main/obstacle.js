class Obstacle {
    constructor(x, y) {
      var options = {
        isStatic: true
      };
      this.r = 18;
     
      this.body = Bodies.circle(x, y, this.r, options);
      this.image = loadImage("./Assets/cannonball.png")
     
      World.add(world, this.body);
    }
  
    
  
    remove(index) {
      this.isSink = true;
      Matter.Body.setVelocity(this.body, { x: 0, y: 0 });
  
      this.animation = waterSplashAnimation;
      this.speed = 0.05;
      //this.r = 30;
      setTimeout(() => {
        Matter.World.remove(world, this.body);
        delete balls[index];
      }, 1000);
    }
  
   
  
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;

  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      //ellipseMode(RADIUS)
      image(this.image, 0, 0, this.r*2, this.r*2);
      pop();
  
      
  }
}