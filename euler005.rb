#!/usr/bin/env ruby

# Solution for problem euler 005
# Computes for a  given number (ENDE) the product of each of its preceeding numbers and calculates the smallest number of this product, which is evenly divisbly by all numbers preceeding the given number (ENDE)
# Does this by going UP from 1 to the product and testing each following number

ENDE = 20
ergebnis = 0

def multipliziere_jede_zahl_bis(ende)
  i = 1
  produkt = 1

  while i <= ENDE do
    produkt = produkt * i
    i = i + 1
  end
  
  return produkt
end

def zahl_ist_teilbar_durch_jede_zahl_bis(zahl, zahl_bis)
  i = zahl_bis
  teilbar = false
  while i > 1
    if ((zahl % i) == 0)
      teilbar = true
    else
      teilbar = false
      i = 0
    end
    i -= 1
  end
  return teilbar
end

x = multipliziere_jede_zahl_bis(ENDE)
i = 2

while i < x do
  if zahl_ist_teilbar_durch_jede_zahl_bis(i, ENDE)
    ergebnis = i
    i = x
  end
  i += 1
end

puts "#{ergebnis} ist die kleinste Zahl, die durch jede Zahl von 1 bis #{ENDE} teilbar ist."