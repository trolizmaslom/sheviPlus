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

$(document).ready(function(){
   tabNav();
   fancyboxGallery();
    mapInit2();

});