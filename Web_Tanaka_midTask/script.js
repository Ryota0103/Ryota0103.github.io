let answer = document.querySelector("#answer");
let

TrueAll = false;
TrueSaburobot = false;
TrueJiro = false;
TrueTaro = false;
All()//初期表示

function ViewTweet(Name){
  answer.innerHTML = "";//初期化
  tweets.forEach(function (tweetdata) {
    if (tweetdata.name === Name || Name === "ViewAll"){//名前指定 or ViewAllの時無条件でパス
      answer.innerHTML += `<li>
      <div class="border" style="padding:10px;">
         <img src="${tweetdata.avatar}" class = "icon border" style="padding:10px;">
         <b>${tweetdata.name}</b>:
       　 ${tweetdata.message}
         <i>${tweetdata.tweetedAt}</i>
         <hr color=#d3d3d3 size=1>
         </li>
      </div>`
      }
    }
  )
  answer.innerHTML = `<ul>${answer.innerHTML}</ul>`;
}

//ボタンを押したときに呼び出す関数
function All(){
  if(TrueAll === false) {
    ViewTweet("ViewAll")
  }
  TrueAll = true;
  TrueSaburobot = false;
  TrueJiro = false;
  TrueTaro = false
}

function Saburobot() {
  if(TrueSaburobot === false) {
    ViewTweet("三郎BOT")
  }
  TrueAll = false;
  TrueSaburobot = true;
  TrueJiro = false;
  TrueTaro = false
}

function Jiro() {
  if(TrueJiro === false) {
    ViewTweet("次郎")
  }
  TrueAll = false;
  TrueSaburobot = false;
  TrueJiro = true;
  TrueTaro = false
}

function Taro() {
  if(TrueTaro === false) {
    ViewTweet("太郎")
  }
  TrueAll = false;
  TrueSaburobot = false;
  TrueJiro = false;
  TrueTaro = true
}