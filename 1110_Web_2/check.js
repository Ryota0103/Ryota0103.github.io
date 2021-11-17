function checkYear() {
  let num = Number(document.querySelector('#year').value);
  let answer = document.querySelector("#answer");
   if(!num){
    answer.innerHTML = "";
  }
   else if (num % 4 === 0) {
    answer.innerHTML = "閏年";
      if (num % 100 === 0){
        answer.innerHTML = "平年";
        if (num % 400 === 0){
          answer.innerHTML = "閏年";
        }
      }
   }
}