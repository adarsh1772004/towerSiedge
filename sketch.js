const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var engine, world, body;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,
block18,block19,block20,block21,block22,block23,block24,block25;
var blo1, blo2, blo3, blo4, blo5, blo6, blo7, blo8, blo9;
var ground1,ground2;
var polygonal
var polygon
function preload(){

}

function setup() {
  createCanvas(1200,400);
  engine=Engine.create()
  world=engine.world;
  block1=new Box(1000, 92, 40, 60)
  block2=new Box(960,148, 40, 55)
  block3=new Box(1000, 148, 40, 55)
  block4=new Box(1040,148, 40, 55)
  block5=new Box(920, 203, 40, 55)
  block6=new Box(960, 203, 40, 55)
  block7=new Box(1000, 203, 40, 55)
  block8=new Box(1040, 203, 40, 55)
  block9=new Box(1080, 203, 40, 55)
  block10=new Box(880, 256, 40, 55)
  block11=new Box(920, 256, 40, 55)
  block12=new Box(960, 256, 40, 55)
  block13=new Box(1000, 256, 40, 55)
  block14=new Box(1040, 256, 40, 55)
  block15=new Box(1080, 256, 40, 55)
  block16=new Box(1120, 256, 40, 55)
  block17=new Box(840, 309, 40, 55)
  block18=new Box(880, 309, 40, 55)
  block19=new Box(920, 309, 40, 55)
  block20=new Box(960, 309, 40, 55)
  block21=new Box(1000, 309, 40, 55)
  block22=new Box(1040, 309, 40, 55)
  block23=new Box(1080, 309, 40, 55)
  block24=new Box(1120, 309, 40, 55)
  block25=new Box(1160, 309, 40, 55)
  blo1=new Box(400, 180, 40, 55)
  blo2=new Box(360, 234, 40, 55)
  blo3=new Box(400, 234, 40, 55)
  blo4=new Box(440, 234, 40, 55)
  blo5=new Box(320, 287, 40, 55)
  blo6=new Box(360, 287, 40, 55)
  blo7=new Box(400, 287, 40, 55)
  blo8=new Box(440, 287, 40, 55)
  blo9=new Box(480, 287, 40, 55)
  ground1=new Ground(1000, 344, 390, 15)
  ground2=new Ground(400, 322, 280, 15)
  polygon=new Polygon(200, 200, 50, 50)
 
}

function draw() {
 background("black")
 block1.display()
 block2.display()
 block3.display()
 block4.display()
 block5.display()
 block6.display()
 block7.display()
 block8.display()
 block9.display()
 block10.display()
 block11.display()
 block12.display()
 block13.display()
 block14.display()
 block15.display()
 block16.display()
 block17.display()
 block18.display()
 block19.display()
 block20.display()
 block21.display()
 block22.display()
 block23.display()
 block24.display()
 block25.display()
 blo1.display()
 blo2.display()
 blo3.display()
 blo4.display()
 blo5.display()
 blo6.display()
 blo7.display()
 blo8.display()
 blo9.display()
 ground1.display()
 ground2.display()
 polygon.display()
}