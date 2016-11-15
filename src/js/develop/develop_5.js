
/* where uses popup */

    function whereUsesPopup(){

        $('.uses-list-fancy').fancybox({
            wrapCSS:'fancy-list',
            padding: 0,
            margin:[20,0,20,0],
            width:'100%',
            minHeight:760,
            autoSize: false,
            fitToView:true,
            closeBtn:false
        });

        $(document).on('click', '.where-used-button', function(e){

            e.preventDefault();

            $.fancybox.close();

        });

    }

/* /where uses popup */


$(document).ready(function(){

    whereUsesPopup();

});

$(window).load(function(){

});

$(window).resize(function(){

});