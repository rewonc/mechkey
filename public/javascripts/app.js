$(document).ready(function(){
  var audioup = [];
  var audiodown = [];
  var counter = {
    up: 0,
    down: 0
  };
  var downKeys = [];

  for(var i = 0; i < 11; i++) {
    audioup[i] = new Audio('keyup.mp3');
  }

  for(var i = 0; i < 11; i++) {
    audiodown[i] = new Audio('keydown.mp3');
  }

  var inc = function(key) {
    counter[key]++;
    counter[key] %= 10;
  };

  $('#typing').keyup(function(e) {
    console.log(counter.up);
    audioup[counter.up].play();
    inc('up');
    downKeys[e.which] = false;
  });

  $('#typing').keydown(function(e){
    if (downKeys[e.which])
      return;
    console.log(counter.down);
    audiodown[counter.down].play();
    inc('Down');
    downKeys[e.which] = true;
  });
});
