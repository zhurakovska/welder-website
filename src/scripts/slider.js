import $ from "jquery";
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

$(document).ready(function() {
    $('.slider').slick({
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 3,
        arrows: false, 
        prevArrow: $(".custom-prev-arrow"),
        nextArrow: $(".custom-next-arrow"),
        
    
        centerMode: true, // Включить режим центрирования
        centerPadding: 0,

    });

    $(".custom-prev-arrow").click(function() {
        $(".slider").slick("slickPrev");
    });

    $(".custom-next-arrow").click(function() {
        $(".slider").slick("slickNext");
    });

    $(window).on("resize", function() {
        // Вручную обновляем слайдер при изменении размера окна
        $(".slider").slick("setPosition");
      });
});