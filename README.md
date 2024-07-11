
# Book Club

## Project Overview

This project implements a virtual book club using Ethereum smart contracts. It allows users to add books, borrow books, return books, check availability, and get book details. The application is built using HTML, CSS, JavaScript, and Solidity.
## Prerequisites

- Node.js
- MetaMask browser extension
- Ethereum test network (e.g., Sepolia)
## Installation

1. Clone the repository:

  git clone https://github.com/your-repo/virtual-book-club.git
  cd virtual-book-club

2. Install Dependencies :
npm install


## Usage

1. Open the HTML file:
Open index.html in your browser.

2. Connect to Wallet:
Click the "Connect to Wallet" button. Ensure MetaMask is installed and connected to an Ethereum test network.

3. Add a Book:
Enter the book title and author, then click "Add Book".

4. Borrow a Book:
Enter the book ID, then click "Borrow Book".

5. Return a Book:
Enter the book ID, then click "Return Book".

6. Check Book Availability:
Enter the book ID, then click "Check Availability".

7. Get Book Details:
Enter the book ID, then click "Get Details".


## File structure

virtual-book-club

-- index.html

-- styles.css

-- script.js

-- BookClub.sol

-- README.md

- index.html: Main HTML file for the application.

- styles.css: CSS file for styling the application.

- script.js: JavaScript file containing the logic to interact with the smart contract.

- BookClub.sol: Solidity smart contract for managing the book club.

- README.md: Project documentation.

## Functions

Solidity Functions

- addBook(string memory title, string memory author)

- Adds a new book to the book club.
- borrowBook(uint bookId)
  Borrows a book from    the book club.
- returnBook(uint bookId)
  Returns a borrowed book to the book club.
- checkAvailability(uint bookId) public view returns (bool)
  Checks if a book is available.
- getBookDetails(uint bookId) public view returns (string memory, string memory, bool)
  Gets details of a book.

JavaScript Functions:

- connectWallet()
  Connects the user's wallet to the application.

- addBook()
  Adds a book to the contract.
- borrowBook()
  Borrows a book from the contract.

- returnBook()
  Returns a book to the contract.

- checkAvailability()
  Checks the availability of a book.

- getBookDetails()
  Gets the details of a book.
## License

[MIT](https://choosealicense.com/licenses/mit/)

This project Book Club is licensed under the MIT license.


## Author

 @RiyaKesharwani [https://github.com/riya102002]


