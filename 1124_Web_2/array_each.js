//オブジェクト配列（tweets）の繰り返し：for版

let answer = document.querySelector("#answer");

for(i = 0; i < tweets.length; i++){
  answer.innerHTML += `<li>
  <b>${tweets[i].name}</b>:
  ${tweets[i].message}
  <i>${tweets[i].tweetedAt}</i>
  </li>`
}

answer.innerHTML = `<ul>${answer.innerHTML}</ul>`