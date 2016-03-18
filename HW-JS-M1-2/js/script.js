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
var arr = [prompt ('Enter valid name1'),prompt ('Enter valid name2'),prompt ('Enter valid name3'),prompt ('Enter valid name4'),prompt ('Enter valid name5')]
var name = prompt ('Now, enter your name');
var a=0;
	do 
		if (name = arr[a]) {alert('Wellcome, ' + arr[a]);} 
		else {alert('Your name is invalid! Goodbuy!');}
		a++; //îøèáêà?????
	while (a<=5);