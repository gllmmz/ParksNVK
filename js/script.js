new Swiper('.swiper-container', {
    autoplay:{
        delay:2000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    loop:true,
    speed:1500,
    effect:'coverflow',
    coverflowEffect: {
        rotate: 45,
        stretch: 10,
        slideShadows: true,
    },    
})