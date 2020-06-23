/* Problem: Decreasing Numbers
• Print the numbers from N down to 1, using a while loop
• Write a function which receives number: n
• Print the numbers n ... 1
  */

function decreasingNumbers(n) { 
  while (n > 0) {
    console.log(n); 
    n--;  
  }
}

  decreasingNumbers(5);
  decreasingNumbers(10);
