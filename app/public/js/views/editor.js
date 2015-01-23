var rte = {};

rte = {
    editor: {},

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

    getFileData: function(){

        var file = rte.activeEditor();

        $.ajax({
            url: '/readFile',
            type: 'POST',
            data: 'file=' + file
        }).done(function(data){

            rte.editor.getSession().setValue(data);
        })
        .fail(function(err){
            console.log('error: ' + err);
        })
        .always(function(){

        });
    },

    saveData: function(){

        var code = rte.editor.getSession().getValue();

        var file = rte.activeEditor();

        $.ajax({
            url: '/save',
            type: 'POST',
            data: 'file='+ file +'&code=' + code
        }).done(function(){

            rte.commitToGitHub();
        })
        .fail(function(err){
            console.log('error: ' + err);
        })
        .always(function(){

        });
    },

    commitToGitHub: function(){
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

    activeEditor: function(){
        var activeEditor = $('.active-editor');
        var editorType = activeEditor.attr('data-editor-type');
        var file = '';

        switch(editorType){
            case 'html':
                file = 'index.html';
            break;
            case 'javascript':
                file = 'scripts.js';
            case 'css':
                file = 'styles.css';
            break;
        }

        return file;
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
                'class': textarea.attr('class') + ' active-editor',
                'data-editor-type': textarea.attr('name')
            }).insertBefore(textarea);

            textarea.css('display', 'none');

            rte.editor = ace.edit(editDiv[0]);
            rte.editor.renderer.setShowGutter(false);
            rte.editor.setHighlightActiveLine(false);
            rte.editor.setShowPrintMargin(false);
            rte.editor.getSession().setValue(textarea.val());
            rte.editor.getSession().setMode("ace/mode/" + mode);
            rte.editor.setTheme("ace/theme/github");

            rte.editor.getSession().on('change', function(e) {
                var text = rte.editor.getSession().getValue();
                rte.checkInput(rte.editor, lessonData, output, text);
            });

            rte.getFileData();
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
