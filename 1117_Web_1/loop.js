function doLoop(){
  let sum = 0;
  let i = 0;
  while(i <= 10000){
    sum = sum + i;
    i++;
  }
  document.querySelector("#answer").innerHTML = sum;
}