function doLoop(){
  let i = 0;
  let data = "";
  let modal = document.querySelector("#answer");
  while(i < 100) {
    i++;
    if (i % 15 === 0) {
      data = "FizzBuzz";
    }
    else if (i % 3 === 0) {
      data = "Fizz";
    }
    else if (i % 5 === 0) {
      data = "Buzz";
    }
    else {
      data = i; //当てはまらない時に数値を出力
    }
    modal.innerHTML = `${modal.innerHTML}` + "<br>" + `${data}`
  }
}