// external JS: masonry.pkgd.js
$(document).ready(function(){
    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
      
    $grid.on( 'click', '.grid-item', function() {
        $('.grid-item').toArray().forEach(function(element) {
            $(element).removeClass('grid-item--gigante');
            // element.removeClass('grid-item--gigante');
        }, this);;
        // change size of item via class
        $( this ).toggleClass('grid-item--gigante');

        // trigger layout
        $grid.masonry();
    });
});
