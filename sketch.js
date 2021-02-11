
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var ground;
var box1, box2, box3;
var ball;
var rope;
function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;
ground = new Ground(600,600,1300,40)

	box1 = new Box(900,450,70,70)
    
ball = new Ball(700,400,70)
	rope = new Rope(ball.body,{x:700,y:150})
	Engine.run(engine);
  
}


function draw() {
	background("black");
    ground.display();
    box1.display();

    ball.display();
    rope.display();
}
function mouseDragged(){
    
        Body.setPosition(ball.body,{x:mouseX,y:mouseY})
    
}