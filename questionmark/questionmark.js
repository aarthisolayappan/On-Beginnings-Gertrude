

$(document).ready(function () {
  $(document).on('mousemove', function (e) {
    $('#circularcursor').css({
      left: e.pageX,
      top: e.pageY
    });
  })
})

$(document).ready(function () {
  const myTimeout = setTimeout(Reading, 2500);

  function Reading() {
    document.getElementById("show").innerHTML = "if you're ready, start reading"
  }

  let counter = 1;

  $("section .box").click(function () {
    counter++;
    console.log("section h3:nth-child(" + counter + ")");
    $("section h3:nth-child(" + counter + ")").css("opacity", "1");

  });

})

