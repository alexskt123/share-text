// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged  } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQQNvwZF7eThljjiSfIizdWQXQY9jlzM0",
  authDomain: "share-text-fast.firebaseapp.com",
  projectId: "share-text-fast",
  storageBucket: "share-text-fast.appspot.com",
  messagingSenderId: "698109366384",
  appId: "1:698109366384:web:bd5f8d579a59d35ac0a4b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const auth = getAuth(firebaseConfig);

// Get a list of cities from your database
const getText = async (db) => {
  const textCol = collection(db, 'text');
  const textSnapshot = await getDocs(textCol);
  const textList = textSnapshot.docs.map(doc => doc.data());
  return textList;
}

export {
  app,
  db,
  // auth,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  getText
}