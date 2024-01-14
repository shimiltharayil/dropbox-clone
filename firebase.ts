// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqDeg6FtBQYjp1uZpgYY9pQHemVoYpvAU",
  authDomain: "dropbox-clone-57936.firebaseapp.com",
  projectId: "dropbox-clone-57936",
  storageBucket: "dropbox-clone-57936.appspot.com",
  messagingSenderId: "189598701107",
  appId: "1:189598701107:web:8c0c007d5a67a738747546",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
