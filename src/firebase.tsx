import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

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

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore;
