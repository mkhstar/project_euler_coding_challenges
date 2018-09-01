//  Problem 1
/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/
function sumOfMultiples() {
  let sum = 0;
  for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  console.log(sum);
}

/////////////////////
// Problem 2
/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
Generate the Fibonacci sequence up to 1000 values
*/
function generateFibonacci() {
  let fibonacciArray = [1, 2];
  for (let i = 1; i < 999; i++) {
    let newValue = fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2];
    fibonacciArray.push(newValue);
  }
  console.log(fibonacciArray);
}

////////////////////////////
// Problem 3
/*
By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/
function sumOfEvenFibonacci() {
  let fibonacciArray = [1, 2];
  let sum = 0;
  while (fibonacciArray[fibonacciArray.length - 1] <= 4000000) {
    if (fibonacciArray[fibonacciArray.length - 1] % 2 === 0) {
      sum += fibonacciArray[fibonacciArray.length - 1];
    }
    let newValue = fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2];
    fibonacciArray.push(newValue);
  }
  console.log(sum);
}

//////////////////////
// Problem 3 Project Euler
/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/

function largestPrimeFactor() {
  let primeFactors = [];
  let value = 600851475143;
  for (let i = 2; i <= value; i++) {
    let exausted = true;
    while (exausted) {
      if (value % i === 0) {
        if (primeFactors.indexOf(i) === -1)
          primeFactors.push(i);
        value = value / i;
      } else {
        exausted = false;
      }
    }
  }
  console.log(primeFactors[primeFactors.length - 1]);
}

////////////////////////
// Problem 4
/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

function largestPalProduct() {
  let largestProduct = 10;
  let arrayValues = [];
  for (let i = 100; i <= 999; i++) {
    for (let j = 100; j <= 999; j++) {
      let product = i * j;
      let productString = product.toString();
      let productReverseString = productString.split('').reverse().join('');
      if (product > largestProduct && productString === productReverseString) {
        largestProduct = product;
        arrayValues = [i, j];
      }
    }
  }
  console.log(largestProduct, arrayValues);
}

///////////////////////
// Problem 5
/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function evenlyDivisible() {
  let numberFound = false;
  let number = 1;
  while (!numberFound) {
    numberFound = true;
    for (let i = 1; i <= 20; i++) {
      if (number % i !== 0)
        numberFound = false;
    }
    numberFound ? number : number++;
  }
  console.log(number);
}