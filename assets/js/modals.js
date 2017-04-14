(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        $('.modal--base').modal({
            dismissible: true,
            ready: function(modal, trigger) {
                var modalHeight = $('.modal--base').css('height');
                
                $('.modal').css("max-height: 75%");

                $('.modal-overlay').css({
                    top: "0px",
                    bottom: modalHeight,
                    height: "auto"
                });
            }
        });

        $('#modal--newsletter').modal({
            ready: function(modal, trigger) {
                var modalHeight = $('#modal--newsletter').css('height');

                $('.modal-overlay').css({
                    top: "0px",
                    bottom: modalHeight,
                    height: "auto"
                });
            }
        });

        $('#modal--tax-form').modal({
            ready: function(modal, trigger) {
                var modalHeight = $('#modal--tax-form').css('height');

                $('.modal-overlay').css({
                    top: "0px",
                    bottom: modalHeight,
                    height: "auto"
                });
            }
        });

        $('#interior').modal({
            startingTop: '5%',
            endingTop: '5%',
            ready: function(modal, trigger) {
                $('.main-carousel').flickity('resize');
            },
        });

        $('#exterior').modal({
            startingTop: '5%',
            endingTop: '5%',
            ready: function(modal, trigger) {
                $('.main-carousel').flickity('resize');
            },
        });

        $('.modal-close').modal('close');

    });
})(jQuery);