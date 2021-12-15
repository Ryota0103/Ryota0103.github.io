function doSearch(){
  let zipcodeElement = document.querySelector("#zipcode");
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${zipcodeElement.value}`).then(
      function(response){
        return response.json();
      }
  ).then(
      function(json){
        console.log(json);
        let imgText;
        answer.innerHTML = "";//初期化
        for(let i=0; i<10; i++) {
          let answerHtml = "";
          //画像があるか無いかの判定、無いならNOIMAGEを表示
          if(json.items[i].volumeInfo.imageLinks != null) {
            console.log("画像データがあるよ！")
            imgText = String(json.items[i].volumeInfo.imageLinks.thumbnail);
          }
          else{
            console.log("画像データがないよ！");
            imgText = "https://1.bp.blogspot.com/-D2I7Z7-HLGU/Xlyf7OYUi8I/AAAAAAABXq4/jZ0035aDGiE5dP3WiYhlSqhhMgGy8p7zACNcBGAsYHQ/s1600/no_image_square.jpg";
          }
          answerHtml = `
          <div class="bookDataAll">
          <img class="bookImage" src= ${imgText}>
          <div class="bookData">
          書籍タイトル：${json.items[i].volumeInfo.title}<br>
          著者名：${json.items[i].volumeInfo.authors}<br>
          <a href="${json.items[i].volumeInfo.previewLink}">プレビュー</a><br>
          発行日：${json.items[i].volumeInfo.publishedDate}<br>
          </div>
          <hr color=#d3d3d3 size=1>`;
          document.querySelector("#answer").innerHTML += `${answerHtml}`;
        }
      }
  );
}