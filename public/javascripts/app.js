(function () {

  var NUM_AUDIO = 10;
  var keyCodes = {
    DELETE: 8,
    SPACEBAR: 32
  };

  function createKeySound(fileName) {
    var index = 0
    var buffers = [];
    for (var i = 0; i < NUM_AUDIO; i++) {
      buffers[i] = new Audio(fileName);
    }
    return function () {
      buffers[index++ % NUM_AUDIO].play();
    };
  }

  var playDelete = createKeySound('deletekey.mp3');
  var playSpacebar = createKeySound('spacebarkey.mp3');
  var playOther = createKeySound('laptop.mp3');

  $(document).ready(function () {

    var downKeys = {};

    $('#typing').keyup(function(e) {
      downKeys[e.which] = false;
    });

    $('#typing').keydown(function(e){
      if (downKeys[e.which])
        return;
      downKeys[e.which] = true;
      switch (e.which) {
      case keyCodes.DELETE:
        playDelete();
        break;
      case keyCodes.SPACEBAR:
        playSpacebar();
        break;
      default:
        playOther();
        break;
      }
    });

  });

}());
