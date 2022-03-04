import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtw9EpsjeDFc2xn9fNSU02vnjJEu0oWgM",
  authDomain: "slack-clone-80819.firebaseapp.com",
  projectId: "slack-clone-80819",
  storageBucket: "slack-clone-80819.appspot.com",
  messagingSenderId: "120396537225",
  appId: "1:120396537225:web:2fae3bcd1e58552b189558",
  measurementId: "G-S8QX7G58FQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
// export default db;
