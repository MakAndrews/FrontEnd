function bb() {
	alert('This is a bb function')
}

bb(); //����� ����������� ���� �������

var result;

function calculate(a, b) {
	var txt = ' text'; //��� ���������� �� ��������� � ���������� ������� Window - � ����� ������ � ������ �������
	console.log (a + b + txt);
	console.log (arguments); //���������� ����� ��������� ������� �������
	var result = a + b;
	return result; //��������� �������� ��� ������ �� ������� ������� !!! ���������� ������� ������������!!!
	}

result1 = calculate (2, 3); // ��������� �������� ��� ������� - �.�. ������� ������������� � ��������� ����� ����������

console.log(result1);