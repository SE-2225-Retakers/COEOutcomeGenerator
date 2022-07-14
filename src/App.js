import React from "react";
import './App.css';
//7~oHVH6RC7kfiCDAhaqgG8dkz9G5qn0DxuLllxG8EAU8zQVnYZWygQUv8Aq8UjJjCb --Project Outcome Generator
//canvas.instructure.com
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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


function App() {
  return (
    <div>
      <h1>
        HELLO WORLD
      </h1>
    </div>
  );
}

export default App;
