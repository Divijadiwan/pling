const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,d1,d2,d3,d4,d5,d6,d7,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,particles;
var particles = [];
function setup(){
  var canvas = createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
ground1 = new ground(240,790,480,20);
d1 = new division(0,600,5,400);
d2 = new division(85,600,5,400);
d3 = new division(165,600,5,400);
d4 = new division(245,600,5,400);
d5 = new division(325,600,5,400);
d6 = new division(405,600,5,400);
d7 = new division(480,600,5,400);
p1 = new plingko(10,350,10);
p2 = new plingko(50,350,10);
p3 = new plingko(90,350,10);
p4 = new plingko(130,350,10);
p5 = new plingko(170,350,10);
p6 = new plingko(210,350,10);
p7 = new plingko(250,350,10);
p8 = new plingko(290,350,10);
p9 = new plingko(330,350,10);
p10 = new plingko(370,350,10);
p11 = new plingko(410,350,10);
p12 = new plingko(470,350,10);
p13 = new plingko(10,250,10);
p14 = new plingko(50,250,10);
p15 = new plingko(90,250,10);
p16 = new plingko(130,250,10);
p17 = new plingko(170,250,10);
p18 = new plingko(210,250,10);
p19 = new plingko(250,250,10);
p20 = new plingko(290,250,10);
p21 = new plingko(330,250,10);
p22 = new plingko(370,250,10);
p23 = new plingko(410,250,10);
p24 = new plingko(470,250,10);
p25 = new plingko(10,150,10);
p26 = new plingko(50,150,10);
p27 = new plingko(90,150,10);
p28 = new plingko(130,150,10);
p29 = new plingko(170,150,10);
p30 = new plingko(210,150,10);
p31 = new plingko(250,150,10);
p32 = new plingko(290,150,10);
p33 = new plingko(330,150,10);
p34 = new plingko(370,150,10);
p35 = new plingko(410,150,10);
p36 = new plingko(470,150,10);
p37 = new plingko(10,50,10);
p38 = new plingko(50,50,10);
p39 = new plingko(90,50,10);
p40 = new plingko(130,50,10);
p41 = new plingko(170,50,10);
p42 = new plingko(210,50,10);
p43 = new plingko(250,50,10);
p44 = new plingko(290,50,10);
p45 = new plingko(330,50,10);
p46 = new plingko(370,50,10);
p47 = new plingko(410,50,10);
p48 = new plingko(470,50,10);

}

function draw()
 {
  background("black");  
  drawSprites();
  ground1.display();
  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();
  p1.display();
  p2.display();
  p3.display();
  p4.display();
  p5.display();
  p6.display();
  p7.display();
  p8.display();
  p9.display();
  p10.display();
  p11.display();
  p12.display();
  p13.display();
  p14.display();
  p15.display();
  p16.display();
  p17.display();
  p18.display();
  p19.display();
  p20.display();
  p21.display();
  p22.display();
  p23.display();
  p24.display();
  p25.display();
  p26.display();
  p27.display();
  p28.display();
  p29.display();
  p30.display();
  p31.display();
  p33.display();
  p34.display();
  p35.display();
  p36.display();
  p32.display();
  p37.display();
  p38.display();
  p39.display();
  p40.display();
  p41.display();
  p42.display();
  p43.display();
  p44.display();
  p45.display();
  p46.display();
  p47.display();
  p48.display();
  if(frameCount%60 === 0)
{
 particles.push(new particle(random(width/2-10,width/2+10),10,10));
}
  for(var j =0;j<particles.length;j++)
  {
    particles[j].display();
  }
}