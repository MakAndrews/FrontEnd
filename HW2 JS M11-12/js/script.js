$(function() {

	var name = prompt('Enter your name');
	var who = prompt('Who are you? (what do you do?)');
	var url = prompt('URL of your avatar');
	if (url=='') {url = 'img/pantera-1-big.jpg'};
	
	var html = $('#test').html();
	var data = {
		name: name,
		who: who,
		pic: url
	};
//**********	
	var html2 = $('#test2').html();
	
	var datas = [
		{
		title: 'ЗАГОЛОВОК 1',
		article: 'В этом тексте находится всякая всячина для заполнения пустого пространства для тестирования разного кода'
		},
		{
		title: 'ЗАГОЛОВОК 2',
		article: 'В этом тексте находится всякая всячина для заполнения пустого пространства для тестирования разного кода. В этом тексте находится всякая всячина для заполнения пустого пространства для тестирования разного кода'
		}
	];
//**********
	var content = tmpl(html, data);
	var content1 = tmpl (html2, {data1: datas}); //шаблонизатор воспринимает только объект, а не массив
	
	$('body div').append(content, content1);

});