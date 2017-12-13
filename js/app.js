$(function() {

    function insertBootstrapCss() { // css/bootstrap.min.css
        // TODO
    }

    function insertJqueryJs() { // js/jquery.min.js
        // TODO
    }

    function insertBootstrapJs() { // js/bootstrap.min.js
        insertJqueryJs();
        // TODO
    }

    /**
     * On editing one of the editors, refresh the preview window
     */
    $('.editor').on('keyup', function() {
        var preview = $('#preview')[0].contentWindow.document;
        preview.open();
        preview.close();

        $('body', preview).append($('#editor-html').val());
        $('head', preview).append('<style>' + $('#editor-css').val() + '</style>');
    });

});