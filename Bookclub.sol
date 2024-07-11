// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

contract BookClub {
    struct Book {
        string title;
        string author;
        bool isAvailable;
    }

    mapping(uint => Book) public books;
    uint public bookCount;

    event BookAdded(uint indexed bookId, string title, string author);
    event BookBorrowed(uint indexed bookId, string borrower);
    event BookReturned(uint indexed bookId, string returner);

    // Add a new book
    function addBook(string memory title, string memory author) public {
        bookCount++;
        books[bookCount] = Book(title, author, true);
        emit BookAdded(bookCount, title, author);
    }

    // Borrow a book
    function borrowBook(uint bookId) public {
        require(bookId > 0 && bookId <= bookCount, "Book does not exist");
        require(books[bookId].isAvailable, "Book is not available");

        books[bookId].isAvailable = false;
        emit BookBorrowed(bookId, toString(msg.sender));
    }

    // Return a book
    function returnBook(uint bookId) public {
        require(bookId > 0 && bookId <= bookCount, "Book does not exist");
        require(!books[bookId].isAvailable, "Book is already available");

        books[bookId].isAvailable = true;
        emit BookReturned(bookId, toString(msg.sender));
    }

    // Check if a book is available
    function checkAvailability(uint bookId) public view returns (bool) {
        require(bookId > 0 && bookId <= bookCount, "Book does not exist");

        return books[bookId].isAvailable;
    }

    // Get book details
    function getBookDetails(uint bookId) public view returns (string memory, string memory, bool) {
        require(bookId > 0 && bookId <= bookCount, "Book does not exist");

        Book memory book = books[bookId];
        return (book.title, book.author, book.isAvailable);
    }

    // Helper function to convert address to string
    function toString(address _address) internal pure returns (string memory) {
        bytes32 value = bytes32(uint256(uint160(_address)));
        bytes memory alphabet = "0123456789abcdef";

        bytes memory str = new bytes(42);
        str[0] = '0';
        str[1] = 'x';
        for (uint i = 0; i < 20; i++) {
            str[2 + i * 2] = alphabet[uint8(value[i + 12] >> 4)];
            str[3 + i * 2] = alphabet[uint8(value[i + 12] & 0x0f)];
        }
        return string(str);
    }
}
