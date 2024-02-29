

$(document).ready(function() {
  $(document).on('mousemove', function(e) {
    $('#circularcursor').css({
      left: e.pageX,
      top: e.pageY
    });
  })
})

$(document).ready(function(){
  $(".box2").click(function(){
    $("h3").toggleClass("h3b")
    $("h3:nth-of-type(50)").removeClass()
  })
})


$(document).ready(function(){
   let counter = 1;

    $(".box").click(function () {
    counter++;
    console.log("h3:nth-child(" + counter + ")");
    $("h3:nth-child(" + counter + ")").css("opacity", "1");
    });
})

$(document).ready(function(){
  let counter = 0;

   $(".box1").click(function () {
   counter++;
   console.log("h1:nth-child(" + counter + ")");
   $("h1:nth-child(" + counter + ")").css("opacity", "1");
   });
})