$(function() { 	

var fields = $('.text');
var tips = $('.tip');
 
$(fields[0]).focus (function (event) {
	$(tips[0]).css({display: 'inline-block',opacity: '0.1'});
	$(tips[1]).css('display', 'none');
	$(tips[2]).css('display', 'none');
}); 
$(fields[0]).focus (function (event) {$(tips[0]).animate({opacity: 1}, 1000)
});
//=============
$(fields[1]).focus (function (event) {
	$(tips[1]).css({display: 'inline-block',opacity: '0.1'});
	$(tips[0]).css('display', 'none');
	$(tips[2]).css('display', 'none');
}); 
$(fields[1]).focus (function (event) {$(tips[1]).animate({opacity: 1}, 1000)
});
//=============
$(fields[2]).focus (function (event) {
	$(tips[2]).css({display: 'inline-block',opacity: '0.1'});
	$(tips[0]).css('display', 'none');
	$(tips[1]).css('display', 'none');
}); 
$(fields[2]).focus (function (event) {$(tips[2]).animate({opacity: 1}, 1000)
});
//=============
$('body').hover (function() {
	$(tips[0]).css('display', 'none');
	$(tips[1]).css('display', 'none');
	$(tips[2]).css('display', 'none');
});
$('span').hover (function() {
	$(tips[0]).css('display', 'none');
	$(tips[1]).css('display', 'none');
	$(tips[2]).css('display', 'none');
});
//=============
$('.button').click (function() {
	$(tips[0]).css({display: 'inline-block',opacity: '0.1'});
	$(tips[0]).animate({opacity: 1}, 1000);
	$(tips[1]).css({display: 'inline-block',opacity: '0.1'});
	$(tips[1]).animate({opacity: 1}, 1000);
	$(tips[2]).css({display: 'inline-block',opacity: '0.1'});
	$(tips[2]).animate({opacity: 1}, 1000);
});
});