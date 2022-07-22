import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
//7~oHVH6RC7kfiCDAhaqgG8dkz9G5qn0DxuLllxG8EAU8zQVnYZWygQUv8Aq8UjJjCb

const firebaseConfig = {
    apiKey: "AIzaSyCKrNnnlOOBqNTg9iaBCKhJjue2IorMKWk",
    authDomain: "cpu-coe-outcomegenerator.firebaseapp.com",
    projectId: "cpu-coe-outcomegenerator",
    storageBucket: "cpu-coe-outcomegenerator.appspot.com",
    messagingSenderId: "393155624782",
    appId: "1:393155624782:web:454c69dc6eca67774d681f",
    measurementId: "G-P9KPHEKN13"
  };
  
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();
export const auth = getAuth(app);