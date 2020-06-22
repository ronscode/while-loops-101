/* Odd Number
• Write a program to enter an odd number • Takes numbers from the input until an odd
number is entered
• Print the odd number as output
  */

 function findFirstOddNumber(numbers) { 
  let num = numbers.shift();
  while (num % 2 === 0) {  // The number is not odd, read a new one
    num = numbers.shift(); 
  }
  console.log(num); 
}


findFirstOddNumber([2, 4, 8, 3]);

findFirstOddNumber([1, 3, 5]);