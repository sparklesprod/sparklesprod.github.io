$(document).ready(function () {
   console.log('jquery работает. Размер окна: ', $(window).width());
    var windowWidth = $(window).width();
    var right = 0;

    checkWidth();
    // checkScrollTop();

    function checkWidth() {
        if (windowWidth > 1280) {
            right = (windowWidth - 1280) / 2;
            console.log('нужно сделать отступ', right + 'px');

            var mainNavigation = $('.main-navigation');
            mainNavigation.css('right', right + 'px');
        }
    }

    // function checkScrollTop() {
    //     if ($(window).scrollTop() > 0) {
    //         console.log("Нужен скрол в 1px");
    //         $(window).scrollTop($(window).scrollTop() + 1);
    //     }
    // }

   /*-- Resize --*/
   $(window).resize(function () {
       if ($(window).width() > 1280) {
           right = ($(window).width() - 1280) / 2;

           var mainNavigation = $('.main-navigation');
           mainNavigation.css('right', right + 'px');
       }
   });

   /*-- List Active Style --*/
    $('.entry-content > li a').click(function () {
        $(this).parent().find('div').toggle();
        $(this).parent().find('a').find('h3').toggleClass('active');
        $(this).parent().toggleClass('active')
    });

    /*-- Click Navigation --*/
    var links = $('.main-navigation > ul > li, ul.sub-menu > li');
    console.log('LINKS', links);

    links.each(function () {
       $(this).on('click', function () {
           var _id = $(this).attr('id');
           if (_id) {
               _id = '_' + _id;
               $('html, body').animate({
                   scrollTop: $("#" + _id).offset().top
               }, 2000);
           }
       });
    });


    /*-- Collapsed List Style --*/
    $('.item-collapse-header').click(function () {
        $(this).parent().find('.item-collapse-content').toggle('slow');
    });


    /*-- FIXED WITH SCROLLABLE --*/
    var fixedSection = $('#fixed').offset().top;
    var fixedMobile = $('#fixed2').offset().top;

    $(window).scroll(function() {
        var currentScroll = $(window).scrollTop();
        // console.log("current scroll", currentScroll);
        // console.log(".main-header [top]", $('.main-header').offset().top);
        // console.log(".main-header [bottom]", $('.main-header').offset().top + $('.main-header').outerHeight());

        if (currentScroll >= fixedSection) {
            console.log("Сработал");
            $('#fixed').css({
                position: 'fixed',
                top: '0'
            });

            $('#fixed2').css({
                position: 'fixed',
                // top: '57px',
                top: "0px",
                left: '50%',
                marginLeft: '100px'
            })
        } else {
            $('#fixed').css({
                position: ''
            });

            $('#fixed2').css({
                position: ''
            })
        }
        // console.log(currentScroll, fixedMobile);

        if (currentScroll > 3700) {
            $('#fixed').css({
                position: 'absolute'
            });
            $('#fixed2').css({
                position: 'absolute',
                // top: '3057px',
                top: '2900px',
                right: '140px'
            })
        }

    });
});