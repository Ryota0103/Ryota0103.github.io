// ウェブアプリのURL
const endpoint = "https://script.google.com/macros/s/AKfycbwurQjUkLCUbbGyC5A-bd9KlMFLsXZAtnQktuijE6N_UO-YPBHFXv4EcQVRTnfc5Yhbpw/exec";

function getSheetData(){
  $.ajax({
    type: 'GET',
    url: endpoint,
    dataType: 'jsonp',
    data: {
      sheet: 'シート1',     //シート名指定
      range: 'A1:E5'       //範囲指定　指定がない場合はすべて読み込む
    },
  })
      .done(function(out){
        //受け取ったデータをここで処理する
        console.log(out.data);

      })
      .fail(function() {
        //エラー時の処理を書く
        console.log('エラー');
      })

}
//実行してみる
getSheetData()