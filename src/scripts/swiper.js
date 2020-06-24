export var appendNumber = 4;
export var prependNumber = 1;
export var swiper = new Swiper(".swiper-container", {
  slidesPerView: 5,
  centeredSlides: true,
  loop:true,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

