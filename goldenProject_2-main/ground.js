class Ground {
    constructor(x,y,w,h,image){
      var options = {
          isStatic:true

      } 
      this.body = Bodies.rectangle(x,y,w,h,options)
      World.add(world,this.body)
      this.width = w
      this.height = h
    

    }
    show(){
        var angle = this.body.angle;
        var pos = this.body.position;
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
      
    }
}