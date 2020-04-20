function Pipes(){
  this.x = width;
  this.w = 50;
  this.r = 0;
  this.space = random(190,250);
  this.one = random(this.top,this.bottom);
  if(this.one == this.top){
    this.top = random(35,(height/1.5));
    this.bottom = height - (this.top+this.space);
  }
  else{
    this.bottom = random(35,(height/1.5));
    this.top = height - (this.bottom+this.space);
  }
  this.bestPos = this.top + (this.space/2);

  this.show = function(){
    stroke(3);
    line(this.x,this.bestPos, this.x+this.w,this.bestPos);
    fill(255);
    noStroke();
    rect(this.x,0,this.w,this.top);
    rect(this.x,height-this.bottom,this.w,this.bottom);
  }
  this.update = function(){
    this.x += -10;
  }

  this.offscreen = function(){
    if(this.x - this.w < -width ){
      return true;
    }
    else{
      return false;
    }
  }

  this.hits = function(bird){
    if(bird.y-this.r < this.top || bird.y+this.r > height - this.bottom){
      if(bird.x-this.r < this.x + this.w && bird.x+this.r > this.x){
        bird.fitness += bird.score;
        bird.fitness = map(bird.fitness,0 ,500,1,0);
        let distance = abs(bird.y - this.bestPos);
        let distanceValue = map(distance,0,height,1,0);
        bird.fitness += distanceValue;
        return true;
      }
    }
    return false;
  }
}
