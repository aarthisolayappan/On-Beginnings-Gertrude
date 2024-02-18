

$(document).ready(function() {
  $(document).on('mousemove', function(e) {
    $('#circularcursor').css({
      left: e.pageX,
      top: e.pageY
    });
  })
})


$(document).ready(function(){
  const myTimeout = setTimeout(Writing, 3000);

  function Writing() {
    document.getElementById("start").innerHTML = "moving on"
    $("start").toggleClass("b")
  }
})