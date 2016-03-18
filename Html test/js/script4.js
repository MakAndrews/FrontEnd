function bb() {
	alert('This is a bb function')
}

bb(); //вызов назначенной выше функции

var result;

function calculate(a, b) {
	var txt = ' text'; //эта переменная не находится в глобальном объекте Window - и видна только в рамках функции
	console.log (a + b + txt);
	console.log (arguments); //показывает какие аргументы функции названы
	var result = a + b;
	return result; //сохраняем значение для вывода за пределы функции !!! выполнение функции прекращается!!!
	}

result1 = calculate (2, 3); // указываем значения для функции - т.к. заранее предусматрели и назначаем новой переменной

console.log(result1);