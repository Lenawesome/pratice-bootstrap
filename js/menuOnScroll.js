$(window).scroll(function(){
  if ($(this).scrollTop() > 80) {
     $('.menu-wrapper').addClass('fix-menu');
  } else {
     $('.menu-wrapper').removeClass('fix-menu');
  }
});