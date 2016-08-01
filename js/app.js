$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    /* Act on the event */
    // alert('mouse entered .ryu div');
    $('.ryu_still').hide();
    $('.ryu_ready').show();
    // chain menthod no semicolon
  })
  .mouseleave(function() {
    /* Act on the event */
    // alert('mouse left');
    $('.ryu_ready').hide();
    $('.ryu_still').show();
  });
});
