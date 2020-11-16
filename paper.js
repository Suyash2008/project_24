class Paper{
    constructor(x,y,r){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.y = y
        this.x = x
        this.r = r 

        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
        
    }

    display(){
        var pos = this.body.position;
        this.body.y = mouseY
        this.body.x = mouseX
        push();
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        fill("pink");
        rectMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop()
    }
}