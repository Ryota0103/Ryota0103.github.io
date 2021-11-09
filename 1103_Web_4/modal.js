//index.htmlから初期値を取得して数値に変換
let count = document.getElementById('modal')
  count = Number(count.textContent)

function plusOne(){
  let modal = document.getElementById('modal');

  ++count;

  modal.innerHTML = count;
}

function plusFive(){
  let modal = document.getElementById('modal');

  count += 5;

  modal.innerHTML = count;
}

function plusTen(){
  let modal = document.getElementById('modal');

  count += 10;

  modal.innerHTML = count;
}