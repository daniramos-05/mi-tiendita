import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API,
  authDomain: process.env.REACT_APP_AUTH,
  projectId: process.env.REACT_APP_PROJECT,
  storageBucket: process.env.REACT_APP_STORAGE,
  messagingSenderId: process.env.REACT_APP_MESSAGIN,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )

