function shovDropdown() {
    $('.brand').click(function () {
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $('.brand').not($(this)).removeClass('active').next().stop().slideUp();
            $(this).next().stop().slideDown();
        }else{
            $(this).next().stop().slideUp();
        }

    });
}



$(document).ready(function(){
    shovDropdown();
    $('.search-block select').styler();
});

$(window).load(function(){

});

$(window).resize(function(){

});