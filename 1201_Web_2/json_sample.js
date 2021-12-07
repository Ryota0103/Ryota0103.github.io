function doSearch(){
  let zipcodeElement = document.querySelector("#zipcode");
  fetch(`https://www.googleapis.com/books/v1/volumes?q=author:歌丸`).then(
      function(response){
        return response.json();
      }
  ).then(
      function(json){
        let answerHtml = "";
        answerHtml = `${json.results[0].address1}
      ${json.results[0].address2}
      ${json.results[0].address3}`;
        document.querySelector("#answer").innerHTML = `${answerHtml}`;
      }
  );
}