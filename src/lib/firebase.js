import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


console.log(process.env.REACT_APP_API_KEY);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "reactchat-d57cb.firebaseapp.com",
  projectId: "reactchat-d57cb",
  storageBucket: "reactchat-d57cb.appspot.com",
  messagingSenderId: "701675269212",
  appId: "1:701675269212:web:b12dd64f1411ea03ba4a99"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore();
export const storage = getStorage()

