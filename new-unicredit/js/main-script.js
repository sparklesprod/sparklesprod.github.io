$(document).ready(function () {
   console.log('jquery работает.');

    /* Scroll Nav */
    // $('#fullpage').scrollNav({
    //     sections: 'h2',
    //     showHeadline: false,
    //     showTopLink: false,
    //     insertTarget: '.header-mobile-img',
    //     insertLocation: 'insertBefore',
    //     scrollOffset: 200,
    //     arrowKeys: true
    // });
    //
    // var $item = $('.scroll-nav__item > a');
    // $.each($item, function(index){
    //     var content = $(this).html();
    //
    //     $(this).html('');
    //
    //     var spanContent = document.createElement('span');
    //     spanContent.className = 'd';
    //     spanContent.innerHTML = content;
    //
    //     var spanLine = document.createElement('span');
    //     spanLine.className = 'line-item';
    //     $(this).append(spanLine, spanContent);
    //     if (index > 1 && index < 9) {
    //         $(this).find('.line-item').css({'width':'16px', 'margin-left':'16px'});
    //     }
    // });

    // var links = $('li.scroll-nav__item');
    // console.log('LINKS', links);
    //
    // links.each(function () {
    //    $(this).on('click', function () {
    //        var _id = $(this).attr('id');
    //        if (_id) {
    //            _id = '_' + _id;
    //            $('html, body').animate({
    //                scrollTop: $("#" + _id).offset().top
    //            }, 2000);
    //        }
    //    });
    // });

    /*-- Collapsed List Style --*/
    $('.item-collapse-header').click(function () {
        $(this).parent().find('.item-collapse-content').toggle('slow');
        $(this).find('.icon-arrow').toggleClass('icon-arrow-rotate');
    });

    /*-- List Active Style --*/
    $('.entry-content > li a').click(function () {
        $(this).parent().find('div').toggle();
        $(this).parent().find('a').find('h3').toggleClass('active');
        $(this).parent().toggleClass('active')
    });

   var nextLevel = 0;

   $('#fullpage').fullpage({
       scrollingSpeed: 1000,
       autoScrolling: true,
       anchors: ['desc', 'features', 'question', 'tarrifs'],
       menu: '.scroll-nav',
       navigation: true,
       navigationPosition: 'right',
       navigationTooltips: ['Описание', 'Возможности', 'Вопросы', 'Условия и тарифы', 'Описание', 'Возможности', 'Вопросы', 'Условия и тарифы'],
       onLeave: function(origin, destination, direction) {
           console.log("index", origin);
           switch (origin.index) {
               case 1:
                   if (direction == "down") {
                       if (nextLevel == 0) {
                           $(".features-item-img").addClass("shakeAnimation");
                           setTimeout(function() {
                               $(".features-item-img").removeClass("shakeAnimation");
                           }, 800);
                       }
                       if ($(".features-item-list .features-item-text").length - 1 > nextLevel) {
                           $($(".features-item-list .features-item-text")[nextLevel]).slideToggle("fast");
                           nextLevel++;
                           $($(".features-item-list .features-item-text")[nextLevel]).slideToggle("fast");
                           return false;
                       }
                   } else if (direction == "up") {
                       if (nextLevel > 0) {
                           $($(".features-item-list .features-item-text")[nextLevel]).slideToggle("fast");
                           nextLevel--;
                           $($(".features-item-list .features-item-text")[nextLevel]).slideToggle("fast");
                           return false;
                       }
                   }
                   break;
               default:
                   $('li.scroll-nav__item').each(function (index) {
                       if (index == 0) {
                           $(this).find('a').find('span.line-item').toggleClass('activeLine');
                       }
                   })
           }
       }
   });
});