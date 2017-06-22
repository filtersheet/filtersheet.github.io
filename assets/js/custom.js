
$(document).ready(function(){

    $(window).on('scroll', function() {
        var offset = window.pageYOffset;
        var position = 10;

        if(offset > position) {
            $('#navbar-transition').addClass("navbar-background");
        } else if (offset == 0) {
            $('#navbar-transition').removeClass("navbar-background");
        } else {
            $('#navbar-transition').removeClass("navbar-background");
        }
    });


    $('input#filterText').focus();

});
