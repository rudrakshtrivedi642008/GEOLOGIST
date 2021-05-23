const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var iron,stone,rubber;
var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(100,100);
    iron =new Iron(711,600,200,20);
    stone=new Stone(465 ,600,200,200);
    rubber=new Rubber(350,570,20/2);
}
function draw(){
    background("lightBlue");
    Engine.update(engine);
    //text(mouseX+","+mouseY,30,45)
    plane.display();
    hammer.display();
    iron.display();
    rubber.display();
    stone.display();
}