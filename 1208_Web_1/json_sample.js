fetch("https://sheets.googleapis.com/v4/spreadsheets/1sf4i7kqOzucvdK1LFzNLvXTpMbHCdplqkSrdMOrHPTg/values/sheet1!A1:C4?key=AIzaSyBHrsc5Ktg5KcIDab1davAjKef3Yv7D3iI").then(
    function (response) {
      return response.json();
    }
).then(
    function (json) {
      console.log(json);
      let html = "<table>";
      json.values.forEach((row) => {
        html += `<tr>
                  <td>${row[0]}</td>
                  <td>${row[1]}</td>
                  <td>${row[2]}</td>
                </tr>`;
      });
      html += "</table>";
      document.querySelector("#answer").innerHTML = html;
    }
);

