(function() {

    var preview = $('#preview')[0].contentWindow.document;

    function getHtml() {
        return $('#editor-html').val();
    }

    function getCss() {
        return $('#editor-css').val();
    }

    $('.editor').on('keyup', function() {
        preview.open();
        preview.close();

        $('body', preview).append(getHtml());
        $('head', preview).append('<style>' + getCss() + '</style>');
    });

});