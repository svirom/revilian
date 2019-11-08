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

  // show/hide submenu by click on menu button (mobile)
	$('.main_nav .dropdown').on('click', function(event) {
		if ($(document).width() < 1199) {
      console.log(event.target);
      event.preventDefault();
			$(this).stop().find('.dropdown-menu').slideToggle(500);
		}
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

})