$(document).ready(function() {

  function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
  }

  $('.ryu').mouseenter(function() {
    /* Act on the event */
    // alert('mouse entered .ryu div');
    // $('.ryu-still').hide();
    $('.ryu-action').hide();
    $('.ryu-ready').show();
    // chain menthod no semicolon
  })
  .mouseleave(function() {
    /* Act on the event */
    // alert('mouse left');
    $('.ryu-action').hide();
    // $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken();
    /* Act on the event */
    // console.log('mouse down');
    //throw hadouken
    //play hadouken sound
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    // $('.hadouken').show();
    $('.hadouken').finish().show().animate(
      // {'left': '1020px'},
      {'left': '300px'},
      500,
      function() {
        $('.hadouken').stop();
        $('.hadouken').hide();
        $('.hadouken').css('left', '-212px');
        // $(this).hide();
        // $(this).css('left', '520px');
      }
    );
  })
  .mouseup(function() {
    /* Act on the event */
    // console.log('mouse up');
    // $('.ryu-throwing').hide();
    $('.ryu-action').hide();
    $('.ryu-ready').show();
  });

  $(document).keydown(function(e) {
    // alert( "Handler for .keydown() called." );
    if (e.keyCode == 88) {
      // playCool();
      $('.ryu-action').hide();
      $('.ryu-cool').show();
    }
  }).keyup(function(e) {
    if(e.keyCode == 88) {
      // $('#cool')[0].pause();
      // $('#cool')[0].load();
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    }
  });
});
