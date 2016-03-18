/*
var str = 'ghost'
console.log (str[0]); //в консоль выводим элемент переменной под указанным индексом - как с массивом - от 0, до
console.log (str.length); // показываем длину переменной
console.log (str.indexOf('st')); //показать индекс - начинается с 0 - с которого начинается указанное значение в переменной

str = str.replace ('g', 'G'); //так производится замена символов в стоках - переназначить как в числах нельзя!
console.log (str);

str = str.toLowerCase(); //перевод в нижний регистр
console.log (str);

console.log (str.substring(2)); //вывести начиная с индекса строки - или интервал через запятую - подстрока
*/
/*
var str1 = '11';
var num = +str1; //этот оператор + позволяет перевести строку в число - и в мы здесь назначаем его для другой переменной
console.log(typeof str1); //...и выводим показывая тип элемента - видим что изменился
console.log(typeof num);
*/
var str2 = '22px';
var num2 = parseInt(str2); //т.к. значение переменной строки состоит не только из цифр - нужно применить спец.оператор - выделит только цифры до начала букв
console.log(num2);
/*
var str3 = num2.toString; //назначаем число обратно строкой или можно приплюсовать пустую строку - str3 = num2 + '';
console.log(typeof num2);
*/
var num3 = 12.54;
console.log(num3);

num4 = Math.floor(num3); //округление к меньшему числу... к большему Math.ceil(num3); Math.round - правильное округление
console.log(num4);

var str3 = '88,33,99';
var arr = str3.split(','); //преобразование строки в массив
console.log(arr);
console.log(typeof arr);

var str4 = arr.join('.'); //преобразование массива/объекта в строку - не обязательно - в ковычках указать через что разделить элементы
console.log(typeof str4);
console.log(str4);

var arr2 = arr.sort(); //сортировка элементов массива
console.log(arr);

arr.push('test'); //добавление элемента в конец массива
console.log(arr);
arr.pop(); //удаление последнего элемента массива
console.log(arr);