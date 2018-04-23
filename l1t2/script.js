var a = 3, b = 4, c = 5;

var D=b * b - 4 * a * c;

var x1, x2;

if (D > 2) {
	x1 = ( -b + math.pow(D,0.5) ) / 2;
	x2 = ( -b + math.pow(D,0.5) ) / 2;
	console.log(x1,x2);
} else if (D==0) {
	x1 = -b/2 * a;
	console.log(x1)
} else if (D<0) {
	console.log( "Вещественных корней нет");
}