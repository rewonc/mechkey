$(document).ready(function(){
  var audioup = [];
  var audiodown = [];
  var counterUp = 0;
  var counterDown = 0;

  for(var i=0;i<11;i++){
    audioup[i] = new Audio('keyup.mp3');
  }

  for(var i=0;i<11;i++){
    audiodown[i] = new Audio('keydown.mp3');
  }


  var incUp = function(){
    if(counterUp < 10){ counterUp++;  } 
    else            { counterUp = 0 }
  }
  var incDown = function(){
    if(counterDown < 10){ counterDown++;  } 
    else            { counterDown = 0 }
  }

  $('#typing').keyup(function(){
    console.log(counterUp);
    audioup[counterUp].play();
    incUp();
  });
  $('#typing').keydown(function(){
    console.log(counterDown);
    audiodown[counterDown].play();
    incDown();
  });
});