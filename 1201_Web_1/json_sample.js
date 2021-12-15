function doSearch(){
  let zipcodeElement = document.querySelector("#zipcode");
  fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcodeElement.value}`).then(
      function(response){
        return response.json();
      }
  ).then(
      function(json){
        console.log(json)
        let answerHtml = "";
        answerHtml = `${json.results[0].address1}
      ${json.results[0].address2}
      ${json.results[0].address3}`;
        document.querySelector("#answer").innerHTML = `${answerHtml}`;
      }
  );
}