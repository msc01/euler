#!/usr/bin/env ruby

# Solution to problem euler 006: Sum square difference

zahl = ARGV[0].to_i

def sum_of_squares(number_until)
  sum = 0
  i = 1
  while i <= number_until do
    sum += (i * i)
    i += 1
  end
  return sum
end

def square_of_sums(nbr_until)
  sum = 0
  i = 1
  while i <= nbr_until do
    sum += i
    i += 1
  end
  return (sum * sum)
end

puts "Die Summe der Quadrate von #{zahl} ist #{sum_of_squares(zahl)}."
puts "Das Quadrat der Summen von #{zahl} ist #{square_of_sums(zahl)}."
puts "Die Differenz ist #{square_of_sums(zahl) - sum_of_squares(zahl)}."