

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
  })
})

$(document).ready(function(){
  let counter = 0;

  $(".box1").click(function(){
    counter++;
    console.log("h1:nth-child(" + counter + ")");
    $("h1:nth-child(" + counter + ")").css("opacity", "1");
    });
})


  
// $(document).ready(function(){
//   const myTimeout = setTimeout(reveal, 1000);

//   function reveal() {
//     document.getElementById("show1").innerHTML = ":"
//     $("#show1").animate({
//       opacity: 1
//   }, 750);
//   }  

//     $(document).ready(function(){
//       const myTimeout = setTimeout(reveal, 1500);
    
//       function reveal() {
//         document.getElementById("show2").innerHTML = ":"
//         $("#show2").animate({
//           opacity: 1
//       }, 750);
//       }  })

//       $(document).ready(function(){
//         const myTimeout = setTimeout(reveal, 2000);
      
//         function reveal() {
//           document.getElementById("show3").innerHTML = ","
//           $("#show3").animate({
//             opacity: 1
//         }, 750);
//         }  })

//         $(document).ready(function(){
//           const myTimeout = setTimeout(reveal, 2500);
        
//           function reveal() {
//             document.getElementById("show4").innerHTML = ","
//             $("#show4").animate({
//               opacity: 1
//           }, 750);
//           }  })

//           })
            

// $(document).ready(function(){
//   const myTimeout = setTimeout(reveal, 3000);

//   function reveal() {
//     document.getElementById("show5").innerHTML = ";"
//     $("#show5").animate({
//       opacity: 1
//   }, 750);
//   }  
// })
//               $(document).ready(function(){
//                 const myTimeout = setTimeout(reveal, 3500);
              
//                 function reveal() {
//                   document.getElementById("show6").innerHTML = ";"
//                   $("#show6").animate({
//                     opacity: 1
//                 }, 750);
//                 }  })
          
//                 $(document).ready(function(){
//                   const myTimeout = setTimeout(reveal, 4000);
                
//                   function reveal() {
//                     document.getElementById("show7").innerHTML = "."
//                     $("#show7").animate({
//                       opacity: 1
//                   }, 750);
//                   }  })



$(document).ready(function(){
   let counter = 2;

    $(".box").click(function () {
    counter++;
    console.log("h3:nth-child(" + counter + ")");
    $("h3:nth-child(" + counter + ")").css("opacity", "1");
    });
})

