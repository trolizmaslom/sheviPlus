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
function acordeon(){
    $('.ttl').click(function () {
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $(this).next().stop().slideDown();
        }else{
            $(this).next().stop().slideUp();
        }
    });
}


$(document).ready(function(){
    shovDropdown();
    acordeon();
    if($('.search-block select').length>0)$('.search-block select').styler();
    if($('.search-zapchasti .titl select').length>0)$('.search-zapchasti .titl select').styler();
});

$(window).load(function(){

});

$(window).resize(function(){

});