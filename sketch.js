const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, slingshot, ball;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, 
block14, block15, block18, block19, block20, block21, block22;

function setup() {
  createCanvas(900,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ball = new Ball(100,140,30)
  ground = new Ground();
  
  ground_low = new Ground();
  //level one
  block1 = new Block(310, 367, 30, 40);
  block2 = new Block(340, 367, 30, 40);
  block3 = new Block(370, 367, 30, 40);
  block4 = new Block(400, 367, 30, 40);
  block5 = new Block(430, 367, 30, 40);
  block6 = new Block(460, 367, 30, 40);
  block7 = new Block(490, 367, 30, 40);
  
  //level two
  block8 = new Block(340, 325, 30, 40);
  block9 = new Block(370, 325, 30, 40);
  block10 = new Block(400, 325, 30, 40);
  block11 = new Block(430, 325, 30, 40);
  block12 = new Block(460, 325, 30, 40);
  
  //level three
  block13 = new Block(370, 285, 30, 40);
  block14 = new Block(400, 285, 30, 40);
  block15 = new Block(430, 285, 30, 40);
  
  //top
  block16 = new Block(400, 245, 30, 40);
  //block17 = new Block(360, 235, 30, 40);
  //block18 = new Block(360, 235, 30, 40);
  
  //polygon = Matter.Bodies.polygon(50, 200, 5, 40,);
  //polygon = Bodies.circle(50,200,20);
  //World.add(world,polygon);
  ball = new Ball(50,170);
  slingshot = new Slingshot(ball.body, {x:50,y:150});
}

function draw() {
  background("lightblue"); 
  
  text(mouseX+","+mouseY,mouseX,mouseY);
  ground.display();
  slingshot.display();
  ball.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();



  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(ball.body);
  }
}