$('form').on('submit', function(event) {
    event.preventDefault();

    var data = {};
    var children = $(this).find('input');

    children.each(function(child) {
        var name = $(this).attr('name');
        var value = $(this).val();

        data[name] = value;
    });

    for (var key in data) {
        if (data[key] == "") {
            delete data[key];
        }
    }

    _LoadingController.start();

    $.ajax({
        url: 'https://te-emprego.herokuapp.com/beta',
        method: 'POST',
        data: data,
        headers: {
            Authorization: 'dd5e8ad3aa575323d52799af860e6b70',
        },
        success: function() {
            showMessageBox('Parabéns! Você garantiu acesso como beta tester! :D')
            children.attr('readonly', true);
        },
        error: function(res) {
            showMessageBox(res.responseJSON.message)
        },
        complete: function() {
            _LoadingController.finish();
        },
    });
})

/**
 * Formulário de atalho do header
 * Manda o email digitado para o formulário real
 * na section espalhada
 */
var btn = $('#get-mailer').find('button');
function transferMail() {
    var email = btn.siblings('input').val();
    var input = $('#to-receive-mail');

    input.val(email);

    $('html, body').animate({
        scrollTop: $(input).offset().top + 300
    }, 500);
}

// registra os eventos
btn.on('click', $.proxy(transferMail, btn));
$('#get-mailer').find('input[type="text"]').on('keypress', function(e) {
    if (e.key === 'Enter') {
        transferMail()
    }
});

$('.custom-input > input').on('focus', function(event) {
    $(this).parent().addClass('focus');
})

$('.custom-input > input').on('blur', function(event) {
    $(this).parent().removeClass('focus');
})

$('[data-mask]').mask('(00) 0000-00000', {onKeyPress: function(tel, e, field, options) {
    var masks = ['(00) 0000-00000', '(00) 00000-0000'];
    mask = tel.length > 14 ? masks[1] : masks[0];
    $('[data-mask]').mask(mask, options);
}});