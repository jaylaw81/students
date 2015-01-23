$(document).ready(function(){

    // on click of tab, remove the active-editor class from all and add the active-editor class to the one clicked
    $(document).on("click", ".tab", function() {
        $(".tabs .tab").removeClass("active-editor");
        $(this).addClass("active-editor");
        rte.getFileData();
    });

});
