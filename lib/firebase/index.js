// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, doc, setDoc, onSnapshot } from 'firebase/firestore/lite';
import { useEffect, useMemo, useState } from "react";
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
const useText = (uid) => {

  const [data, setData] = useState(null);
  const defaultText = useMemo(
    () => ({
      text: null
    }),
    []
  )

  useEffect(() => {
    if (!uid) {
      setData(null);
      return;
    }

    const unsub = onSnapshot(doc(db, "text", uid), (doc) => {
      setData(doc.data());
    });

    return unsub;
  }, [defaultText, uid]);

  return data;
}

const writeText = async (uid, text) => {
  const textRef = collection(db, 'text');
  await setDoc(doc(textRef, uid), {
    text
  });
}


export {
  app,
  db,
  writeText,
  // auth,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  useText
}