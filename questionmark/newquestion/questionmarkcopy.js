

$(document).ready(function() {
  $(document).on('mousemove', function(e) {
    $('#circularcursor').css({
      left: e.pageX,
      top: e.pageY
    });
  })
})

$(document).ready(function(){
  const myTimeout = setTimeout(reveal, 1000);

  function reveal() {
    document.getElementById("show1").innerHTML = "?"
    $("#show1").animate({
      opacity: 1
  }, 750);
  }  
})
  
    $(document).ready(function(){
      const myTimeout = setTimeout(reveal, 2000);
    
      function reveal() {
        document.getElementById("show2").innerHTML = "?"
        $("#show2").animate({
          opacity: 1
      }, 750);
      }  })

      $(document).ready(function(){
        const myTimeout = setTimeout(reveal, 3000);
      
        function reveal() {
          document.getElementById("show3").innerHTML = "?"
          $("#show3").animate({
            opacity: 1
        }, 750);
        }  })

        $(document).ready(function(){
          const myTimeout = setTimeout(reveal, 4000);
        
          function reveal() {
            document.getElementById("show4").innerHTML = "?"
            $("#show4").animate({
              opacity: 1
          }, 750);
          }  })

          

$(document).ready(function(){
   let counter = 5;

    $(".box").click(function () {
    counter++;
    console.log("h3:nth-child(" + counter + ")");
    $("h3:nth-child(" + counter + ")").css("opacity", "1");
    });
})

