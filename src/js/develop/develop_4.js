function mapInit(){

    var maps = $('.contacts .item-map-wrap');

    maps.each(function(i, Element) {
        var myLatlng = new google.maps.LatLng(mapObj[i].cordX,mapObj[i].cordY);
        var myOptions = {
            zoom: 13,
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





$(document).ready(function(){

});

$(window).load(function(){
    mapInit();
});

$(window).resize(function(){

});
