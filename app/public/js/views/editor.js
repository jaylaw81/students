var rte = {};

rte = {
    editor: {},
    myDelay: 1000,
    thisDelay: 1000,
    start: Date.now(),

    init: function(){
        this.rteRender();
        this.events();
        //this.autoSave();
    },

    events: function(){
        $(document).on('click', '.save-work', function(e){
            e.preventDefault();
            rte.loader('start');
            rte.saveData();
        });

        $(document).on('click', '.drawer', function(e){
            e.preventDefault();
            rte.hideLesson();
        });

        $(document).keydown(function(event) {

            if((event.ctrlKey || event.metaKey) && event.which == 83 ) {
                event.preventDefault();

                rte.loader('start');
                rte.saveData();
                return false;
            }
            return true;
        });


    },

    hideLesson: function(){

        if($('div.pagecontainer > div:first-child').hasClass('hide-lesson')){

            $('.lesson-container .drawer').remove();
            $('.lesson-container').append('<span class="drawer icon-collapse"></span>');
            $('div.pagecontainer > div:last-child').toggleClass('collapse-editor');
            $('div.pagecontainer > div:first-child').removeClass('hide-lesson').toggleClass('show-lesson');

        } else {
            $('.lesson-container .drawer').remove()
            $('.lesson-container').append('<span class="drawer icon-expand"></span>');
            $('div.pagecontainer > div:first-child').removeClass('show-lesson').toggleClass('hide-lesson');
            $('div.pagecontainer > div:last-child').toggleClass('expand-editor');

        }

    },

    loader: function(type){
        if(type == 'start'){
            $('.icon-loader-container').fadeIn(200);
            $('.icon-loader2').addClass('animate-spin');
            $('.pagecontainer').addClass('blur');
        } else {
            $('.icon-loader-container').fadeOut(200);
            $('.icon-loader2').removeClass('animate-spin');
            $('.pagecontainer').removeClass('blur');
        }
    },

    getFileData: function(fileName){

        var activeTab = $('span.active-editor').data('section');
        var mode = $('span.active-editor').data('mode');
        activeTab = activeTab.split('-')[1];
        $('.ace_editor').removeClass('active-editor');
        $('div[data-editor-type="'+activeTab+'"]').addClass('active-editor');

        var file = fileName || rte.activeEditor();
        var path = '';
        switch(file){
            case 'styles.css':
                path = 'styles/';
            break;
            case 'scripts.js':
                path = 'scripts/';
            break;
        }

        $.ajax({
            url: '/readFile',
            type: 'POST',
            data: 'file='+path+'' + file + '&series='+series
        }).done(function(data){
            rte.editor.getSession().setMode("ace/mode/" + mode);
            rte.editor.getSession().setValue(data);

        })
        .fail(function(err){
            console.log('error: ' + err);
        })
        .always(function(){

        });
    },

    autoSave: function(){

        setTimeout(function () {

            var code = rte.editor.getSession().getValue();

            var file = rte.activeEditor();
            var path = '';
            switch(file){
                case 'styles.css':
                    path = 'styles/';
                break;
                case 'scripts.js':
                    path = 'scripts/';
                break;
            }

            $('.save-work').trigger('hover').html('<i class="icon-loader2"></i> Saving');

            $.ajax({
                url: '/save',
                type: 'POST',
                data: '&series='+series+'&file='+path+''+ file +'&code=' + code
            }).done(function(){

                rte.commitToGitHub();
                rte.autoSave();
                setTimeout(function(){

                    $('.save-work').html('Save');
                }, 2000);
            })
            .fail(function(err){
                console.log('error: ' + err);
            })
            .always(function(){

            });

        }, 20000);

    },

    saveData: function(){

        var code = rte.editor.getSession().getValue();

        var file = rte.activeEditor();
        var path = '';
            switch(file){
                case 'styles.css':
                    path = 'styles/';
                break;
                case 'scripts.js':
                    path = 'scripts/';
                break;

            }

        $.ajax({
            url: '/save',
            type: 'POST',
            data: '&series='+series+'&file='+path+''+ file +'&code=' + code
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
            rte.loader('stop');
        })
        .fail(function(){
            console.log('error');
        })
        .always(function(){
            console.log('complete commit');
        });
    },

    activeEditor: function(){

        var activeEditor = $('div.active-editor');
        var editorType = activeEditor.data('editor-type');
        var file = '';

        switch(editorType){
            case 'html':
                file = 'index.html';
                //$('.output').show();
            break;
            case 'js':
                file = 'scripts.js';
                //$('.output').hide();
            break;
            case 'css':
                file = 'styles.css';
                //$('.output').hide();
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
                'style': 'position: absolute',
                'class': textarea.attr('class'),
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

            rte.editor.setOptions({
                 maxLines: Infinity
            });

            rte.editor.getSession().on('change', function(e) {
                var text = rte.editor.getSession().getValue();
                rte.checkInput(rte.editor, $('div.active-editor').data('editor-type'), output, text);
            });


            rte.getFileData();

        });

    },



    checkInput: function(editor, lessonData, output, text){
        var lessonContainer = lessonData;

        if(Boolean(output) === true){
            var content = rte.editor.getSession().getValue();
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
