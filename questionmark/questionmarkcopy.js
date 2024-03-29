

$(document).ready(function() {
  $(document).on('mousemove', function(e) {
    $('#circularcursor').css({
      left: e.pageX,
      top: e.pageY
    });
  })
})

// $(document).ready(function(){
//   const myTimeout = setTimeout(reveal, 500);

//   function reveal() {
//     document.getElementById("show1").innerHTML = "?"
//     $("#show1").animate({
//       opacity: 1
//   }, 750);
//   }  
// })
  
//     $(document).ready(function(){
//       const myTimeout = setTimeout(reveal, 1000);
    
//       function reveal() {
//         document.getElementById("show2").innerHTML = "?"
//         $("#show2").animate({
//           opacity: 1
//       }, 750);
//       }  })

//       $(document).ready(function(){
//         const myTimeout = setTimeout(reveal, 1500);
      
//         function reveal() {
//           document.getElementById("show3").innerHTML = "?"
//           $("#show3").animate({
//             opacity: 1
//         }, 750);
//         }  })

//         $(document).ready(function(){
//           const myTimeout = setTimeout(reveal, 2000);
        
//           function reveal() {
//             document.getElementById("show4").innerHTML = "?"
//             $("#show4").animate({
//               opacity: 1
//           }, 750);
//           }  })


$(document).ready(function(){
  let counter = 1;

   $(".box1").click(function () {
    counter++;
    console.log("h1:nth-child(" + counter + ")");
    $("h1:nth-child(" + counter + ")").css("opacity", "1");


    var divs = document.getElementsByTagName('h1');
    // get window width and height (use let instead of var; var is more manipulative and let is restricted)
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;
    
    // i stands for "index". you could also call this banana or haircut. it's a variable
    for ( var i=0; i < divs.length; i++ ) {
       
        // shortcut! the current div in the list
        var thisDiv = divs[i];
        
        // get random numbers for each element
        randomTop = getRandomNumber(0, winHeight);
        randomLeft = getRandomNumber(0, winWidth);
        
        // update top and left position
        thisDiv.style.top = randomTop +"px";
        thisDiv.style.left = randomLeft +"px";
        
    }
    
    // function that returns a random number between a min and max
    function getRandomNumber(min, max) {
        
      return Math.random() * (max - min) + min;
}
   })
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
   let counter = 21;

    $(".box").click(function () {
    counter++;
    console.log("h3:nth-child(" + counter + ")");
    $("h3:nth-child(" + counter + ")").css("opacity", "1");
    });
})