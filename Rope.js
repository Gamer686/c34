class Rope{
    constructor(bodyA,pointB){
      var  options ={
          bodyA:bodyA,
          pointB:pointB,
          length:250,
          stiffness:1
      }
      this.rope=Constraint.create(options)
      World.add(world,this.rope)
    }
    display(){
        var anchorA = this.rope.bodyA.position
        var anchorB = this.rope.pointB
        stroke("purple")
        line(anchorA.x,anchorA.y,anchorB.x,anchorB.y)
    }
}