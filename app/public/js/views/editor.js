var rte = {};

rte = {
    init: function(){
        this.rteRender();
        this.github();
    },

    github: function(){

    },

    rteRender: function(){
        $('textarea[data-editor]').each(function () {
            var textarea = $(this)
                , lessonData = $(this).attr('name')
                , output = $(this).data('output')
                ;

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
                rte.checkInput(editor, lessonData, output, text);
            });

        });
    },

    checkInput: function(editor, lessonData, output, text){
        var lessonContainer = lessonData;
        if(Boolean(output) === true){
            var content = editor.getSession().getValue();
            $('.output').html(content);
        }

        if(text.indexOf('<!doctype html>') > -1) {
            console.log('success')
        }

    }
}

$(function () {
    rte.init();
});
