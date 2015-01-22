var rte = {};

rte = {
    init: function(){
        this.rteRender();
        this.events();
    },

    events: function(){
        $(document).on('click', '.save-work', function(e){
            e.preventDefault();
            rte.saveData();
        });
    },

    saveData: function(){
        $.ajax({
            url: '/commit',
            type: 'GET',
        }).done(function(){
            console.log('Successful push');
        })
        .fail(function(){
            console.log('error');
        })
        .always(function(){
            console.log('complete commit');
        });
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

            textarea.css('display', 'none');

            var editor = ace.edit(editDiv[0]);
            editor.renderer.setShowGutter(false);
            editor.setHighlightActiveLine(false);
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
            $('.output .display').html(content);
        }

        if(text.indexOf('<!doctype html>') > -1) {
            console.log('success')
        }

    }
}

$(function () {
    rte.init();
});
