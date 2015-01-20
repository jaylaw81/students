var rte = {};

rte = {
    init: function(){
        this.rteRender();
    },

    rteRender: function(){
        $('textarea[data-editor]').each(function () {
            var textarea = $(this)
                , lessonData = $(this).attr('name');

            var mode = textarea.data('editor');

            var editDiv = $('<div>', {
                position: 'absolute',
                'class': textarea.attr('class')
            }).insertBefore(textarea);

            textarea.css('visibility', 'hidden');

            var editor = ace.edit(editDiv[0]);
            editor.renderer.setShowGutter(true);
            editor.setShowPrintMargin(false);
            editor.getSession().setValue(textarea.val());
            editor.getSession().setMode("ace/mode/" + mode);
            editor.setTheme("ace/theme/github");

            editor.getSession().on('change', function(e) {
                var text = editor.getSession().getValue();
                rte.checkInput(lessonData, text);
            });

        });
    },

    checkInput: function(lessonData, text){
        var lessonContainer = lessonData;

        if(text.toLowerCase() == '<!doctype html>') {
            console.log('success')
        }

    }
}

$(function () {
    rte.init();
});
