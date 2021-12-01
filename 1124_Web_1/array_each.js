//文字列配列（fruitsNames）の繰り返し：Array.forEach()版

let answer = document.querySelector("#answer");

fruitNames.forEach(function(fruits) {
  answer.innerHTML += `<li>${fruits}</li>`;
  }
)

answer.innerHTML = `<ul>${answer.innerHTML}</ul>`;