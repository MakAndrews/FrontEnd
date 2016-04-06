(function( $ ) {
	$.fn.myCarousel = function() {

	this.css({
		border: '1px solid gray',
		width: '300px',
		height: '210px',
		overflow: 'hidden',
		'float': 'left',
		backgroundColor: '#eee',
		margin: '10px',
		fontFamily: 'Tahoma',
		fontSize: '12px'
	})

	this.find('ul').css({
	width: '10000px',
	})
	
	var arrLi = this.find('li');
	
	arrLi.css({
		float: 'left',
		listStyle: 'none'
		});
	arrLi.find('p').css('text-align','center');
	
	var UL = this.find('ul');
	UL.css({
		position:'relative',
		});

	var currentLeft = 0;
	var sumLength = (arrLi.length-1)*(-300);
	
	var goOn = function() {
		if (currentLeft === sumLength) {
			currentLeft = 0; 
			UL.animate({left: currentLeft+'px'},1000)} else {
		currentLeft -=300;
		UL.animate({left: currentLeft+'px'},1000)
		}
		}
	
	UL.on('click', goOn); //можно отключить - прокрутка по нажатию на картинку
	setInterval(goOn,4000);	//можно отключить - автоскролл
	
	this.before('<p id="Prev">Prev.</p>');
	this.after('<p id="Next">Next</p>');
	
	var prevBut = this.parent().find('#Prev');
	var nextBut = this.parent().find('#Next');

	prevBut.css({
			margin: '100px 0 0 10px',
			'float': 'left',
			cursor: 'pointer',
			padding: '5px',
			border: '1px solid gray',
			backgroundColor: '#eee',
			borderRadius: '20px 0 0 20px',
			fontFamily: 'Tahoma',
			fontSize: '11px'
	})
	nextBut.css({
			margin: '100px 10px 0 0',
			'float': 'left',
			cursor: 'pointer',
			padding: '5px',
			border: '1px solid gray',
			backgroundColor: '#eee',
			borderRadius: '0 20px 20px 0',
			fontFamily: 'Tahoma',
			fontSize: '11px'
	})	
	
	prevBut.on('click', function(){
		if (currentLeft == 0) {} else {
		currentLeft +=300;
		UL.animate({left: currentLeft+'px'},1000)
		}
	})
	
	nextBut.on('click', function() {
		if (currentLeft === sumLength) {
			currentLeft = 0; 
			UL.animate({left: currentLeft+'px'},1000)} else {
		currentLeft -=300;
		UL.animate({left: currentLeft+'px'},1000)
		}
		})
	
	
	};
})(jQuery);