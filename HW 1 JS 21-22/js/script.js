var num = 2; /*prompt ('Enter number');*/
var pow = 3; /*prompt ('Enter pow');*/
num = Math.round(num);
pow = Math.round(pow);
var a = 1;
var result = 1;

while (a <= pow) {
	result = result * num;
	a++;
}
console.log(result);

module.exports = result;
