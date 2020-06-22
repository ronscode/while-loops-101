/* Problem: Favorite Book
• Write a function to guess for a favorite book, which:
• Receives a favorite book's name
• Receives book names until it reaches the favorite book
• Prints "Book found!" and stops afterwards
• Prints "Invalid book: " + book for all invalid books
  */

function favoriteBook(favoriteBook, books) {
  let book = books.shift();
  while (book !== favoriteBook) {
    console.log(`Invalid book: ${book}`);
    // Read the next book
    book = books.shift();
  }
  console.log("Book found!");
}

favoriteBook('Alice in Wonderland', ['Winnie the Pooh', 'Alice in Wonderland']);