/** Lösung der Problemstellung Euler#003 (https://projecteuler.net/problem=3):
	* => Größter Primfaktor der Vorgabezahl 600.851.475.143; testweise von 13.195 (=5, 7, 13 und 29).
  * Herangehensweise: Ermittlung der (größten) Teiler der Vorgabezahl, also von "hinten", um die Anzahl der
  *   Teilerermittlungen zu reduzieren. Dann Prüfung des jeweiligen Teilers, ob es eine Primzahl ist.
  *   Im Positivfall kann beendet werden, im Negativfall wird mit der nächsten Zahl weiter gemacht.
**/

/* ---
 * Variablen
**/
var ende = 6851475143; // Zahl, bis zu der gesucht werden soll (600851475143 bzw. 13195)
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

// Funktion display zur Anzeige von Texten im Paragraphen mit der ID "ausgabe" des HTML-Dokuments und parallel über die Console
var display = function(text) {
  var ausgabeParagraph = document.getElementById('ausgabe');
	ausgabeParagraph.innerHTML = ausgabeParagraph.innerHTML + text + "<br>";
	console.log(text);
	return;
};


/* ---
 * Hauptteil
**/

i = ende-1;
while (i > 1) {
	if (ende % i === 0) {
		display(i + " ist ein Teiler von " + ende);
	  if (zahlIstPrimzahl(i)) {
	    display("...und eine Primzahl; somit ist " + i + " der größte Primfaktor von " + ende);
			i=0;
	  };
	};
	i--;
};