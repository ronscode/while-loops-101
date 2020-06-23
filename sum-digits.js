/* Problem: Sum Digits
• Write a function to sum the digits of given number • Receives an input number
• Sum its digits and print the sum
  */

function sumDigits(n) { 
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10); 
  }
  console.log(sum); 
  }

sumDigits(5634);
sumDigits(120);

// ALTERNATE SOLUTION
// This next one is doesn't use the while loop, but wanted to show the logic of solving things different ways. 

//.split() - splits the array into a string
// .map() - creates a new array converting the strings into #'s using
// Numbers - converts the strings into integers
// .reduce() - sums up all the items in the array

function sumDigitsAlt(n) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  nArray = n.toString().split("").map(Number);
  console.log(nArray.reduce(reducer));
}

sumDigitsAlt(5634);
sumDigitsAlt(120);