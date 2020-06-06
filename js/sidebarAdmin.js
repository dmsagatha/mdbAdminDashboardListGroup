$(document).ready(function () {
  var offCanvasHeight = function () {
    $('.offCanvas').css({
      'max-height': document.documentElement.clientHeight
    });
  };

  offCanvasHeight();

  $(window).resize(function () {
    offCanvasHeight();
  });

  // Capa sobrepuesta - Desplazar el menú
  $('.offCanvasToggler, .overlay').click(function (e) { 
    e.preventDefault();
    $('.wrapper').toggleClass('active');
  });
});