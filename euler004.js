/** Lösung der Problemstellung Euler#004 (https://projecteuler.net/problem=4)
  * Ansatz:
  * - Multiplikation der beiden drei-stelligen Zahlen,
  * - prüfen, ob ein Palindrom vorliegt. 
  * - Falls nein, weiter machen mit der / den nächsten beiden drei-stelligen Zahlen.
  * Funktioniert; Prüfung auf Palindrom ließe sich mit zahl = zahl.reverse noch optimieren.
**/

var i = 0;
var x = 0;
var max = 999;
var min = 100;
var zahl1 = max; 
var zahl2 = max;
var palindrome = [];

var zahlIstPalindrom = function (zahl) {
	var ziffern = zahl.toString();
	var anzahlZiffern = ziffern.length;
	var indexZiffern = ziffern.length - 1;
	var anzahlGleicheZiffern = 0;

  for (var i = 0; i < indexZiffern/2; i++) {
  	if (ziffern[i] === ziffern[indexZiffern-i]) {
  		anzahlGleicheZiffern++;
  	};
  };

	if (anzahlGleicheZiffern === anzahlZiffern/2) {
    	return true;		
	} else {
		return false;
	};
};


while (zahl1 >= min) {
  zahl2 = max;
	while (zahl2 >= min) {
		if (zahlIstPalindrom(zahl1 * zahl2)) {
			palindrome[x] = (zahl1 * zahl2);
			x++;
		};
		zahl2--;
	};
	zahl1--;
};

display(palindrome.sort()[palindrome.length-1] + " ist das größte Palindrom.");