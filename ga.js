function newGeneration(){
  for(let i = 0; i < TOTAL; i++){
    birds[i] = pick();
  }
  if(birds.length == TOTAL){
    fitBirds = [];
    pastbirds = [];
  }
}

function pick(){
 for(let i = 0; i < pastbirds.length; i++){
   let n = pastbirds[i].fitness * 10;
   for(let j = 0; j < n; j++){
     fitBirds.push(pastbirds[i]);
   }
 }
let abird = random(fitBirds);
let child = new Bird(abird.brain);
child.mutate();
// for(let i = 0; i < 4; i++){
//   child.brain.bias_h.data[0][i] *= random(0.97,1.3);
//   child.brain.bias_o.data[0][i] *= random(0.97,1.3);
//   for(let j = 0; j < 4; j++ ){
//     child.brain.weights_ih.data[i][j] *= random(0.97,1.3);
//     if(i < 2){
//       child.brain.weights_ho.data[i][j] *= random(0.97,1.3);
//    }
//  }
//}
 return child;
}
