$(document).ready(function() {

  if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $(window).stellar();
  }

  window.onscroll = function() {
    var scrollTop = ($(window).scrollTop());
    var splashHeight = $('.bSplash').height();
    var headerHeight = $('.bHeader').height();

    if(scrollTop > (splashHeight - headerHeight)) {
      $('.bHeader').addClass('opaq');
      $('.bHeader__navItem').addClass('opaq');
      $('.bHeader__navItem-hamburger').addClass('opaq');
      // $('.bHeader__navItem').css('color', '#000');
      // $('.bHeader__navItem').toggleClass('opaq');
    } else {
      $('.bHeader').removeClass('opaq');
      $('.bHeader__navItem').removeClass('opaq');
      $('.bHeader__navItem-hamburger').removeClass('opaq');
      // $('.bHeader__navItem').css('color', '#fff');
    }

    $('.bSplash__content').css('opacity', 1 - (scrollTop / (splashHeight + headerHeight) * 1.5));
  };
});