

$(document).ready(function() {
  $(document).on('mousemove', function(e) {
    $('#circularcursor').css({
      left: e.pageX,
      top: e.pageY
    });
  })
})

$(document).ready(function(){
   let counter = 3;

    $(".box").click(function () {
    counter++;
    console.log("h3:nth-child(" + counter + ")");
    $("h3:nth-child(" + counter + ")").css("opacity", "1");
    });
})

