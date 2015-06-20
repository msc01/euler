/** Lösung der Problemstellung Euler#003 (https://projecteuler.net/problem=3):
	* => Größter Primfaktor der Vorgabezahl 600.851.475.143; testweise von 13.195 (=5, 7, 13 und 29).
  * Herangehensweise: Ermittlung der (größten) Teiler der Vorgabezahl, also von "hinten", um die Anzahl der
  *   Teilerermittlungen zu reduzieren. Es müssen nur die Teiler ab/bis zur Wurzel der Vorgabezahl gesucht werden!
  *   Dann Prüfung des jeweiligen Teilers, ob es eine Primzahl ist.
  *   Im Positivfall kann beendet werden, im Negativfall wird mit der nächsten Zahl weiter gemacht.
**/

/* ---
 * Variablen
**/
var vorgabeZahl = 600851475143; // Zahl, bis zu der gesucht werden soll
var schranke = Math.round(Math.sqrt(vorgabeZahl)); // Es müssen nur die Teiler ab/bis zur Wurzel der Vorgabezahl gesucht werden!
var i = 0; // Zähler

/* ---
 * Funktionen
**/

// Funktion zur Ermittlung, ob eine übergebene Zahl eine Primzahl ist
var zahlIstPrimzahl = function (zahl) {
	for (var k = 2; k < zahl; k++) {
		if (zahl % k === 0) {
		  return false;
		};
	};
	return true;
};

/* ---
 * Hauptteil
**/

i = schranke;
while (i > 1) {
	if (vorgabeZahl % i === 0) {
		display(i + " ist ein Teiler von " + vorgabeZahl);
	  if (zahlIstPrimzahl(i)) {
	    display("...und eine Primzahl!");
			i=0;
	  };
	};
	i--;
};