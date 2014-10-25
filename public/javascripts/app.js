$(document).ready(function(){
  var audioup = [];
  var audiodown = [];
  var counterUp = 0;
  var counterDown = 0;

  for(var i = 0; i < 11; i++) {
    audioup[i] = new Audio('keyup.mp3');
  }

  for(var i = 0; i < 11; i++) {
    audiodown[i] = new Audio('keydown.mp3');
  }


  var incUp = function(){
    counterUp ++;
    counterUp %= 10;
  };
  var incDown = function(){
    counterDown ++;
    counterDown %= 10;
  };

  downKeys = [];

  $('#typing').keyup(function(e){
    console.log(counterUp);
    audioup[counterUp].play();
    incUp();
    downKeys[e.which] = false;
  });

  $('#typing').keydown(function(e){
    if (downKeys[e.which])
      return;
    console.log(counterDown);
    audiodown[counterDown].play();
    incDown();
    downKeys[e.which] = true;
  });
});
