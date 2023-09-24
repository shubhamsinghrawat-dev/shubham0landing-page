$(() => {
  $('a[href*="#"]:not([href="#"])').click((e) => {
    const target = $(e.target.hash);

    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);

      return false;
    }
  });
});



$(document).ready(function() {
    $("#service-slider").owlCarousel({
      autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });
});