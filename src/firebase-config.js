import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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

const db = getFirestore(app);
export const auth = getAuth(app);
export let currentUser = undefined;

// export const signInWithGoogle = async () => {
//   const googleProvider = new GoogleAuthProvider();
//   const result = await signInWithPopup(auth, googleProvider)
//   .then((result) => {
//       const user = result.user;
//       return user;
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });

//   currentUser = result;
//   return;
// }