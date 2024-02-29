

$(document).ready(function() {
  $(document).on('mousemove', function(e) {
    $('#circularcursor').css({
      left: e.pageX,
      top: e.pageY
    });
  })
})

$(document).ready(function(){
  const myTimeout = setTimeout(Reading, 1000);

  function Reading() {
    document.getElementById("show").innerHTML = "if you're ready, start reading"
  }
})


$(document).ready(function(){
  $("h2").click(function(){
    $("h2").html("One other little punctuation mark one can have feelings about and that is the <strong>apostrophe</strong> for possession.");

  $("h2:hover").css("text-decoration", "none")

  })
})

  
  $(document).ready(function(){
    const myTimeout = setTimeout(Writing, 5000);
  
    function Writing() {
      document.getElementById("start").innerHTML = "start"
      $("start").toggleClass("b")
    }
  })



  