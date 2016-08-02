$(document).ready(function() {
  function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
  }
  $('.ryu').mouseenter(function() {
    /* Act on the event */
    // alert('mouse entered .ryu div');
    $('.ryu-still').hide();
    $('.ryu-ready').show();
    // chain menthod no semicolon
  })
  .mouseleave(function() {
    /* Act on the event */
    // alert('mouse left');
    $('.ryu-ready').hide();
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
      {'left': '1020px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '520px');
      }
    );
  })
  .mouseup(function() {
    /* Act on the event */
    // console.log('mouse up');
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });
});
