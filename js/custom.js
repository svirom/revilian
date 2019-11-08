$(document).ready(function() {

  // add arrows in dropdown menu on mobile
  // if ($(document).width() < 1199) {
    $('.main_menu').find('.dropdown > a').append('<img src="../img/arrow-down.png" alt="">');
  // }

  // scroll function
  $(function () {
    $(window).scroll(function () {
      if ( ($(document).width() >= 1200) && ($(this).scrollTop() > 120) ) {
        $('.main_nav').addClass("bkgr"); //background of main menu
      } else {
        $('.main_nav').removeClass("bkgr"); //background of main menu
      }
    });
  });

  // link on homepage header
  $(".homepage-arrow").on('click', function (event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top - 80
      }, 800, function () {
        // window.location.hash = hash - 80;
      });
    }
  });

  // show/hide submenu by click on menu button (mobile)
	$('.main_menu .dropdown').on('click', function(event) {
		if ($(document).width() < 1200) {
      event.preventDefault();
      $(this).toggleClass('dropdown-active');
			$(this).stop().find('.dropdown-menu').slideToggle(500);
		}
  });
  
  // mobile menu toggle
  $('.nav-opener').on('click', function(event) {
    event.preventDefault();

    if ($(document).width() < 1200) {
      $(this).toggleClass('nav-active');
      $(this).next('.main_menu').toggleClass('main_menu-active');
    }
  });

})