// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUoMzD8fdip3Oog3rb4jFLdS4vTHqybuI",
  authDomain: "estore-react-922c8.firebaseapp.com",
  projectId: "estore-react-922c8",
  storageBucket: "estore-react-922c8.appspot.com",
  messagingSenderId: "36464998952",
  appId: "1:36464998952:web:69254f1256a6d77180131d",
  // databaseURL: "https://estore-react-922c8-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const database = getFirestore(app);
const storage = getStorage(app);
export const provider = new GoogleAuthProvider(app);
export { database, storage};