/** Lösung der Problemstellung Euler#001
	* ...
**/

var euler001 = function (ende) {
var sum = 0;

if (ende === undefined) {
	return 0;
};
					
for (var i = 1; i<ende; i++) {
	if (i % 3 === 0) {
		sum = sum + i;
		} else {
			if (i % 5 === 0) {
				sum = sum + i;
		  };
		};
	};
	return sum;
};
		
display("Die Lösung der Aufgabe Euler #001 ist: <strong>" + euler001(1000) + "</strong>");