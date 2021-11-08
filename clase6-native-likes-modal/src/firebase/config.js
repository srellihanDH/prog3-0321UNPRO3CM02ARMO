import app from 'firebase/app';
import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXXrVwJfaShPfhCDNiR5xOId4lSF0gwFo",
  authDomain: "rnfirebasestorage-1be81.firebaseapp.com",
  projectId: "rnfirebasestorage-1be81",
  storageBucket: "rnfirebasestorage-1be81.appspot.com",
  messagingSenderId: "266986932311",
  appId: "1:266986932311:web:534c87f2827e0cdd72bb12"
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();