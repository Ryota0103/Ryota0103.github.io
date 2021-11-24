function doCheckAnswers() {
  let answer = document.querySelector("#answer");
  let inputdata = document.querySelector("#input_string");
  let modal = Array.from(document.querySelectorAll('ul.answer-list li'));

  modal.forEach(
      function(element) {
        if (inputdata.value === element.innerHTML) {
          answer.innerHTML = "正解";
        }
      }
   )
  //配列のどの要素とも等しくなかった場合に不正解と表示
  if(answer.innerHTML === ""){
    answer.innerHTML = "不正解";
  }
}