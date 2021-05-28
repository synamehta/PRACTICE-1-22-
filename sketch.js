var enginex,worldx;
var ground,sun;
var box1,box2;


function setup(){
  createCanvas(600,600);

  enginex=Matter.Engine.create();
  worldx=enginex.world;

  var stay={
    isStatic:true
  } 

  ground=Matter.Bodies.rectangle(300,580,600,60,stay);
  Matter.World.add(worldx,ground);

var ballbounce={
 restitution:1
}  

box1=Matter.Bodies.rectangle(200,30,30,30,ballbounce);
Matter.World.add(worldx,box1);

box2=Matter.Bodies.rectangle(400,20,60,30,ballbounce);
Matter.World.add(worldx,box2);

sun=Matter.Bodies.circle(550,30,20,stay);
Matter.World.add(worldx,sun);

}


function draw(){
  background("lightblue");

  Matter.Engine.update(enginex);

fill("lightgreen");
rectMode(CENTER);
rect(ground.position.x,ground.position.y,600,60);

fill("blue");
rectMode(CENTER);
rect(box1.position.x,box1.position.y,30,30);

fill("pink");
rectMode(CENTER);
rect(box2.position.x,box2.position.y,60,30);

fill("yellow");
ellipseMode(RADIUS);
ellipse(sun.position.x,sun.position.y,20,20);
}