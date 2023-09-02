import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDJopKWQw8xuW30GhL_1OCOdR9Xima5C8M",
    authDomain: "olx-clone-75d5c.firebaseapp.com",
    projectId: "olx-clone-75d5c",
    storageBucket: "olx-clone-75d5c.appspot.com",
    messagingSenderId: "262959094189",
    appId: "1:262959094189:web:aee298e2c1a1b8ca8fa924",
    measurementId: "G-1YEP97MVP5"
  };

 export default firebase.initializeApp(firebaseConfig);