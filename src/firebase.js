import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyCL4Q9urj0fANTLAkvyAWOX2b3pH-hHKi8",
  authDomain: "netflix-8f97d.firebaseapp.com",
  projectId: "netflix-8f97d",
  storageBucket: "netflix-8f97d.appspot.com",
  messagingSenderId: "959189683159",
  appId: "1:959189683159:web:671cf665554ebdbef4d992"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const functions = getFunctions(app);

export { db, auth, functions };