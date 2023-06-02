const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true, // что-бы сделать пагинацию кликабельной
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  // spaceBetween: -400,

variableWidth:true,
  
    breakpoints: {
    320: {
      sliderPerView: 1,
    },
    768: {
      sliderPerView: 2.5,
    },
    1200: {
      sliderPerView: 4,
    }
  },

  
});