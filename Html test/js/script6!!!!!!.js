	// var Link = document.querySelector('a');
/* console.log(aa);

//aa.onclick = function() {alert('aaa');};

function uff() {alert('http://www.google.com');}

aa.addEventListener('mouseover', uff);

//aa.removeEventListener('mouseover', uff);  //�������� ����������� �������

//aa.attachEventListener('onclick', uff);	//����������� ����������� ����������� ������� ��� IE8-

*/
/*
function f0 () {alert('Alert!');}

function f1 (event, el, drive) {					//������� ����������������� - ���� � ������ - ���������� ���� ���������� - �.�. ��� IE8- ������ ����� �������� ��� � ���������� �� ����, ���� ��� - �� ��� ������
	if (window.attachEvent) {
		el.attachEvent('on' + event, drive);
	} else {
		el.addEventListener(event, drive)
	}
}

f1 ('click', Link, f0);
*/

function someFunction() {console.log('1sec'); //���� �����... var someFunction = function {console.log('1sec');
}
var ST = setTimeout(someFunction, 1000); //���������� � �� 1000 ��=1��� �������� ������� - ������� - ����� �� ����������� ����������
clearTimeout(ST); //������� ����� ������� �� ������� ����������� ����������
//setInterval(someFunction, 1000); //���������� �������� ������� - ����� ����������... ���������� ������� � ������������� - clearInterval
