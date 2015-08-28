#!/usr/bin/env ruby

# Solution to problem euler 007: 10.001st prime number

ENDE = 10001
index = 0
nbr = 1
array_of_primes = []

def check_is_prime(nbr)
  k = 2
	while (k < nbr) do
    if ((nbr % k) == 0)
      return false
    end
    k += 1
  end    
	return true
end

while index <= ENDE do
  if check_is_prime(nbr)
    array_of_primes[index] = nbr
    index += 1
  end
  nbr += 1
end

puts "Die #{ENDE}. Primzahl ist #{array_of_primes.last}."
