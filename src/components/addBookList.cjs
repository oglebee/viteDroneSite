const firebase = require('firebase'); // Import Firebase

const firebaseConfig = {
    apiKey: "AIzaSyDaWZER7AFKZiy4IWmEo7B5cuvTw9y907g",
    authDomain: "oglebee.firebaseapp.com",
    databaseURL: "https://oglebee-default-rtdb.firebaseio.com",
    projectId: "oglebee",
    storageBucket: "oglebee.appspot.com",
    messagingSenderId: "824664789532",
    appId: "1:824664789532:web:6b7321e36d64eb650385d9",
    measurementId: "G-8N04P1ECKM"
    };

firebase.initializeApp(config);

const db = firebase.firestore();

// Define the collection where you want to add the data (e.g., 'books')
const collection = db.collection('books');


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
  
// Add each book to the collection
newBooks.forEach(async (book) => {
    await collection.add(book);
  });
  
  console.log('Data added to Firestore.');