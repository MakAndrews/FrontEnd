//console.log(jQuery);
//console.log($);

// $(document).ready(function(){ - ��� ����� ���� ������ ������
$(function() { 					//������ �������� ���
	var $el = $('div')[0]; //document.querySelectorAll('div'); - ���� ����� ... [0] - ��������� ����� ����� ������ ������ ��������� ������� - ���� �� ��������� - ����� ��� ����!!! - ������!
	console.log($el);		//�������������� ������� $ ����� ��������� �������� - ��� ����������� ��������, ��� ��� ������ jQuery ���������
	
	$el.innerHTML = $el.innerHTML + ' 123';
	console.log($el.innerHTML); //���������� ���������� ���� ���������� ��������
	
	var $el1 = $('div');  //���� �� ����� ��������� � ����������� ������ ��������
	var $smth = $el1.find('span'); //���� �� �������� $el1
	console.log($smth);
	
	var $el2 = $('div').parent();  //���� �� ����� ��������� ������������ ������� ���������� � ������� ��������
	console.log($el2);
	
	
	$el1.addClass('red'); //��������� ����� �� ��� ��� ���������� �������� - ������� ����� - $el1.removeClass('red');
	
	$el1.css('background','yellow'); //������������ ��������� ������ ���������� ��������!!!
	$el1.css({						// ����� ��������� � ���� ������ - ��������� �������� - � ������ ����� ����� ��� �������
		margin: '20px', 
		'font-size': '30px' //����� � ������� � �.�. � ������ ������� �.�. �������� �� �������������� �����������... �������� ������ � ��������!
	});
	
	$el1.attr('href','http://google.com'); //��� ����������� ���������!!!
	
	$el1
		.css ('padding', '100px')   //��� ������� ������� - ��������� ������� � ����� ����� �������� ����������� ������ - ���������� �� ������!
		.css ({
			'font-style': 'Arial'
		});
//	$el1.remove();  //�������� ���������� DOM ��������


$('body').append('<a href="#">link</a>'); //���������� ������ DOM ��������!!! - ���� appendChild... ��� ��� ���������� ������� ����� ������ � �� ������ � �� �� - �������� - . #
var $el4 = ('<p></p><a href="#1">smth to add</a>');
$('body').append($el4);

	//$el4.on('click', function() {   // $el4.one - ���� ��� �� 1 ��� ������ ���������� ������� - ������ ���������� �������!!!!!
	//alert('link');
	//});

	$el1.click(function() {   // ����������� �����
	console.log('link');
	});
//	$el1.hover(function() {   //  ��� ��������� - ���������� ������� - ����� 2 ������� - ��� ��������� � ��� �������� �������
//	alert('link');
//	});

	$el1.on('click', function(event){
		$(this).animate({'font-size': '50px'}, 2000, function() {alert('Animation complete');}) //!!! �������� - ����� �������� ��� �������� �� ������� - ����������� ������������������ ��������, ��� � ��.
	});

});