var aa = document.querySelector('a');
console.log(aa);

//aa.onclick = function() {alert('aaa');};

function uff() {alert('http://www.google.com');
}

aa.addEventListener('mouseover', uff);

//aa.removeEventListener('mouseover', uff);  //�������� ����������� �������

//aa.attachEventListener('onclick', uff);	//����������� ����������� ����������� ������� ��� IE8-