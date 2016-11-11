function mapInit() {
    if ($('.contacts .item-map-wrap').length > 0) {
        var maps = $('.contacts .item-map-wrap');
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
            var myLatlng = new google.maps.LatLng(mapObj[i].cordX, mapObj[i].cordY);
            var myOptions = {
                zoom: 13,
                styles: grayStyles,
                center: myLatlng,
                disableDefaultUI: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.LEFT_BOTTOM
                }
            };
            var map = new google.maps.Map(Element, myOptions);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                icon: mapMarker
            });

        });
    }
}

function productSlider() {
    $('.product-item .slider-big-wrap').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product-item .slider-mini-wrap'
    });
    $('.product-item .slider-mini-wrap').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.product-item .slider-big-wrap',
        dots: false,
        verticalSwiping: true,
        vertical: true,
        focusOnSelect: true
    });
}

function showProductText() {

    if($('.desc-text-hidden').height() < 120){
        $('.desc-text-button').remove();
        $('.desc-text').addClass('no-hidden');
    }

    $('.desc-text-button span').click(function(){
        var height = $('.desc-text-hidden').height();
        $('.desc-text-show').height(height);
        $(this).slideUp().remove();
    });
}

function popApShow(){

    var popap;

    function goFancy() {
        $.fancybox.open({
            content:popap,
            width: "100%",
            autoSize: true,
            autoResize:true,
            wrapCSS:'fancybox-product',
            'closeBtn' : false,
            beforeShow:function(){
                goSlider()
            },
            afterClose: function(){
                $('.popup-hidden').removeAttr('style');
            },
            afterClose: function() {
                if ($('.fancy-product-wrap .slider-big-wrap').hasClass('slick-initialized')) {
                    $('.fancy-product-wrap .slider-big-wrap').slick("unslick");
                    $('.fancy-product-wrap .slider-mini-wrap').slick("unslick");
                }
            }
        });
    }
    $(document).on('click', '.item-catalogius', function (event) {
        event.preventDefault();
        popap = $(this).find('.popup-hidden').clone();
        goFancy();
    });

    function goSlider() {
        $('.fancy-product-wrap .slider-big-wrap').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.fancy-product-wrap .slider-mini-wrap'
        });
        $('.fancy-product-wrap .slider-mini-wrap').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.fancy-product-wrap .slider-big-wrap',
            dots: false,
            verticalSwiping: true,
            vertical: true,
            focusOnSelect: true
        });
    }

    $(document).on('click','.product-close-popup',function(event){
        event.preventDefault();
        $.fancybox.close();
    })
}

$(document).ready(function () {
    productSlider();
    showProductText();
    showProductText();
    popApShow()
});

$(window).load(function () {
    mapInit();
});

$(window).resize(function () {

});
