

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
    $("h2").click(function(){
      $("h2").html("There are some punctuations that are interesting and there are some punctuations that are not. Let us begin with the punctuations that are not. Of these the one but the first and the most the completely most uninteresting is the <strong>question mark.");
      // document.body.style.backgroundColor = "#D9D9D9";

    $("h2:hover").css("text-decoration", "none")

    
    
    // let counter = 1;

    // $(".box").click(function () {
    //   counter++;
    //   console.log("section h3:nth-child(" + counter + ")");
    //   $("section h3:nth-child(" + counter + ")").css("opacity", "1");
    //   });
  
    })
  })
  
  $(document).ready(function(){
    const myTimeout = setTimeout(Writing, 8100);
  
    function Writing() {
      document.getElementById("start").innerHTML = "start"
      $("start").toggleClass("b")
    }
  })



  // $(document).ready(function(){
  //   document.getElementById('show').onclick = changeColor;   

  //   function changeColor() {
  //       document.body.style.color = "purple";
  //       return false;
  //   }}
  // )


//   let counter = 1;

//   $(".box").click(function () {
//     counter++;
//     console.log("section h3:nth-child(" + counter + ")");
//     $("section h3:nth-child(" + counter + ")").css("opacity", "1");

// })


 
  