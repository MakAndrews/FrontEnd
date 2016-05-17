$(function(a) {

  $(function() {
    //***************************************Загрузка содержания теста в localStorage
  	const questions = {
  		q1: 'ПРОГРАММИРОВАНИЕ: Что такое HTML?',
  		a11: 'HyperText Murkup Language',
  		a12: 'Название секретной службы разведки',
  		a13: 'Вообще без понятия',
  		q2: 'ЗНАМЕНИТОСТИ: Кто по профессии Юрий Гагарин?',
  		a21: 'Сантехник',
  		a22: 'Космонавт',
  		a23: 'Так это ж мой сосед - он инженер!',
  		q3: 'МУЛЬТИПЛИКАЦИЯ: Мой сосед....(кто?)',
  		a31: 'Вася',
  		a32: 'Тоторо',
  		a33: 'У меня нет соседей',
  	};
  	localStorage.setItem('quest', JSON.stringify(questions));
  //***************************************Получение содержания теста из localStorage и использование шаблонизатора для наполнения
  	let questionsObj = JSON.parse(localStorage.getItem('quest'));

    //Тестируем ES6
    function functionName(a=100) {
      console.log(`просто ${a}`);
    };
    functionName();
    let arr1 = ['ff',28];
    for (let v of arr1){
      console.log(v);
    }
    //

  	let html = $('#main').html();
  	let content = tmpl(html, questionsObj);

  	$('body').append(content);
  //***************************************Корреляция изображения кнопок с выбором вариантов ответов
  	let checks = $('.check');
  	$(checks).click(function() {
  		$(checks).css('background','url(img/butt.gif) no-repeat');
  		$('input:radio:checked').parent().css('background','url(img/butt1.gif) no-repeat');
  	})
  //***************************************Аттестация ответов
  	let a;
  	let b;
  	let c;

  	$('#but').click(function(){
  		let checksRadio = $('input:radio');

  		if ($(checksRadio[0]).prop('checked')) {
  			a = 'Верно';
  		} else {
  			a = 'Не верно';
  		};

  		if ($(checksRadio[4]).prop('checked')) {
  			b = 'Верно';
  		} else {
  			b = 'Не верно';
  		};

  		if ($(checksRadio[7]).prop('checked')) {
  			c = 'Верно';
  		} else {
  			c = 'Не верно';
  		};
  	})
  //***************************************Модальное окно
  	$('#but').click(function(){
  		$('body').append('<div class=modalBg>');
  		$('.modalBg').append('<div class="modalWindow">');
  		$('.modalWindow').append('<div class="modalHeader">РЕЗУЛЬТАТЫ ТЕСТА</div>');
  		$('.modalWindow').append('<div class="main"><p>Ответ 1: '+a+'</p><p>Ответ 2: '+b+'</p><p>Ответ 3: '+c+'</p></div>');
  		$('.modalWindow').append('<input id="modalBut" type="button" value="Все понятно">');

  		$('#modalBut').click(function(){
  			$('body .modalBg').remove();
  			location.reload();
  		})

  		setTimeout(function() {
  			$('.modalWindow').css({
  				width: '400px',
  				height: '400px',
  			});
  		},1);
  		setTimeout(function() {
  			$('.modalHeader').css({
  				opacity: 1
  			});
  			$('.main').css({
  				opacity: 1
  			});
  			$('#modalBut').css({
  				opacity: 1
  			});
  		},1000);
  	});
  });


});
