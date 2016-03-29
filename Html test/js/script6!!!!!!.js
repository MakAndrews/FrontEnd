	// var Link = document.querySelector('a');
/* console.log(aa);

//aa.onclick = function() {alert('aaa');};

function uff() {alert('http://www.google.com');}

aa.addEventListener('mouseover', uff);

//aa.removeEventListener('mouseover', uff);  //удаление обработчика событий

//aa.attachEventListener('onclick', uff);	//особенность подключения обработчика событий для IE8-

*/
/*
function f0 () {alert('Alert!');}

function f1 (event, el, drive) {					//элемент кроссбраузерности - если в Виндов - глобальном есть аттачИвент - т.е. это IE8- значит будет значение ТРУ и испольняем по нему, если нет - то как обычно
	if (window.attachEvent) {
		el.attachEvent('on' + event, drive);
	} else {
		el.addEventListener(event, drive)
	}
}

f1 ('click', Link, f0);
*/

function someFunction() {console.log('1sec'); //тоже самое... var someFunction = function {console.log('1sec');
}
var ST = setTimeout(someFunction, 1000); //установить в мс 1000 мс=1сек отсрочку события - функции - можно не присваивать переменной
clearTimeout(ST); //стереть номер события на котором закончилось повторение
//setInterval(someFunction, 1000); //установить интервал события - будет повторятся... аналогично удаляет и останавливает - clearInterval
