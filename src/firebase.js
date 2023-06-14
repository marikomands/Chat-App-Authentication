import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxHXYiQ8XY47aEhbVt4g9aqX_LXiVd6Hs",
  authDomain: "chat-app-authentication-55925.firebaseapp.com",
  projectId: "chat-app-authentication-55925",
  storageBucket: "chat-app-authentication-55925.appspot.com",
  messagingSenderId: "621532901608",
  appId: "1:621532901608:web:98ce2310d430b36a5b995d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
