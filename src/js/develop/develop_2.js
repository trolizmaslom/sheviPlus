
$(document).ready(function(){

	$('#player').click(function(){
		$(this).next('.play').css('display', 'none');
	});

	$('.play').click(function(){
		$(this).css('display', 'none');
	});

	$('.choise .content .list ul li a').fancybox({
		'beforeLoad': function(){
		    text = $(this.element).find('span:last-child').text();
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
		},
	});
});

$(window).load(function(){

});

$(window).resize(function(){

});