$('#exampleModal').modal('show');

function clickSecondButton(){
  document.querySelector("#exampleModalBody").innerHTML = "書きかえたぞ!";
  $('#exampleModal').modal('show');
}