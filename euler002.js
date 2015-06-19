/** Lösung der Problemstellung Euler #002
	*
	*
**/

var euler002 = function () {
var f = [1, 2];
var i = 1;
var x = 0;
sum = 0;
			
do {
	i = i + 1;
	f[i] = (f[(i - 1)] + f[(i - 2)]);
	} while (f[i] < 4000000);
	f.pop();
			
	for (var n in f) {
		x = f[n];
		if (x % 2 === 0) {
			sum = sum + x;
		};
	};

	return sum;
};

display("Die Lösung der Aufgabe Euler #002 ist: <strong>" + euler002() + "</strong>");

		
/** 		
	* Rekursive Berechnung der Fibonacci-Zahlen
	* Vorsicht: wird ab n === 40 sehr langsam!
				
		var fib = function(n) {
			if (n === 0) {
				return 1;
			}
			else {
				if (n === 1) {
					return 2;
				} else {
				return fib(n-1) + fib(n-2);
			}				
		}
**/