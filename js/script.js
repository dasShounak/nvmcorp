const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  effect: "coverflow",
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 3
    }
  },
  autoplay: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
