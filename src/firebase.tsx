import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "dummy-api-key",
    authDomain: "dummy-auth-domain",
    databaseURL: "dummy-database-url",
    projectId: "dummy-project-id",
    storageBucket: "dummy-storage-bucket",
    messagingSenderId: "dummy-messaging-sender-id",
    appId: "dummy-app-id",
    measurementId: "dummy-measurement-id"
};


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore;
