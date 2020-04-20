function Bird(brain){

  this.x = 250;
  this.y = height/2;
  this.velocity = 0;
  this.gravity = 0.85;
  if(brain){
    this.brain = brain.copy();
  }
  else{
    this.brain = new NeuralNetwork(4, 4, 2);
  }
  this.score = 0;
  this.fitness = 0;

  this.think = function(){
    let closest = null;
    let closestD = Infinity;
    for(let i = 0; i < pipes.length; i++){
      let d = pipes[i].x - this.x;
      if(d < closestD && d > 0){
        closest = pipes[i];
        closestD = d;
      }
    }
    let inputs = [];
    inputs[0] = this.y;
    inputs[1] = closest.top;
    inputs[2] = height - closest.bottom;
    inputs[3] = closest.x;
    let outputs = this.brain.predict(inputs);
    if(outputs[0] > 0.5){
      this.up();
    }
  }

  this.show = function(){
    stroke(50);
    fill(0,75);
    ellipse(this.x,this.y,50,50);
  }

  this.update = function(){
    this.score ++;
    this.y += this.velocity;
    this.velocity += this.gravity;
    this.velocity *= 0.92;
    if(this.y >= height){
      this.y = height;
      this.velocity = 0;
    }
    if(this.y <= 0){
      this.y = 1;
      this.velocity = 0;
    }
  }
  this.up = function(){
    this.velocity -= 23;
  }
  this.mutate = function(){
    this.brain.mutate(0.1);
  }
}
