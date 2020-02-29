$(document).ready(function() {
 
    $('.products-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    variableWidth: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".form__category .form__select").prev().click(function() {
        $(this).parents(".form__category").find(".form__select").not(this).slideUp().prev();
        $(this).next().not(":visible").slideDown().next();
        $('.arrow1').toggleClass("active");
    });

    $(".form__material .form__select").prev().click(function() {
        $(this).parents(".form__material").find(".form__select").not(this).slideUp().prev();
        $(this).next().not(":visible").slideDown().next();
        $('.arrow2').toggleClass("active");
    });
});