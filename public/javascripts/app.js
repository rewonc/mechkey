$(document).ready(function(){
  var NUM_AUDIO = 10;
  var audioUp = [];
  var audioDown = [];
  var counter = {
    up: 0,
    down: 0
  };
  var downKeys = [];

  for(var i = 0; i < NUM_AUDIO; i++) {
    //audioUp[i] = new Audio('keyup.mp3');
    audioDown[i] = new Audio('laptop.mp3');
  }

  var inc = function(key) {
    counter[key]++;
    counter[key] %= NUM_AUDIO;
  };

  $('#typing').keyup(function(e) {
    console.log(counter.up);
    //audioUp[counter.up].play();
    inc('up');
    downKeys[e.which] = false;
  });

  $('#typing').keydown(function(e){
    if (downKeys[e.which])
      return;
    console.log(counter.down);
    audioDown[counter.down].play();
    inc('down');
    downKeys[e.which] = true;
  });
});
