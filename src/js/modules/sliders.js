import Swiper from "swiper/js/swiper.min";
export default function() {
  // Swiper cards
  var swiperAdvantages = new Swiper(".js-swiper-advantages", {
    loop: false,
    spaceBetween: 30,
    noSwiping: true,
    breakpoints: {
   
      0: {
        slidesPerView: 'auto',  
        spaceBetween: 15,
        freeMode: true,
        noSwiping: false,
      },
      1025: {
        slidesPerView: 4,
      },
    },
  });

  var swiperApple = new Swiper(".js-swiper-directions", {
    loop: false,
    slidesPerView: 'auto',
    noSwiping: true,
    breakpoints: {
      0: {
        freeMode: true,  
        spaceBetween: 15,
        noSwiping: false,
      },
      768: {
        freeMode: true,
        spaceBetween: 30,
        noSwiping: false,
      },
      1025: {
        freeMode: false,
        noSwiping: true,
      },
    },
  });
}
