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
  })}