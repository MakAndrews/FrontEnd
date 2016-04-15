$(function() {

var human = {			//объект для дальнейшей обработки
	name: 'Andrew',
	age: 33,
	gender: 'male'
};

console.log(human, human.name);

var humanJson = JSON.stringify(human);	//конвертация в строку для приведения в формат обмена данными JSON

console.log(humanJson);

localStorage.setItem('makandrews', humanJson);	//запись в локальное хранилищей указанной строки(только формат строки - для этого конвертируем JSON) с указанным названием переменной для сохранения и дальнейшего вызова

var storagedHuman = localStorage.getItem('makandrews');	//вызов из локального хранилища указанной переменной (заранее сохраненной) - естественной  в виде строки подлежащей преобразованию в объект

console.log(storagedHuman);

var convertedHuman = JSON.parse(storagedHuman);	//преобразование строки-объекта (была вызвана ранее) в объект JavaScript

console.log(convertedHuman);

// localStorage.clear();	//удалить локальное хранилище

});