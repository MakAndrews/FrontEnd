var ElemDivHead = document.createElement('div');
ElemDivHead.classList.add('HeadClass');
ElemDivHead.innerHTML = 'Тест по программированию';

var ElemDivBody = document.createElement('div');
ElemDivBody.classList.add('BodyClass');

var ElemOrderedList = document.createElement('ol');
ElemOrderedList.classList.add('ListClass');

var List = document.createElement('li');
var i = 1;
List.innerHTML = 'Вопрос №' + i;

var CB = document.createElement('input');
CB.setAttribute('type', 'checkbox');
CB.setAttribute('value', 'Checkbox_');

var Text = document.createElement('span');
Text.innerHTML = 'Вариант ответа №' + i, '<br>';
Text.classList.add('ListClass');

var P = document.createElement('p');

var Button1 = document.createElement('input');
Button1.setAttribute('type', 'submit');
Button1.setAttribute('value', 'Отправить ответы');
Button1.classList.add('ButtonClass');

//

document.body.appendChild(ElemDivHead);
document.body.appendChild(ElemDivBody);
ElemDivBody.appendChild(ElemOrderedList);
List.appendChild(P);
//ElemOrderedList.appendChild(List)

do {ElemOrderedList.appendChild(List); i++;} while (i<=3);
i=1;
do {List.appendChild(CB); i++;} while (i<=3);

List.appendChild(Text);

document.body.appendChild(Button1);