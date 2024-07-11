let provider;
let signer;
let contract;

// Replace with your contract address and ABI
const contractAddress = '0xf7589633A5E5A08b47d98385331Adb5053B7D641'; // Update with your actual contract address

const contractABI = [
    {
		"inputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "author",
				"type": "string"
			}
		],
		"name": "addBook",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "bookId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "author",
				"type": "string"
			}
		],
		"name": "BookAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "bookId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "borrower",
				"type": "string"
			}
		],
		"name": "BookBorrowed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "bookId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "returner",
				"type": "string"
			}
		],
		"name": "BookReturned",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "bookId",
				"type": "uint256"
			}
		],
		"name": "borrowBook",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "bookId",
				"type": "uint256"
			}
		],
		"name": "returnBook",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "bookCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "books",
		"outputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "author",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isAvailable",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "bookId",
				"type": "uint256"
			}
		],
		"name": "checkAvailability",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "bookId",
				"type": "uint256"
			}
		],
		"name": "getBookDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// Function to connect to the wallet
async function connectWallet() {
    if (window.ethereum) {
        try {
            // Request account access if needed
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log(`Connected account: ${accounts[0]}`);

            // Initialize ethers provider and signer
            provider = new ethers.providers.Web3Provider(window.ethereum);
            signer = provider.getSigner();

            // Create a connection to the smart contract
            contract = new ethers.Contract(contractAddress, contractABI, signer);

            alert('Wallet connected');
        } catch (error) {
            console.error('Failed to connect wallet:', error);
            alert('Failed to connect wallet. Check the console for more details.');
        }
    } else {
        alert('No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.');
    }
}

// Function to add a book
function addBook() {
    // Implement adding a book to the contract
    // Example:
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;

    try {
        contract.addBook(title, author);
        alert('Book added successfully!');
    } catch (error) {
        console.error('Error adding book:', error);
        alert('Error adding book. Check console for details.');
    }
}

// Function to borrow a book
function borrowBook() {
    // Implement borrowing a book from the contract
    // Example:
    const bookId = document.getElementById('borrowBookId').value;

    try {
        contract.borrowBook(bookId);
        alert('Book borrowed successfully!');
    } catch (error) {
        console.error('Error borrowing book:', error);
        alert('Error borrowing book. Check console for details.');
    }
}

// Function to return a book
function returnBook() {
    // Implement returning a book to the contract
    // Example:
    const bookId = document.getElementById('returnBookId').value;

    try {
        contract.returnBook(bookId);
        alert('Book returned successfully!');
    } catch (error) {
        console.error('Error returning book:', error);
        alert('Error returning book. Check console for details.');
    }
}

// Function to check book availability
function checkAvailability() {
    // Implement checking book availability in the contract
    // Example:
    const bookId = document.getElementById('checkBookId').value;

    try {
        const available = contract.checkAvailability(bookId);
        alert(`Book availability: ${available}`);
    } catch (error) {
        console.error('Error checking book availability:', error);
        alert('Error checking book availability. Check console for details.');
    }
}

// Function to get book details
function getBookDetails() {
    // Implement getting book details from the contract
    // Example:
    const bookId = document.getElementById('detailsBookId').value;

    try {
        const details = contract.getBookDetails(bookId);
        alert(`Book details: ${details}`);
    } catch (error) {
        console.error('Error getting book details:', error);
        alert('Error getting book details. Check console for details.');
    }
}

// Add event listener to connect wallet button
document.getElementById('connect').addEventListener('click', connectWallet);
