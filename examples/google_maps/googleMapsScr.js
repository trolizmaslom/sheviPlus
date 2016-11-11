// <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>

function googleMap(mapWrap){
    function initialize() {
        var myLatlng = new google.maps.LatLng(cordX,cordY);
        var myOptions = {
            zoom: 16,
            center: myLatlng,
            disableDefaultUI: false, //без управляющих елементов
            mapTypeId: google.maps.MapTypeId.ROADMAP, // SATELLITE - снимки со спутника,
            zoomControlOptions: {
               position: google.maps.ControlPosition.LEFT_BOTTOM // позиция слева внизу для упр елементов
            }
        }
        var map = new google.maps.Map(document.getElementById(mapWrap), myOptions);


        var image = 'images/footer-contact-marker.png';   // иконка картинкой

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            icon: image //  иконка картинкой
        });

    }
    initialize();
}


$(document).ready(function(){
    //googleMap('mapInit'); //id
});

$(window).load(function(){

});