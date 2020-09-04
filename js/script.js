/* ------------------------------------------------------------------------------------------------------------------------------
HEADER_FIXED
---------------------------------------------------------------------------------------------------------------------------------*/

$(document).ready(function(){
             
    var $menu = $("#menu"),
        $fixed = $(".header__fixed"),
        $info = $(".header__info");
         
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 500 && $menu.hasClass("info") ){
            $menu.fadeOut('fast',function(){
                $(this).removeClass("info")
                       .addClass("fixed")
                       .fadeIn('fast');
            });
        } else if($(this).scrollTop() <= 500 && $menu.hasClass("fixed")) {
            $menu.fadeOut('fast',function(){
                $(this).removeClass("fixed")
                       .addClass("info")
                       .fadeIn('fast');
            });
        }
    });        
});


/* ------------------------------------------------------------------------------------------------------------------------------
SLIDER
---------------------------------------------------------------------------------------------------------------------------------*/

$(document).ready(function(){
    $("#owl-slider").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ["<img class='slider__prev' src='img/slider__prev.png'>", "<img class='slider__next' src='img/slider__next.png'>"],
    });

        $("#owl-news").owlCarousel({
            items: 4,
            loop: true,
            nav: true,
            navText: ["<img class='news__prev' src='img/slider__prev.png'>", "<img class='news__next' src='img/slider__next.png'>"],
            margin: 20,
            responsive:{
                0:{
                    items:1
                },
                750:{
                    items:2
                },
                1100:{
                    items:3
                },
                1500:{
                    items:4
                }
            }
        });

  });


