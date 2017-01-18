/**
 * Created by nickolaygotsliyk on 28.12.16.
 */
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

function fancyboxServices() {
    $('.servicePopupLink').fancybox({
        'beforeLoad': function(){
            text = $(this.element).find('p').text();
        },
        openEffect: 'fade',
        closeEffect: 'fade',
        autoResize: true,
        wrapCSS: 'servicesPoupWrap',
        'closeBtn': true,
        fitToView: true,
        padding: '0',
         'afterLoad': function(){
            this.content.find('h3').text(text);
        }
    })
}
function fancyTop() {
    $('.opel-page .dropdown a').fancybox({
        'beforeLoad': function(){
            text = $(this.element).find('span').text();
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
                zoom: 13,
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
    $('header .nav a').click(function(e){
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
});