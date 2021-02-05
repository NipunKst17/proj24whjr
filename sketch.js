const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    var canvas = createCanvas(1600,400);
    engine = Engine.create();
    world = engine.world;

    hammer1 = new Hammer(800,350,120,30);
	stone1 = new Stone(700,330,50,50);
	ground1 = new Ground(800,380,1600,40);
   
    sand1 = new Sand(850,330,20);
    sand2 = new Sand(830,330,20);
    sand3 = new Sand(350,330,20);
    sand4 = new Sand(650,330,20);
    sand5 = new Sand(290,330,20);
    iron1 = new Iron(310,330,70,80);
    rubber1 = new Rubber(310,300,50)
	   
}


function draw(){
    background(0);
    Engine.update(engine);
    
    stone1.display();
	hammer1.display();
	ground1.display();
    rubber1.display();
    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
    iron1.display();
	
}