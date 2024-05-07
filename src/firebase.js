import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBdv4zjOVygBx7VZ_E-pNJ84kivJ2uxNxw",
    authDomain: "somativa-578f1.firebaseapp.com",
    projectId: "somativa-578f1",
    storageBucket: "somativa-578f1.appspot.com",
    messagingSenderId: "287545077870",
    appId: "1:287545077870:web:56d5a141cd862e62dcb67f"
};

firebase.initializeApp(firebaseConfig);

export default firebase;