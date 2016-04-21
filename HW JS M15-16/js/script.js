var GoogleCallback = function(jqueryObj, datas) {
		console.log(datas);
		if (datas.results.length == 0){
				$('footer').append('<div class="searchResult">THERE IS NO RESULTS</div>');
			}
		$.each(datas.results, function(i, context){
				$('footer').append('<div class="searchResult">');
				var results = $('.searchResult');
				$(results[i]).append('<a class="titleResult" href="'+context.url+'">'+context.title+'</a><br>');
				$(results[i]).append('<a class="linkResult" href="'+context.url+'">'+context.url+'</a><br>');
				$(results[i]).append('<span class="contentResult">'+context.content+'</span>');
			}
		)
}

var request = function() {
	$('footer').html('');
	var content = $('#req').val();
	$.ajax({
	url:"http://ajax.googleapis.com/ajax/services/search/web?v=1.0&q="+content+"&callback=GoogleCallback&context=?",
	dataType: 'jsonp'

	});
	return false;	
};

$(function() {

	$('#Go').click(request);

//*********ПРОТОТИПЫ*********	
	
	var human = {
		'class': 'numan',
		gender: 'male',
	}
	
	var worker1 = {
		salary: '2000 UAH',
		toWork: function(){alert('Im working!')}
	}
	
	var student1 = {
		studyIn: 'university',
	}
	
	student1.prototype = human;
	
	worker1.prototype = human;
	
	console.log(human,worker1, student1);
//	worker1.toWork();
	
});	