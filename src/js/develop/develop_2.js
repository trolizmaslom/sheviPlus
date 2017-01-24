
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
			var r = this.content.find('.title').text();
		    this.content.find('.clarify-product-title-name').text(r);
		     if($("html").hasClass("ios") || $("html").hasClass("android")){
		     	console.log("1");
                $("html").addClass("fancybox-lock");
                $("body").addClass("fancybox-lock");
                $(".global-wrapper").addClass("fancybox-lock");
                var windowHeight =$(window).height();
                $("body").height(windowHeight);
            }
		},
		afterClose: function(){
			if($("html").hasClass("ios") || $("html").hasClass("android")){
                $("html").removeClass("fancybox-lock");
                $("body").removeClass("fancybox-lock");
                $(".global-wrapper").removeClass("fancybox-lock");
                $("body").css("height","initial");
            }
        },
        onUpdate: function(){
        	 if($("html").hasClass("ios") || $("html").hasClass("android")){
             var windowHeight =$(window).height();
                $("body").height(windowHeight);
            }
        },
        helpers : {
            overlay : {
                locked: true//Вот этот параметр
            }
        }
	});
});

$(window).load(function(){

});

$(window).resize(function(){

});