/**
 * Main JS file
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";
    var mobileWidth = 600;
    var tabletWidth = 992;
    var desktopWidth = 1025;

    var $document = $(document);

    $document.ready(function () {

        var $postContent = $(".post-content");
        $postContent.fitVids();

        $(".scroll-down").arctic_scroll();

    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        },

        allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });

    };

    $('.nav__menu-toggle').sideNav({
        menuWidth: 300,
        edge: 'right',
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    });

    $('.nav__menu-toggle--post').sideNav({
            menuWidth: 300, 
            edge: 'right',
            closeOnClick: true,
            draggable: true
        }
    );

    $('.header-carousel').flickity({
        cellAlign: 'center',
        contain: true,
        imagesLoaded: true,
        wrapAround: true
    });

    $('.mobile-carousel').flickity({
        cellAlign: 'center',
        contain: true,
        imagesLoaded: true,
        wrapAround: true,
        pageDots: false,
        prevNextButtons: true
    });

    $('.main-carousel').flickity({
        cellAlign: 'center',
        contain: true,
        imagesLoaded: true,
        resize: true
    });

    $('.collapsible').collapsible();
  
})(jQuery);
