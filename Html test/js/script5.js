var element = document.querySelectorAll('.menu-item a'); // ����������� ���������� ��������� �������� 

console.log (element[0], element[0].innerHTML); //��������� ����� �������� �� ���������� ������� - ���.� 0 - � ���������� ���������� �������� � HTML

element[0].innerHTML = 'this is text <style> a:hover {color: yellow;}</style>'; //�������� ���������� HTML - ��������� ����� � css �������� ��� ������
console.log (element[0]);

console.log (element[0].getAttribute('href')); //����� � �������� ��������� �������� ������

element[0].setAttribute('href', 'http://www.google.com'); //������ ��������� - ��������� �������� ��������� � ����� �������� ��� ���������

var element1 = document.querySelector('input');

element1.setAttribute('value', 'Context chenge!'); // ������ ����������� ������ - � �������� �������� ����������� ���� �������� ��������� querySelectorAll - �.�. ��� - ������������ ��������� ���������

console.log(element1.className); //�������� ���������� ������

element1.className = element1.className + ' some-class'; //�������� ���������� � ��� ������ ���������� �������� - ����� ������ �������� ��� ���� �����

console.log(element1.classList); //�������� ������ ������� - � ���� �������

element1.classList.add('class-else'); //����� �������� ��� ����� ����������� ������� � �� ������ ��� ����� � ��� ������ - ��� �� ����� ������� - element1.classList.remove('class-else'); 

console.log(element1.classList);

element1.style.backgroundColor = 'green'; //��������� ������ ����� ��������� - � ������� �� ��� - ������� ����� ��������� - ��� �������, �� � ������� �����
element1.style.padding = '5px';
element1.style.color = 'red';
element1.style.fontSize = '10px';
//����� � ������� ������ ����� css �����

//============================================== �������� ��������� � ������� � ��������.....============

var element77 =document.createElement('div'); //������� ������� � ����������� ��� ���������� (���� ��� �� �� ���������� �����)
element77.classList.add('class1');
element77.innerHTML = ('Some generated text'); //����������� ���������� �������� (����� ����������� ����������) ����� � ����������

var NM = document.querySelectorAll('a'); //��������� ���������� ������ �� ����� �������� - ���� �� ������ - �� ����� ��������� �����
NM[0].classList.add('new-class'); //�������� ������� �������� ������� �.�. ������ ����� �����

//NM[0].appendChild(element77); //�������� ������ ������ �������� �������, ��������� ����� � ������� - ����������� ����� ���������� ��������� ��������

NM[0].insertBefore(element77 ,NM[0].children[0]); //���� ����������� �������, �� ��������� ������� � ����� ����� ��������� ���������

var Rem = document.querySelector('ul'); //������� � ����������� ���������� ����

var Rem1 = Rem.querySelectorAll('li'); //� ����� ������� ��� �������� ������ � ����������� ������� 

//Rem.removeChild(Rem1[0]); //������� ������� ������� � ������� ���

Rem.replaceChild(element77, Rem1[1]); //������ ��������� �������� - �������: ����� ��������� � ����� �� ��������� ��������

