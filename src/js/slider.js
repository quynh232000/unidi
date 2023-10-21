const swiper = new Swiper('.swipper-banner', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 5000,
      },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});
const swiperCategory = new Swiper(".categories-wrapper", {
    slidesPerView: 7,
    spaceBetween: 0,
    // auto
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop:true,
    loopedSlides: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    speed: 2000,
    breakpoints: {
        // when window width is >= 480px
        120: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 640px
       // when window width is >= 640px
        740: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        1023: {
            slidesPerView: 7,
            spaceBetween: 0
        }

    },
});
const swiperMegaSale = new Swiper(".mega-swipper-products", {
    slidesPerView: 5,
    spaceBetween: 10,
    // auto
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop:true,
    loopedSlides: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    speed: 2000,
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

   
});