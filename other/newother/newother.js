

$(document).ready(function() {
  $(document).on('mousemove', function(e) {
    $('#circularcursor').css({
      left: e.pageX,
      top: e.pageY
    });
  })
})

$(document).ready(function(){
   let counter = 2;

    $(".box").click(function () {
    counter++;
    console.log("h3:nth-child(" + counter + ")");
    $("h3:nth-child(" + counter + ")").css("opacity", "1");
    });
})

$(document).ready(function(){
  $(".box2").click(function(){
    $("h3").toggleClass("h3b")
  })
})

$(document).ready(function(){
  let counter = 1;

  $(".box1").click(function(){
    counter++;
    console.log("h1:nth-child(" + counter + ")");
    $("h1:nth-child(" + counter + ")").css("opacity", "1");
    });
})

$(document).ready(function(){
  const textPath = document.querySelector("#text-path");

  const h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
  
  document.addEventListener("scroll", e => {
    let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    textPath.setAttribute("startOffset", (-percent * 100) + 1200)
  });
})  

//https://codepen.io/chriscoyier/pen/qeZwRb/