$('[data-go]').on('click', function(event) {
    event.preventDefault();
    var selector = $(this).data('go');

    $('html, body').animate({
        scrollTop: $(selector).offset().top + 100
    }, 1500);
})