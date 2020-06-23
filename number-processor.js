/* Number Processor
• Write a function to process a sequence of commands:
• Receives an initial number from the input
• Receives a sequence of the following commands: • Inc – add 1 to the number (increment)
• Dec – subtract 1 from the number (decrement) • End – print the number and stop the program
  */

function numberProcessor(num, commands) { 
  let command = commands.shift();

  while (command !== "End" && command != undefined) { 
    switch (command) {
      case "Inc": num++; break;
      case "Dec": num--; break; 
    }
    command = commands.shift(); 
  }

  console.log(num); 
}

numberProcessor(5, ['Inc', 'Inc', "inc", "Inc", `Dec`, "Inc"]);