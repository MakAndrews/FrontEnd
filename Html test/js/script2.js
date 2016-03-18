/*
var arr1 = [77, 'ab'];
*/
var student = {
	age: 33, //ключ может быть в ковычках - для нескольких слов
	name: 'Andrew'
}
/*
alert ('Age ' + student.age); //обращение к указанному ключу объекта	
var key;
if (key in student) {console.log(key);} else {console.log('Неа');}
*/
var keylist = Object.keys(student); //присвоить переменной список ключей указанного объекта
console.log(keylist);

for (var k in student) { //созюаем цикл и переменную при этом каждая итерация цикла присваивает очередной ключ объекта указанной для указанной переменной
	console.log('Ключ', k, 'Значение', student[k]);
}