/* Problem: Sum Digits
• Write a function to sum the digits of given number • Receives an input number
• Sum its digits and print the sum
  */

// function sumDigits(n) { 
//   let sum = 0;
//   while (n > 0) {
//     sum += n % 10;
//     n = Math.floor(n / 10); 
//   }
//   console.log(sum); 
//   }

function sumDigitsAlt(n) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
  nArray = n.toString().split("").map(Number);
 
  console.log(nArray.reduce(reducer));
}

// sumDigits(5634);
// sumDigits(120);


sumDigitsAlt(5634);
sumDigitsAlt(120);