

$(document).ready(function() {
  $(document).on('mousemove', function(e) {
    $('#circularcursor').css({
      left: e.pageX,
      top: e.pageY
    });
  })
})

$(document).ready(function(){
  const myTimeout = setTimeout(Reading, 2000);

  function Reading() {
    document.getElementById("show").innerHTML = "if you're ready, start reading"
  }
})

  
  $(document).ready(function(){
    const myTimeout = setTimeout(Writing, 5000);
  
    function Writing() {
      document.getElementById("start").innerHTML = "start"
      $("start").toggleClass("b")
    }
  })



  