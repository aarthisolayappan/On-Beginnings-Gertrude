

$(document).ready(function() {
  $(document).on('mousemove', function(e) {
    $('#circularcursor').css({
      left: e.pageX,
      top: e.pageY
    });
  })

})

$(document).ready(function(){
$("div").click(function(){
  $("h1").addClass("show3");
});
})

          $(document).ready(function(){
            const myTimeout = setTimeout(reveal, 1000);
          
            function reveal() {
              document.getElementById("show5").innerHTML = "?"
              $("#show5").animate({
                opacity: 1
            }, 750);
            }  
          })
            
              $(document).ready(function(){
                const myTimeout = setTimeout(reveal, 2000);
              
                function reveal() {
                  document.getElementById("show6").innerHTML = "?"
                  $("#show6").animate({
                    opacity: 1
                }, 750);
                }  })
          
                $(document).ready(function(){
                  const myTimeout = setTimeout(reveal, 3000);
                
                  function reveal() {
                    document.getElementById("show7").innerHTML = "?"
                    $("#show7").animate({
                      opacity: 1
                  }, 750);
                  }  })
          
                  $(document).ready(function(){
                    const myTimeout = setTimeout(reveal, 4000);
                  
                    function reveal() {
                      document.getElementById("show8").innerHTML = "?"
                      $("#show8").animate({
                        opacity: 1
                    }, 750);
                    }  })


$(document).ready(function(){
   let counter = 2;

    $(".box").click(function () {
    counter++;
    console.log("h3:nth-child(" + counter + ")");
    $("h3:nth-child(" + counter + ")").css("opacity", "1");
    });
})
