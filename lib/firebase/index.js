// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc, onSnapshot, query, where, deleteDoc } from 'firebase/firestore';
import { useEffect, useMemo, useState } from 'react';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBQQNvwZF7eThljjiSfIizdWQXQY9jlzM0',
  authDomain: 'share-text-fast.firebaseapp.com',
  projectId: 'share-text-fast',
  storageBucket: 'share-text-fast.appspot.com',
  messagingSenderId: '698109366384',
  appId: '1:698109366384:web:bd5f8d579a59d35ac0a4b5'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const useText = (uid) => {

  const [data, setData] = useState(null);
  const defaultText = useMemo(
    () => ({
      text: null
    }),
    []
  );

  useEffect(() => {
    if (!uid) {
      setData(null);
      return;
    }

    const unsub = onSnapshot(doc(db, 'text', uid), (doc) => {
      setData(doc.data());
    });

    return unsub;
  }, [defaultText, uid]);

  return data;
};

const useArchiveText = (uid) => {
  const [data, setData] = useState(null);
  const defaultText = useMemo(
    () => ({
      text: null
    }),
    []
  );

  useEffect(() => {
    if (!uid) {
      setData(null);
      return;
    }

    const q = query(collection(db, 'archive'), where('uid', '==', uid));
    const unsub = onSnapshot(q, (querySnapshot) => {
      const archiveTextList = [];
      querySnapshot.forEach((doc) => {
        archiveTextList.push({
          ...doc.data(),
          id: doc.id
        });
      });
      archiveTextList.sort(function (a, b) {
        return b.createdAt - a.createdAt;
      });
      setData(archiveTextList);
    });

    return unsub;
  }, [defaultText, uid]);

  return data;
};

const useProfile = (uid) => {
  const [data, setData] = useState(null);
  const defaultProfile = useMemo(
    () => ({
      profile: null
    }),
    []
  );

  useEffect(() => {
    if (!uid) {
      setData(null);
      return;
    }

    const unsub = onSnapshot(doc(db, 'profile', uid), (doc) => {
      setData(doc.data());
    });

    return unsub;
  }, [defaultProfile, uid]);

  return data;
};

const writeText = async (uid, text) => {
  const textRef = collection(db, 'text');
  await setDoc(doc(textRef, uid), {
    text
  });
};

const writeProfile = async (uid, profile) => {
  const profileRef = collection(db, 'profile');
  await setDoc(doc(profileRef, uid), {
    ...profile
  });
};

const archive = async ({ title, text, createdAt, uid }) => {
  if (uid) {
    const archiveRef = collection(db, 'archive');
    await setDoc(doc(archiveRef), {
      title,
      text,
      createdAt,
      uid
    });
  }
};

const deleteArchiveText = async (docID) => {
  await deleteDoc(doc(db, 'archive', docID));
};

export {
  app,
  db,
  writeText,
  archive,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  useText,
  useArchiveText,
  deleteArchiveText,
  useProfile,
  writeProfile
};
