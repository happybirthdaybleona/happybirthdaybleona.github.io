document.addEventListener('DOMContentLoaded', function(){

  let audio = document.getElementsByClassName('mbox')[0];
  let audiomain = document.getElementById('audiomain');

  audio.addEventListener('click', function(){
    audiomain.play();
    audiomain.volume = 0.5;
  });

});
