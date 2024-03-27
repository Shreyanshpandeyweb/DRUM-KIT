   for(var i=0;i<document.querySelectorAll("button").length;i++)
   {
   document.querySelectorAll("button")[i].addEventListener("click",sound);
function sound(){
    var audio=new Audio('sounds/crash.mp3');
    audio.play();
}}