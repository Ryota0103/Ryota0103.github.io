//・オブジェクト配列（tweets）の繰り返し：Array.forEach()版

let answer = document.querySelector("#answer");

tweets.forEach(function(tweetdata){
    answer.innerHTML += `<li>
    <b>${tweetdata.name}</b>:
    ${tweetdata.message}
    <i>${tweetdata.tweetedAt}</i>
    </li>`
  }
)

answer.innerHTML = `<ul>${answer.innerHTML}</ul>`;