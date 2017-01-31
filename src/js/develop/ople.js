/**
 * Created by nickolaygotsliyk on 28.12.16.
 */

// function recaptchaCallback() {
//     console.log($(this));
//     $(this).closest('.form-field').find('.hiddenRecaptcha').attr('value', '1');
//     $(this).closest('.form-field').find('.hiddenRecaptcha').removeClass('error');
// };

var captcha;
var captcha1;
var captcha2;
var captcha3;
var captcha4;

var onloadCallback = function() {
    // Renders the HTML element with id 'example1' as a reCAPTCHA widget.
    // The id of the reCAPTCHA widget is assigned to 'widgetId1'.
    console.log("onLoad Recaptcha");

    captcha = grecaptcha.render('captcha', {
        'sitekey' : '6Ld3QRMUAAAAAKLpbnFnVNca5Nv3bWzSNp_yODVb',
        'callback' : function() {
            $('#captcha').find('.hiddenRecaptcha').attr('value', '1');
            $('#captcha').find('.hiddenRecaptcha').removeClass('error');
        }
    });
    captcha1 = grecaptcha.render('captcha1', {
        'sitekey' : '6Ld3QRMUAAAAAKLpbnFnVNca5Nv3bWzSNp_yODVb',
        'callback' : function() {
            $('#captcha1').find('.hiddenRecaptcha').attr('value', '1');
            $('#captcha1').find('.hiddenRecaptcha').removeClass('error');
        }
    });
    captcha2 = grecaptcha.render('captcha2', {
        'sitekey' : '6Ld3QRMUAAAAAKLpbnFnVNca5Nv3bWzSNp_yODVb',
        'callback' : function() {
            $('#captcha2').find('.hiddenRecaptcha').attr('value', '1');
            $('#captcha2').find('.hiddenRecaptcha').removeClass('error');
        }
    });
    captcha3 = grecaptcha.render('captcha3', {
        'sitekey' : '6Ld3QRMUAAAAAKLpbnFnVNca5Nv3bWzSNp_yODVb',
        'callback' : function() {
            $('#captcha3').find('.hiddenRecaptcha').attr('value', '1');
            $('#captcha3').find('.hiddenRecaptcha').removeClass('error');
        }
    });
    captcha4 = grecaptcha.render('captcha4', {
        'sitekey' : '6Ld3QRMUAAAAAKLpbnFnVNca5Nv3bWzSNp_yODVb',
        'callback' : function() {
            $('#captcha4').find('.hiddenRecaptcha').attr('value', '1');
            $('#captcha4').find('.hiddenRecaptcha').removeClass('error');
        }
    });

    $('#captcha').append('<input type="text" class="hiddenRecaptcha required" name="hiddenRecaptcha" id="hiddenRecaptcha" required="required">');
    $('#captcha1').append('<input type="text" class="hiddenRecaptcha required" name="hiddenRecaptcha" id="hiddenRecaptcha1" required="required">');
    $('#captcha2').append('<input type="text" class="hiddenRecaptcha required" name="hiddenRecaptcha" id="hiddenRecaptcha2" required="required">');
    $('#captcha3').append('<input type="text" class="hiddenRecaptcha required" name="hiddenRecaptcha" id="hiddenRecaptcha3" required="required">');
    $('#captcha4').append('<input type="text" class="hiddenRecaptcha required" name="hiddenRecaptcha" id="hiddenRecaptcha4" required="required">');
};


function tabNav() {
    $('.tab-but').click(function (e) {
        e.preventDefault;
        if(!$(this).hasClass('active')){
            $('.tab-but').removeClass('active');
            $('.one-tab').removeClass('active');
            $(this).addClass('active');
            var i = $(this).index();
            $('.one-tab').eq(i).addClass('active');
        }
    });
}


function fancyboxGallery() {
    $('.gallery-link').fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        autoResize: true,
        wrapCSS: 'fancyboxGalleryWrap',
        'closeBtn': true,
        fitToView: true,
        padding: '0'
    })
}

var currentPosition=null;
var curElement = null;

