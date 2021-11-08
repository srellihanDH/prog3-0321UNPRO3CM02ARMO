import app from "firebase/app";
import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAMUbbBQKZLRv0D7Odi4VnOowIRNAANlQ",
  authDomain: "reactnavigation-600a1.firebaseapp.com",
  projectId: "reactnavigation-600a1",
  storageBucket: "reactnavigation-600a1.appspot.com",
  messagingSenderId: "781417187254",
  appId: "1:781417187254:web:8ed3004c9e59e02d9be317",
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();
