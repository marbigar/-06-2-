(function($){
    $.fn.slider = function (options){

        var $this = $(this);
        var $items = $this.find('.items');
        var count = this.find('.item').length;
        var working = false;

        $items.width( count * 125 );

        $this.find('.next').click(function() {
            if ( working == false ) {
                var sliderWidth = $this.width();
                var itemsWidth = $items.width();
                var itemsMarginLeft = - parseInt($items.css('margin-left'));
                if ( sliderWidth + itemsMarginLeft < itemsWidth ) {
                    working = true;
                    $items.animate({
                        marginLeft: '-=125'
                    }, 200, function() {
                        working = false;
                    });
                }
            }
        });

        $this.find('.prev').click(function() {
            if ( working == false ) {
                var itemsMarginLeft = parseInt($items.css('margin-left'));

                if ( itemsMarginLeft < 0 ) {
                    working = true;
                    $items.animate({
                        marginLeft: '+=125'
                    }, 200, function() {
                        working = false;
                    });
                }
            }
            
        });

        return this;
    }
})(jQuery);