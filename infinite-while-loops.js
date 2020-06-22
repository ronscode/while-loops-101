

function infiniteWhileLoop(commands) { 
  let command = commands.shift(); 
  while (command !== "End") {
    console.log("Executing: " + command); 
  }
}

infiniteWhileLoop(['One', 'End']);