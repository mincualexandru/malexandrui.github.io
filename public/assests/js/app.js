$(document).ready(function () {
  $('.toggle').click(function () {
    $('.toggle').toggleClass('active');
    $('nav').toggleClass('active');
  })
});

$(document).ready(function(){
  $("h1").delay("1000").fadeIn();
  $("#back-top").hide();
  $(function () {
      $(window).scroll(function () {
          if ($(this).scrollTop() > 500) {
              $('#back-top').fadeIn();
          } else {
              $('#back-top').fadeOut();
          }
      });
      $('a#back-top').click(function () {
          $('body,html').animate({
              scrollTop: 0
          }, 800);
          return false;
      });
  });
});