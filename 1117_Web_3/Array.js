function doCheckAnswers() {
  let answer = document.querySelector("#answer");
  let inputString = document.querySelector("#input_string");
  let modal = Array.from(document.querySelectorAll('ul.answer-list li'));
  let correct = false;//真偽判定の初期化

  modal.forEach(
      function(element) {
        if (inputString.value === element.innerHTML) {
          correct = true;//配列のどれかに等しいならばtrue
        }
      }
   )
  //結果を表示
  if(correct){
    answer.innerHTML = "正解";
  }
  else if(correct === false){
    answer.innerHTML = "不正解";
  }
}