class Box{
    constructor(x,y,w,h){
        var options={
            isStatic:false ,
            restitution:0.8,
            density:0.04,
            friction:1
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y);
        rectMode(CENTER)
        fill("green")
        rect(0,0,this.w,this.h);
        pop()

    }

}