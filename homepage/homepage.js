
$(document).ready(function() {
    $(document).on('mousemove', function(e) {
      $('#circularcursor').css({
        left: e.pageX,
        top: e.pageY
      });
    })
  });


  $(document).ready(function(){
    const myTimeout = setTimeout(Reading, 1000);
  
    function Reading() {
      document.getElementById("show").innerHTML = "*"
    }
  })

  $(document).ready(function(){
    const myTimeout = setTimeout(writing, 2000);
  
    function writing() {
      document.getElementById("show1").innerHTML = ")"
    }
  })

  $(document).ready(function(){
    const myTimeout = setTimeout(Reading, 3000);
  
    function Reading() {
      document.getElementById("show2").innerHTML = ".."
    }
  })

  $(document).ready(function(){
    const myTimeout = setTimeout(Reading, 4000);
  
    function Reading() {
      document.getElementById("show3").innerHTML = "><,"
    }
  })

  $(document).ready(function(){
    const myTimeout = setTimeout(Reading, 5000);
  
    function Reading() {
      document.getElementById("show4").innerHTML = "!"
    }
  })
  
  $(document).ready(function(){
    const myTimeout = setTimeout(Reading, 6000);
  
    function Reading() {
      document.getElementById("show5").innerHTML = "-'"
    }
  })

  $(document).ready(function(){
    const myTimeout = setTimeout(Reading, 7000);
  
    function Reading() {
      document.getElementById("show6").innerHTML = "!?"
    }
  })

  $(document).ready(function(){
    const myTimeout = setTimeout(Reading, 8000);
  
    function Reading() {
      document.getElementById("show7").innerHTML = "_-"
    }
  })

  $(document).ready(function(){
    const myTimeout = setTimeout(Reading, 9000);
  
    function Reading() {
      document.getElementById("show8").innerHTML = "click one"
    }
  })