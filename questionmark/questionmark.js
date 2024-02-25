

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
      $("h2").html("There are some punctuations that are interesting and there are some punctuations that are not. Let us begin with the punctuations that are not. Of these the one but the first and the most the completely most uninteresting is the <strong>question mark.");

    $("h2:hover").css("text-decoration", "none")
  
    })
  })
  
  $(document).ready(function(){
    const myTimeout = setTimeout(Writing, 8100);
  
    function Writing() {
      document.getElementById("start").innerHTML = "start"
      $("start").toggleClass("b")
    }
  })
