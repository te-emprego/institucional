$(function() {
    $('.loading').fadeOut();
});

var _LoadingController = {
    start: function() {
        $('.loading').fadeIn();
    },
    finish: function() {
        $('.loading').fadeOut();
    }
}