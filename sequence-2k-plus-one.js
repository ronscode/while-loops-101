/* Problem: Decreasing Numbers
• Print the numbers from N down to 1, using a while loop
• Write a function which receives number: n
• Print the numbers n ... 1
  */

 function sequence(n) {
  let k = 1;

  while (k <= n) {
    console.log(k);
    k = k * 2 + 1; 
  }
}

sequence(5);
sequence(10);