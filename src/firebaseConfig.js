import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB1Yq31V18YSfavKv2cJKAFlcXJYtjgfnI",
  authDomain: "mi-tiendita-fb.firebaseapp.com",
  projectId: "mi-tiendita-fb",
  storageBucket: "mi-tiendita-fb.firebasestorage.app",
  messagingSenderId: "522389095880",
  appId: "1:522389095880:web:effc2c6e403c39acd46cfd",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )

