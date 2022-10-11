// initialize
import {
  initializeApp
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';

const firebaseConfig = {
  apiKey: "AIzaSyByZxHNkJ9vCJ4BydB42Hv_Ah9e-Gthe5A",
  authDomain: "thecandycentre-1bd85.firebaseapp.com",
  projectId: "thecandycentre-1bd85",
  storageBucket: "thecandycentre-1bd85.appspot.com",
  messagingSenderId: "132364097455",
  appId: "1:132364097455:web:134e0604f3b43146a2415a"
};

const firebaseApp = initializeApp(firebaseConfig);

// Add Firebase products that you want to use
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  listAll,
  deleteObject
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-storage.js";
//============================================
//============================================
const db = getFirestore();
const auth = getAuth();
let UID;
window.addEventListener('DOMContentLoaded', (event) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      UID = user.uid;
      //Your code...
    }
  });

});

document.getElementById("login-btn").addEventListener('click', function() {
  const loginemail = document.getElementById("login-email").value;
  const loginpassword = document.getElementById("login-password").value;
  //  const auth = getAuth();
  signInWithEmailAndPassword(auth, loginemail, loginpassword).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      window.location.href = 'products.html';
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
