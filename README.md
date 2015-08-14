# Project Euler

My solutions to different of [Project Euler's](https://projecteuler.net/about) mathematical problems:

Euler001: Multiples of 3 and 5

 * Add the numbers which have a zero modulo 3 or 5.
 
Euler002: Sum of even Fibonacci numbers

 * Populate an array with all fibonacci numbers below a certain threshold,
 * sum up the even (=modulo 2 gives no remainder) numbers from the array of fibonacci numbers.
 * Note: identifying fibonacci numbers with a recursion gets too slow for n > 40 therefore different approach (see code).

Euler003: Largest prime factor of the given number 600,851,475,143.

* This one realy gave me a hard time!
* Finding a solution which worked for 13,195 was quite easy:
	* populate an array with all the factors of the given number,
	* identify the prime numbers in the array with the factors; the last one is the largest prime factor.
* My problem: for numbers greater than 1,000,000,000 (a billion) it took ages; calculated ~200 days of run time for the given number!
* My next solution calculated the prime factors backwards, starting with the largest one to reduce the number of calculations. 
	* Good idea, but identifying whether this (big) number is a prime number still took far too long.
* Finally came across the idea that I only need to calculate from or until the square root of the given number which is a comparable handy number; this works!

Euler004: Largest palindrome product.

* Calculate each product of two 3-digit numbers,
* check for the product, whether it is a palindrome or not,
* store the palindroms in an array,
* find the largest number (=palindrom) in the array.

Euler005: Smallest positive number that is evenly divisible by all of the numbers from 1 to 20.

* Kind of a brute force approach, but it does work
  * going up from 1, as the smallest number is to be found
	* Test whether x can be divided by 1, 2, 3, ... n
	  * yes? done
		* no? try next number
  * do it again until (1 * 2 * 3 * ... * n)