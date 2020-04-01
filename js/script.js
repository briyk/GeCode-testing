$(function () {
  /* wow Plugins to dalay animation */
  new WOW().init();
  /* image Gallery */
  $('#work').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    },
  });
  /* our carousel setup*/
  $("#team-wrappers").owlCarousel({
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1
      },
      // breakpoint from 480 up
      480: {
        items: 2
      },
      // breakpoint from 768 up
      768: {
        items: 3
      },
    },
  });
  $("#testimonial-content").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 1000,
    loop: true
  });
  $(".our-clients").owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 1000,
    loop: true,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1
      },
      // breakpoint from 480 up
      480: {
        items: 2
      },
      // breakpoint from 768 up
      768: {
        items: 4
      },
    },

  });
  /* counter */
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });
});
//scrolling
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() < 500) {
      //hide navbar
      $('nav').removeClass('gecode-nav');
      $(".backTop").fadeOut(1000);
    } else {
      //show navbar
      $('nav').addClass('gecode-nav');
      $(".backTop").fadeIn(1000);
    }

  });
  //Smoth Scrolling
  $('a.smoth-scroll').click(function (e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html,body").animate({
      scrollTop: $(section).offset().top - 80,
    }, 1200);
  });
  //Close Menu when Clicked
  $(".navbar-collapse a.nav-link").on("click touch", function () {
    $(".navbar-toggler").click();
  });

});