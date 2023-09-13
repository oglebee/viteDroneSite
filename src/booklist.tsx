import { collection, addDoc } from 'firebase/firestore';
import app from './firebase.tsx'; // Import the Firebase configuration

// Function to add a book to Firestore
async function addBookToFirestore(bookData: { title: string; author: string; year: string }) {
  try {
    const db = app;
    const booksCollection = collection(db, 'books');
    const docRef = await addDoc(booksCollection, bookData);
    console.log('Document written with ID:', docRef.id);
  } catch (e) {
    console.error('Error adding document:', e);
  }
}

// Example usage
const newBooks = [
  { title: '1984', author: 'George Orwell', year: '1949' },
  { title: "The Hitchhiker's Guide to the Galaxy", author: 'Douglas Adams', year: '1979' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: '1925' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: '1960' },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: '1951' },
  { title: 'The Martian', author: 'Andy Weir', year: '2011' },
  { title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', year: '2014' },
  { title: 'The Alchemist', author: 'Paulo Coelho', year: '1988' },
  { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', year: '1954' },
  { title: "Harry Potter and the Sorcerer's Stone", author: 'J.K. Rowling', year: '1997' },
];

// Add each book to Firestore
newBooks.forEach((book) => addBookToFirestore(book));

