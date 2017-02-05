$(function() {
    var pull = $('#pull');
    menu = $('li ul');
    menuHeight = menu.height();

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function() {
        var w = $(window).width();
        if (w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});
$(document).ready(function() {
    $("#carousel").owlCarousel({

    navigation : false, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true,
    responsive: true

    // "singleItem:true" is a shortcut for:
    // items : 1,
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false

});
});
