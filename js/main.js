// hero swiper
const heroSwiper = new Swiper(".heroSwiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// news icons swiper
new Swiper(".logoSwiper", {
    loop: true,
    speed: 7000,
    allowTouchMove: false,
    slidesPerView: "auto",
    spaceBetween: 0,
    freeMode: {
        enabled: true,
        momentum: false,
    },
    loopAdditionalSlides: 8,

    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
});
