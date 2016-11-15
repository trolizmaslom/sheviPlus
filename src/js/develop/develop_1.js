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
function focusPokus() {
    $('.search-button input').focus(function (e) {
        $(this).closest('.search-button').addClass('focus');
        e.preventDefault();
    })
}
function mobileHeader(){
    $('.header .catlog').click(function () {
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $('.srch-block').stop().slideUp();
            $('.menu-block').stop().slideUp();
            $('.header .menu').removeClass('active');
            $('.header .search').removeClass('active');
            $('.catlog-block').stop().slideDown();
        }else{
            $('.catlog-block').stop().slideUp();
        }
    });
    $('.header .search').click(function () {
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $('.menu-block').stop().slideUp();
            $('.catlog-block').stop().slideUp();
            $('.header .menu').removeClass('active');
            $('.header .catlog').removeClass('active');
            $('.srch-block').stop().slideDown();
        }else{
            $('.srch-block').stop().slideUp();
        }
    });
    $('.srch-block .close-this').click(function () {
        $('.srch-block').stop().slideUp();
        $('.header .search').removeClass('active');
    });
    $('.header .menu').click(function () {
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $('.srch-block').stop().slideUp();
            $('.catlog-block').stop().slideUp();
            $('.header .catlog').removeClass('active');
            $('.header .search').removeClass('active');
            $('.menu-block').stop().slideDown();
        }else{
            $('.menu-block').stop().slideUp();
        }
    });
    $('.menu-block .close-this').click(function () {
        $('.menu-block').stop().slideUp();
        $('.header .menu').removeClass('active');
    });
}
function tabusStart() {
    $('.search-zapchasti .tabson').click(function () {
        if(!$(this).hasClass('active')){

            $('.search-zapchasti .tabson').removeClass('active');
            $('.search-zapchasti .first').removeClass('active');
            $('.search-zapchasti .second').removeClass('active');
            $(this).addClass('active');
            if($(this).hasClass('srv')){$('.search-zapchasti .second').addClass('active');}
            if($(this).hasClass('zap')){$('.search-zapchasti .first').addClass('active');}

        }else{return;}

    });
}
$(document).ready(function(){
    shovDropdown();
    acordeon();
    focusPokus();
    mobileHeader();
    tabusStart();
    if($('.search-block select').length>0)$('.search-block select').styler();
    if($('.search-zapchasti .titl select').length>0)$('.search-zapchasti .titl select').styler();
});

$(window).load(function(){

});

$(window).resize(function(){

});