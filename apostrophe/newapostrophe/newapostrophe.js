

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
    document.getElementById("show1").innerHTML = "'"
    $("#show1").animate({
      opacity: 1
  }, 750);
  }  

    $(document).ready(function(){
      const myTimeout = setTimeout(reveal, 1500);
    
      function reveal() {
        document.getElementById("show2").innerHTML = "'"
        $("#show2").animate({
          opacity: 1
      }, 750);
      }  })

      $(document).ready(function(){
        const myTimeout = setTimeout(reveal, 2000);
      
        function reveal() {
          document.getElementById("show3").innerHTML = "'"
          $("#show3").animate({
            opacity: 1
        }, 750);
        }  })

        $(document).ready(function(){
          const myTimeout = setTimeout(reveal, 2500);
        
          function reveal() {
            document.getElementById("show4").innerHTML = "'"
            $("#show4").animate({
              opacity: 1
          }, 750);
          }  })

          })
            

$(document).ready(function(){
  const myTimeout = setTimeout(reveal, 3000);

  function reveal() {
    document.getElementById("show5").innerHTML = "'"
    $("#show5").animate({
      opacity: 1
  }, 750);
  }  
})
              $(document).ready(function(){
                const myTimeout = setTimeout(reveal, 3500);
              
                function reveal() {
                  document.getElementById("show6").innerHTML = "'"
                  $("#show6").animate({
                    opacity: 1
                }, 750);
                }  })
          
                $(document).ready(function(){
                  const myTimeout = setTimeout(reveal, 4000);
                
                  function reveal() {
                    document.getElementById("show7").innerHTML = "'"
                    $("#show7").animate({
                      opacity: 1
                  }, 750);
                  }  })
          
                  $(document).ready(function(){
                    const myTimeout = setTimeout(reveal, 4500);
                  
                    function reveal() {
                      document.getElementById("show8").innerHTML = "'"
                      $("#show8").animate({
                        opacity: 1
                    }, 750);
                    }  })


$(document).ready(function(){
  const myTimeout = setTimeout(reveal, 5000);

  function reveal() {
    document.getElementById("show9").innerHTML = "'"
    $("#show9").animate({
      opacity: 1
  }, 750);
  }  
})
              $(document).ready(function(){
                const myTimeout = setTimeout(reveal, 5500);
              
                function reveal() {
                  document.getElementById("show10").innerHTML = "'"
                  $("#show10").animate({
                    opacity: 1
                }, 750);
                }  })
          
                $(document).ready(function(){
                  const myTimeout = setTimeout(reveal, 6000);
                
                  function reveal() {
                    document.getElementById("show11").innerHTML = "'"
                    $("#show11").animate({
                      opacity: 1
                  }, 750);
                  }  })
          
                  $(document).ready(function(){
                    const myTimeout = setTimeout(reveal, 6500);
                  
                    function reveal() {
                      document.getElementById("show12").innerHTML = "'"
                      $("#show12").animate({
                        opacity: 1
                    }, 750);
                    }  })



$(document).ready(function(){
  const myTimeout = setTimeout(reveal, 7000);

  function reveal() {
    document.getElementById("show13").innerHTML = "'"
    $("#show13").animate({
      opacity: 1
  }, 750);
  }  
})
              $(document).ready(function(){
                const myTimeout = setTimeout(reveal, 7500);
              
                function reveal() {
                  document.getElementById("show14").innerHTML = "'"
                  $("#show14").animate({
                    opacity: 1
                }, 750);
                }  })
          
                $(document).ready(function(){
                  const myTimeout = setTimeout(reveal, 8000);
                
                  function reveal() {
                    document.getElementById("show15").innerHTML = "'"
                    $("#show15").animate({
                      opacity: 1
                  }, 750);
                  }  })
          
                  $(document).ready(function(){
                    const myTimeout = setTimeout(reveal, 8500);
                  
                    function reveal() {
                      document.getElementById("show16").innerHTML = "'"
                      $("#show16").animate({
                        opacity: 1
                    }, 750);
                    }  })
          

$(document).ready(function(){
   let counter = 17;

    $(".box").click(function () {
    counter++;
    console.log("h3:nth-child(" + counter + ")");
    $("h3:nth-child(" + counter + ")").css("opacity", "1");
    });
})

