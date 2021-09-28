var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //crea los objetos para dividir
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=160; k = k + 160) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=240; k = k + 240) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=320; k = k + 320) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=400; k = k + 400) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=480; k = k + 480) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=560; k = k + 560) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=640; k = k + 640) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=720; k = k + 720) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=800; k = k + 800) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //crea la primera fila de objetos plinko
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //crea la segunda fila de objetos plinko
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  for(var j=75;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  for(var j=50;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375));
  }

  //crea la tercera fila de objetos plinko

  
  //crea la cuarta fila de objetos plinko


  //crea los objetos partícula
  
  for(var l=50;l<=width-10;l=l+50){
    if(frameCount%60==0){
      particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    }  
  }

 
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //muestra los plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //muestra las divisiones
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //muestra las partículas 
  for(var l=0;l<particles.length;l++){
    particles[l].display();
  }
}
