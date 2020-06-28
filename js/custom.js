$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      items: 4,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 1000,
      autoplayHoverPause: true,
      responsive:{
        0:{
            items:1,

        },
        481:{
            items:2,

        },
        768:{
          items:4
        }
    }
    });
  });