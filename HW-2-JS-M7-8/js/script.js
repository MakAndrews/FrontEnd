$(function() { 	
var buttons = $('.B');
var context = $('.C');

function removeVision() {
	for (i=0; i<buttons.length; i++) {
	$(context[i]).addClass('content');
	$(context[i]).removeClass('contentActive');
	$(buttons[i]).removeClass('buttonActive');
	};
};

$(buttons[0]).click(function(event) {
	removeVision();
	$(context[0]).addClass('contentActive');
	$(buttons[0]).addClass('buttonActive');
});
$(buttons[1]).click(function(event) {
	removeVision();
	$(context[1]).addClass('contentActive');
	$(buttons[1]).addClass('buttonActive');
	$(buttons[0]).addClass('button');
});
$(buttons[2]).click(function(event) {
	removeVision();
	$(context[2]).addClass('contentActive');
	$(buttons[2]).addClass('buttonActive');
	$(buttons[0]).addClass('button');
});

});