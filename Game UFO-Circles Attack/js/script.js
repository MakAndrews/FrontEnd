$(function() {
	
	var maxBots = prompt('Enter the number of Bots(>20 recommended)... And Good Luck!!!');
	var createBotRate = 1000;
	var moveInterval = 700;
	var myHits = 0;
	var attackInterval = 2000;

	var removed = 0;
	var hited = 0;
	$('body').append('<span class="character">');
	$('body .character').html('Hited: ' + hited + ' из ' + maxBots + '<p>Damages: '+ myHits +'</p>');
	
	$('body').append('<span class="wrapper">');
	$('body .wrapper').after('<span class="footer">UFO-Circles Attack</span>');
	
	function getRandom(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}
	var botSum = 0;
	
	function moving() {
		for (i=1; i<=botSum; i++) {
		var x = getRandom(-85,86);
		var y = getRandom(-85,86);
		$('.bot'+i).css({
				'left': parseInt($('.bot'+i).css('left'))+x+'px',
				'top': parseInt($('.bot'+i).css('top'))+y+'px'
		});
		if (parseInt($('.bot'+i).css('left')) <=15) {$('.bot'+i).remove(); removed++} else {
			if (parseInt($('.bot'+i).css('left')) >=535) {$('.bot'+i).remove(); removed++} else {
				if (parseInt($('.bot'+i).css('top')) <=15) {$('.bot'+i).remove(); removed++} else {
					if (parseInt($('.bot'+i).css('top')) >=535) {$('.bot'+i).remove(); removed++
				}
		}
		}
	}
	}}
	
	var gameOver = function() {
		if (removed == maxBots) {
			$('body').css({
				backgroundColor: 'yellow',
				opacity: 0.5
			});
			clearInterval(gameOVERtimer);
			clearInterval(attackTimer);
			$('body .wrapper').remove();
			$('body .footer').remove();
			$('body').append('<span class="gameOver">');
			$('body .gameOver').html('GAME OVER! <p>Your score is: '+(hited-myHits)+'</p>');
			$('body').append('<a href="index.html" class="playAgain">');
			$('body .playAgain').html('Play Again')
		} 
	}

	function attack() {
		var arr = [];
		arr = $('body div');
		var h = getRandom(0,arr.length);
		$(arr[h]).css({
			backgroundColor: 'red',
			width: '100px',
			height: '100px'
			});
		setTimeout(function(){
			$(arr[h]).css({
			backgroundColor: 'skyblue',
			width: '30px',
			height: '30px'
			});
		},300);
		for (i=0; i<=3; i++) {
		$('body .wrapper').css('outline','5px solid red');
		setTimeout(function(){
			$('body .wrapper').css('outline','1px solid gray');
		},500);
		};
		myHits++;
		$('body .character').html = '';
		$('body .character').html('Hited: ' + hited + ' из ' + maxBots + '<p>Damages: '+ myHits +'</p>');

	}
	function getBots() {
			++botSum;
			$('body .wrapper').append('<div class="bot'+botSum+'">');
			var x = getRandom(20,500);
			var y = getRandom(20,500);
			$('.bot'+botSum).css({
				position: 'absolute',
				'left': x+'px',
				'top': y+'px'
			});
				
				
			if (botSum == maxBots) {clearInterval(gb);}
			return $('.bot'+botSum).one('click',function() {
				this.remove();
				removed++;
				hited++; 
				$('body .character').html = '';
				$('body .character').html('Hited: ' + hited + ' из ' + maxBots + '<p>myHits: '+ myHits +'</p>');
				});
		}

	var gb;
	gb = setInterval(getBots, createBotRate);
		
	setInterval(moving, moveInterval);	
	
	var gameOVERtimer = setInterval(gameOver, attackInterval);
	var attackTimer = setInterval(attack, 5000);
	setTimeout(attackTimer, 5000);
});