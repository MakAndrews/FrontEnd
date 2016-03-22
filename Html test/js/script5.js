var element = document.querySelectorAll('.menu-item a'); // присваиваем переменной выбранные элементы 

console.log (element[0], element[0].innerHTML); //показыаем часть элемента по указанному индексу - нач.с 0 - и показываем содержимое элемента в HTML

element[0].innerHTML = 'this is text <style> a:hover {color: yellow;}</style>'; //изменяем содержимое HTML - добавляем текст и css свойство для ссылок
console.log (element[0]);

console.log (element[0].getAttribute('href')); //взять и показать указанный аттрибут ссылки

element[0].setAttribute('href', 'http://www.google.com'); //замена аттрибута - указываем название аттрибута и какое значение ему присвоить

var element1 = document.querySelector('input');

element1.setAttribute('value', 'Context chenge!'); // замена содержимого кнопки - в названии элемента обязательно если элементу присвоено querySelectorAll - т.к. АЛЛ - предполагает несколько элементов

console.log(element1.className); //показать содержимое класса

element1.className = element1.className + ' some-class'; //добавили содержание в имя класса указанного элемента - через пробед добавлен еще один класс

console.log(element1.classList); //показать список классов - в виде массива

element1.classList.add('class-else'); //можно добавить еще класс специальным образом а не просто как текст в имя класса - так же можно удалить - element1.classList.remove('class-else'); 

console.log(element1.classList);

element1.style.backgroundColor = 'green'; //изменение стилей через яваскрипт - в отличие от цсс - пишется через КэмэлКэйс - без пробела, но с большой буквы
element1.style.padding = '5px';
element1.style.color = 'red';
element1.style.fontSize = '10px';
//лучше и удобней делать через css стили

//============================================== создание элементов и вставка в страницу.....============

var element77 =document.createElement('div'); //создаем элемент и присваиваем его переменной (пока что он не появляется нигде)
element77.classList.add('class1');
element77.innerHTML = ('Some generated text'); //присваеваем созданному элементу (через присвоенную переменную) класс и содержание

var NM = document.querySelectorAll('a'); //присвоили переменной массив со всеми ссылками - если бы классы - то точку поставить перед
NM[0].classList.add('new-class'); //добавили первому элементу массива т.е. ссылке новый класс

//NM[0].appendChild(element77); //добавили первой ссылке дочерний элемент, созданный ранее в скрипте - вставляется после указанного ирндексом элемента

NM[0].insertBefore(element77 ,NM[0].children[0]); //тоже добавляется элемент, но указываем элемент и перед каким элементом вставлять

var Rem = document.querySelector('ul'); //находим и присваиваем переменной лист

var Rem1 = Rem.querySelectorAll('li'); //в листе находим все элементы списка и присваиваем массиву 

//Rem.removeChild(Rem1[0]); //Находим элемент массива и удаляем его

Rem.replaceChild(element77, Rem1[1]); //Замена дочернего элемента - указать: какой добавляем и какой из имеющихся заменяем

