$(function(){
  $("#normal").click(function(){
    var number = $("#input").val();
    var pingPonged = pingPongNumberizer(number);
    $(".output").text(pingPonged);
  });
  $("#reversed").click(function(){
    var number = $("#input").val();
    var pingPonged = pingPongNumberizer(number, true);
    $(".output").text(pingPonged);
  });
});

var pingPongNumberizer = function(number, reverse = false) {
  var numberInt = parseInt(number);
  var returnArray = [];
  for (i = 1; i <= numberInt; i++) {
    if (i % 15 === 0) {
      returnArray.push('pingpong');
    } else if (i % 3 === 0){
      returnArray.push('ping');
    } else if (i % 5 === 0){
      returnArray.push('pong');
    } else {
      returnArray.push(i)
    }
  }
  if (reverse) {
    return returnArray.reverse();
  } else {
    return returnArray;
  }
}
