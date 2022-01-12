window.onload = function startAnimation(){
  anime({
    targets: '#animation-box-1',
    translateX: 250,
    opacity: 1,
    scale: 1,
    duration: 1500
  })
  anime({
    targets: '#animation-box-2',
    translateX: 250,
    opacity: 1,
    scale: 1,
    duration: 1500,
    delay:300
  })
}

document.getElementById("main-contents").style.display ="block";
document.getElementById("works-contents").style.display ="none";

function showWorks(){
  document.getElementById("main-contents").style.display = "none";
  document.getElementById("works-contents").style.display ="block";
  anime({
      targets: '#works-diary',
      opacity: 1,
      scale: 1,
      duration: 1500
  })
}