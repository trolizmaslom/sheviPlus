// // Inject YouTube API script
// var tag = document.createElement('script');
// tag.src = "//www.youtube.com/player_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// var player;

// function onYouTubePlayerAPIReady() {
//   player = new YT.Player('player', {
//     events: {
//       'onReady': onPlayerReady
//     }
//   });
// }

// function onPlayerReady(event) {
//   var playButton = $(".play");
//   playButton.addEventListener("click", function() {
//     player.playVideo();
//   });
// }

$(document).ready(function(){
	// onYouTubePlayerAPIReady();

	// $('#player').click(function(){
	// 	$(this).next('.play').css('display', 'none');
	// });

	// $('.play').click(function(){
	// 	$(this).css('display', 'none');
	// });
});

$(window).load(function(){

});

$(window).resize(function(){

});