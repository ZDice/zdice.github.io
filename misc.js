$('.difficulty-body').on('shown.bs.collapse', function (e) {
    var $panel = $(this).closest('.panel-collapse');
    $('html,body').animate({
        scrollTop: $panel.offset().top
    }, 500); 
}); 