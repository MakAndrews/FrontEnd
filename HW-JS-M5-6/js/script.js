var buttons = document.querySelectorAll('.buttonAct');
console.log(buttons);

var table = document.querySelectorAll('.counter span');
console.log(table);

var Int;

var s = '0' + 1;
var m = '0' + 1;
var h = '0' + 1;

function count() {
		if (table[2].innerHTML <= 8) {
			
			table[2].innerHTML = '0' + s;
		} else {
			table[2].innerHTML = s;
			if (table[2].innerHTML == 60) {
			s = '0' + 0;
			table[2].innerHTML = '0' + 0;
			if (table[1].innerHTML <= 8) {
				table[1].innerHTML = '0' + m;
			} else {
				table[1].innerHTML = m;
				if (table[1].innerHTML == 60) {
					m = '0' + 0;
					table[2].innerHTML = '0' + 0;
					if (table[0].innerHTML <= 8) {
					table[0].innerHTML = '0' + h;
					} else {
						table[0].innerHTML = h;
					}
					h++;
				} else {
					
				}
			}
			m++;
		} 
		}
		s++;
		

}

function whenClickA() {
	if (this.innerHTML === 'Пауза') {
		this.innerHTML = 'Старт';
		clearInterval(Int);
		clearInterval(IntMs);
	} else {
		Int = setInterval(count, 1000);
		IntMs = setInterval(ms_Count, 10);
		this.innerHTML = 'Пауза';
	}
}

function whenClickB() {
	table[0].innerHTML = '00';
	table[1].innerHTML = '00';
	table[2].innerHTML = '00';
	msDig.innerHTML = '00';
	s = 1;
	m = 1;
	h = 1;
	ms = 0;
	clearInterval(Int);
	clearInterval(IntMs);
	buttons[0].innerHTML = 'Старт';
}

buttons[0].addEventListener('click', whenClickA);
buttons[1].addEventListener('click', whenClickB);

var ms = 0;
var IntMs;
var msDig = document.querySelector('.msCount');
function ms_Count() {
	msDig.innerHTML = ms;
	ms++;
	if (ms == 100) {
		ms = 0;
	}
}