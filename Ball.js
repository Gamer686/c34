class Ball{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0.8,
            density:0.02,
            

        }
        this.x=x;
        this.y=y;
        this.r=r;
        
        this.body=Bodies.circle(x,y,r,options)
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y);
        ellipseMode(CENTER)
        fill("pink")
        ellipse(0,0,this.r,this.r);
        pop()

    }

}