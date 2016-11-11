function mapInit(){

    var maps = $('.contacts .item-map-wrap');
    var grayStyles = [
        {
            featureType: "all",
            stylers: [
                { saturation: -90 },
                { lightness: 0 }
            ]
        }
    ];

    maps.each(function(i, Element) {
        var myLatlng = new google.maps.LatLng(mapObj[i].cordX,mapObj[i].cordY);
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





$(document).ready(function(){

});

$(window).load(function(){
    mapInit();
});

$(window).resize(function(){

});
