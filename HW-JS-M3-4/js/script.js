var ElemDivHead = document.createElement('div');
ElemDivHead.classList.add('HeadClass');
ElemDivHead.innerHTML = 'Тест по программированию';

var ElemDivBody = document.createElement('div');
ElemDivBody.classList.add('BodyClass');

var ElemOrderedList = document.createElement('ol');
ElemOrderedList.classList.add('ListClass');

document.body.appendChild(ElemDivHead);
document.body.appendChild(ElemDivBody);
ElemDivBody.appendChild(ElemOrderedList);

var k = 1;

for (i=1; i<=3; i++) {
	var List = document.createElement('li');
	List.innerHTML = 'Вопрос №' + i;
	ElemOrderedList.appendChild(List);
	for (j=1; j<=3; j++) {
		var CB = document.createElement('input');
		CB.setAttribute('type', 'checkbox');
		CB.setAttribute('id', 'checkbox' + k);
		CB.classList.add('BoxClass');
		var P = document.createElement('p');
		var Text1 = document.createElement('label');
		Text1.setAttribute('for', 'checkbox' + k);
		Text1.innerHTML = 'Вариант ответа №' + j;
		Text1.classList.add('ListClass2');
		List.appendChild(P);
		List.appendChild(CB);
		List.appendChild(Text1);
		k++;
	};
}

var Button1 = document.createElement('input');
Button1.setAttribute('type', 'submit');
Button1.setAttribute('value', 'Проверить мои результаты');
Button1.classList.add('ButtonClass');

document.body.appendChild(Button1);

//console.log(this.CB.getAttribute('checked'));