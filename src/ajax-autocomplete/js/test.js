(function($) {

        var chosenAutocomplete=function(options)
        {
            console.log(options);
        }

        $.fn.chosenAutocomplete = function( options ) {
    
            // Establish our default settings
            var settings = $.extend({
                text         : 'Hello, World!',
                color        : null,
                fontStyle    : null
            }, options);
    
            return this.each( function() {
                $(this).data("chosenAutocomplete",new chosenAutocomplete(settings));
            });    


        }
    
    }(jQuery));