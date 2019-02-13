var messageBox = {
    open: false,
};

function showMessageBox(message) {
    $('.message-box').find('p').text(message);
    $('.message-box').fadeIn();
    messageBox.open = true;
}

function closeMessageBox() {
    $('.message-box').fadeOut();
    messageBox.open = false;
}

$(document).on('mouseup', function(e) {
    var container = $(".message-box .wrapper");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        closeMessageBox();
    }
});

$(document).on('keyup', function(e) {
    if (e.key === 'Escape' && messageBox.open) {
        closeMessageBox();
    }
});