

function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();
} 

function initAudioPlayer2() {
    audio2 = new Audio();
    audio2.src = x;
    playbtn2 = document.getElementById("playpausebtn2");
    playbtn2.addEventListener ("click", playPause);  
    audio2.addEventListener ("ended", myFunction);
  
    function playPause(){
         if (audio2.paused){
             audio2.play();
             playbtn2.style.background = "url(images/pause.png) no-repeat";
             } else {
             audio2.pause();
             playbtn2.style.background = "url(images/play.png) no-repeat";
             }           
    }
   audio2.addEventListener ("ended", myFunction); 
  function myFunction() {
         playbtn2.style.background = "url(images/play.png) no-repeat";
    }        
  }
  window.addEventListener("load", initAudioPlayer2);