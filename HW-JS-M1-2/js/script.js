/*
//ÄÇ 1
var num = prompt ('Enter number');
var pow = prompt ('Enter pow');
num = Math.round(num);
pow = Math.round(pow);
var a = 1;
var result = 1;

while (a <= pow) {
	result = result * num;
	a++;
}
console.log(result);
alert ('Result = ' + result);
*/


//ÄÇ 2
var arr=[];
for (i=0; i < 5; i++) {
	arr[i]=prompt('Enter valid name ' + i);
	while (arr[i] =='') {arr[i]=prompt('Re-Enter valid name ' + i);} 
}
var i=0;
var name = prompt ('Now, enter your name');
while (name =='') {name=prompt('Error! Re-Enter Yor Name');}
	do {
		if (name == arr[i]) {alert('Wellcome, ' + arr[i]); break;} 
		else {i++;
			if (i == arr.length) {alert('Your name is invalid!'); break;}
			}
		}
	while (i <= --arr.length);