function fancyboxServices() {
    $('.servicePopupLink').fancybox({
        'beforeLoad': function(){            
            text = $(this.element).find('p').text();
            if($("html").hasClass("ios") || $("html").hasClass("android")){
                curElement = $(this.element);
                currentPosition = $(this.element).offset().top;
            }            
        },
        openEffect: 'fade',
        closeEffect: 'fade',
        autoResize: true,
        wrapCSS: 'servicesPoupWrap',
        'closeBtn': true,
        fitToView: true,
        padding: '0',
        afterLoad: function(){
            this.content.find('h3').text(text);
            if($("html").hasClass("ios") || $("html").hasClass("android")){
                console.log(1);
                $("html").addClass("fancybox-lock");
                $("body").addClass("fancybox-lock");
                $(".global-wrapper").addClass("fancybox-lock");
                var windowHeight =$(window).height();
                $(".global-wrapper").height(windowHeight); 
            }
        },
        afterClose: function(){
             if($("html").hasClass("ios") || $("html").hasClass("android")){
                $("html").removeClass("fancybox-lock");
                $("body").removeClass("fancybox-lock");
                $(".global-wrapper").removeClass("fancybox-lock");
                $(".global-wrapper").css("height","initial");                
                $(document).scrollTop(currentPosition);                
            }
            $('#captcha1').empty();

        },
        onUpdate: function(){
            if($("html").hasClass("ios") || $("html").hasClass("android")){
                var windowHeight =$(window).height();
                $(".global-wrapper").height(windowHeight);
            }
        },
        helpers : {
            overlay : {
                locked: true//Вот этот параметр
            }
        }
    })
}
function fancyTop() {
    $('.opel-page .dropdown a').fancybox({
        'beforeLoad': function(){

            text = $(this.element).find('span').text();
            if($("html").hasClass("ios") || $("html").hasClass("android")){
                curElement = $(this.element);
                currentPosition = $(this.element).offset().top;
            }  
        },
        openEffect : 'fade',
        closeEffect : 'fade',
        autoSize:true,
        width : 1030,
        height : 835,
        maxWidth : '100%',
        wrapCSS:'wrap-marka',
        'closeBtn' : true,
        fitToView:true,
        autoCenter: true,
        padding:'0',
        'afterLoad': function(){
            this.content.find('.title span').text(text);
            var r = this.content.find('.title').text();
            this.content.find('.clarify-product-title-name').text(r);
            console.log(r)
        },
        afterClose: function(){
             if($("html").hasClass("ios") || $("html").hasClass("android")){
                $("html").removeClass("fancybox-lock");
                $("body").removeClass("fancybox-lock");
                $(".global-wrapper").removeClass("fancybox-lock");
                $(".global-wrapper").css("height","initial");
                
                $(document).scrollTop(currentPosition);                
            }
            $('#captcha1').empty();

        },
        onUpdate: function(){
            if($("html").hasClass("ios") || $("html").hasClass("android")){
                var windowHeight =$(window).height();
                $(".global-wrapper").height(windowHeight);
            }
        },
        helpers : {
            overlay : {
                locked: true//Вот этот параметр
            }
        }
    });
}
function mapInit2() {
    if ($('.contactses .maper').length > 0) {
        var maps = $('.contactses .maper');
        var grayStyles = [
            {
                featureType: "all",
                stylers: [
                    {saturation: -90},
                    {lightness: 0}
                ]
            }
        ];
        maps.each(function (i, Element) {
            if($(this).hasClass('pit')){
                var center = new google.maps.LatLng(mapPit[0].cordX, mapPit[0].cordY);
            }
            if($(this).hasClass('mosc')){
                var center = new google.maps.LatLng(mapMosc[0].cordX, mapMosc[0].cordY);
            }
            var myOptions = {
                zoom: 10,
                styles: grayStyles,
                center: center,
                disableDefaultUI: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                zoomControl:true,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.LEFT_BOTTOM
                }
            };
            var map = new google.maps.Map(Element, myOptions);
            if($(this).hasClass('pit')){
               var arr = mapPit;
            }
            if($(this).hasClass('mosc')){
                var arr = mapMosc;
            }
            for (var j = 0; j < arr.length; j++) {
                var myLatlng = new google.maps.LatLng(arr[j].cordX, arr[j].cordY);;
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    icon: mapMarker
                });
            }


        });
    }
}
function onChanSel() {//data-jqfs-class
    if($('#brand')){
        $('#brand').on('change', function () {
            var i=$(this).val();
            if(i=='opel'){
                $('#model-styler li[data-jqfs-class="ch-m"]').css('display','none');
                $('#model-styler li[data-jqfs-class="op-m"]').css('display','block');
            }else if(i=='chevrolet'){
                $('#model-styler li[data-jqfs-class="ch-m"]').css('display','block');
                $('#model-styler li[data-jqfs-class="op-m"]').css('display','none');
            }else{
                $('#model-styler li[data-jqfs-class="ch-m"]').css('display','block');
                $('#model-styler li[data-jqfs-class="op-m"]').css('display','block');
            }
        });
    }
    if($('#brand2')){
        $('#brand2').on('change', function () {
            
            var i=$(this).val();
            if(i=='opel'){
                $('#model2 .ch-m').css('display','none');
                $('#model2 .op-m').css('display','block');
            }else if(i=='chevrolet'){
                $('#model2 .ch-m').css('display','block');
                $('#model2 .op-m').css('display','none');
            }else{
                $('#model2 .ch-m').css('display','block');
                $('#model2 .op-m').css('display','block');
            }
        });
    }
}
function goTo2(){

    $('.mainhref').click(function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        var target = $(href).offset().top;
        $(scroller).animate({scrollTop:target},500);
    });
    $('.nav a').click(function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        var target = $(href).offset().top;
        if($(this).attr('data-lock') != undefined){
            var tt = $(this).attr('data-lock');
            if (tt == 'srv'){$('.srv_click').click();}
            if (tt == 'zap'){$('.zap_click').click();}
            if (tt == 'raz'){$('.raz_click').click();}
        }
        $(scroller).animate({scrollTop:target},500);
        $('.opel-page .menu-block').stop().slideUp();
        $('.opel-page .header .menu').removeClass('active');
    });
}

function showHiddenInput(){    
    if($("#model2")){
        $(".custom-model").slideUp();
        $($("#model2")).on("change",function(){
             var i=$(this).val();
            if(i=="custom-model"){
                $(".custom-model").slideDown();
            }else{
                 $(".custom-model").slideUp();
            }
        })
    }
}
$(document).ready(function(){
    goTo2();
    onChanSel();
   tabNav();
    fancyTop();
   fancyboxGallery();
    mapInit2();
    fancyboxServices();
    $(document).on('click touchstart',function (event){
            var div =  $('.opel-page .dropdown');
            var div2 =  $('.brand');
            if (!div.is(event.target) && div.has(event.target).length === 0 && !div2.is(event.target) && div2.has(event.target).length === 0){
                div.slideUp();
            }

    });
    showHiddenInput();
    $("#services-popup").on("click", function(event){
       
        event.stopPropagation();
        console.log(event.target);
    })

    $('#services-popup input').attr({
        "ondrag":"return false",
        "ondragdrop":"return false",
        "ondragstart":"return false"
    });

     $('#services-popup input').on("touchmove", function(){
        console.log("2");  
        return false;     
     })
});

$(window).resize(function(){
});