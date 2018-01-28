$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: true,
        navText: ['',''],
        navClass: ['prev', 'next'],
        autoplayTimeout: 10000
    });
});