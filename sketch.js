var birds = [];
var pipes = [];
var pastbirds = [];
var fitBirds = [];
var TOTAL = 250;

function setup() {
  createCanvas(1500,500);
  for(let i = 0; i < TOTAL; i++){
    birds[i] = new Bird();
  }
  pipes.push(new Pipes());

}

function draw() {
  background(250,100,500);
  for(bird of birds){
    bird.think();
    bird.update();
    bird.show();
  }
  if(frameCount % 50 == 0){
  pipes.push(new Pipes());
  }
  for(var i=pipes.length-1;i>0;i--){
    pipes[i].update();
    pipes[i].show();
    for(j = birds.length - 1; j >= 0; j--){
      if(pipes[i].hits(birds[j])){
        pastbirds.push(birds[j]);
        birds.splice(j,1);
      }
    }
    if(pipes[i].offscreen()){
    pipes.splice(i,1);
    }
  }
  if(birds.length == 0){
    pipes = [];
    newGeneration();
    pipes.push(new Pipes());
  }
}
