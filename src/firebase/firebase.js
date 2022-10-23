import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getStorage,  } from "firebase/storage";
import { getFirestore,  setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzSS8Kzz49Xc8oVZM_Wcs1l4ZsR-BFUjw",
  authDomain: "chat-for-wife.firebaseapp.com",
  projectId: "chat-for-wife",
  storageBucket: "chat-for-wife.appspot.com",
  messagingSenderId: "366235261088",
  appId: "1:366235261088:web:cde4abe0d92ba79d69d1c5",
  measurementId: "G-1NBPJN0WFZ",
};

 const providers={
   googleProvider: new firebase.auth.GoogleAuthProvider()
 }

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = firebaseApp.auth();
const storage = getStorage(firebaseApp);
export { db, auth, firebase, firebaseApp, storage, setDoc,providers };
