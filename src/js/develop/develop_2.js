
$(document).ready(function(){

	$('#player').click(function(){
		$(this).next('.play').css('display', 'none');
	});

	$('.play').click(function(){
		$(this).css('display', 'none');
	});
});

$(window).load(function(){

});

$(window).resize(function(){

});