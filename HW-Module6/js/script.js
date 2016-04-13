$(function() {
	var list = $('.ulMenu li a');
	for (i=0; i<list.length; i++) {
		$(list[i]).focus(function(event) {
				$(list).parent().css('list-style-image','url(img/menu-circle.gif)');
				$(this).parent().css('list-style-image','url(img/menu-circle1.gif)');
		});
	};
});