/*
var str = 'ghost'
console.log (str[0]); //� ������� ������� ������� ���������� ��� ��������� �������� - ��� � �������� - �� 0, ��
console.log (str.length); // ���������� ����� ����������
console.log (str.indexOf('st')); //�������� ������ - ���������� � 0 - � �������� ���������� ��������� �������� � ����������

str = str.replace ('g', 'G'); //��� ������������ ������ �������� � ������ - ������������� ��� � ������ ������!
console.log (str);

str = str.toLowerCase(); //������� � ������ �������
console.log (str);

console.log (str.substring(2)); //������� ������� � ������� ������ - ��� �������� ����� ������� - ���������
*/
/*
var str1 = '11';
var num = +str1; //���� �������� + ��������� ��������� ������ � ����� - � � �� ����� ��������� ��� ��� ������ ����������
console.log(typeof str1); //...� ������� ��������� ��� �������� - ����� ��� ���������
console.log(typeof num);
*/
var str2 = '22px';
var num2 = parseInt(str2); //�.�. �������� ���������� ������ ������� �� ������ �� ���� - ����� ��������� ����.�������� - ������� ������ ����� �� ������ ����
console.log(num2);
/*
var str3 = num2.toString; //��������� ����� ������� ������� ��� ����� ������������ ������ ������ - str3 = num2 + '';
console.log(typeof num2);
*/
var num3 = 12.54;
console.log(num3);

num4 = Math.floor(num3); //���������� � �������� �����... � �������� Math.ceil(num3); Math.round - ���������� ����������
console.log(num4);

var str3 = '88,33,99';
var arr = str3.split(','); //�������������� ������ � ������
console.log(arr);
console.log(typeof arr);

var str4 = arr.join('.'); //�������������� �������/������� � ������ - �� ����������� - � �������� ������� ����� ��� ��������� ��������
console.log(typeof str4);
console.log(str4);

var arr2 = arr.sort(); //���������� ��������� �������
console.log(arr);

arr.push('test'); //���������� �������� � ����� �������
console.log(arr);
arr.pop(); //�������� ���������� �������� �������
console.log(arr);