import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCZcUBbhvvuDo7Sczg_OFg-J7ct5hJ-Umg",
  authDomain: "clone-26ac2.firebaseapp.com",
  databaseURL: "https://clone-26ac2.firebaseio.com",
  projectId: "clone-26ac2",
  storageBucket: "clone-26ac2.appspot.com",
  messagingSenderId: "996047720438",
  appId: "1:996047720438:web:66639929fda4815e5c81d7",
  measurementId: "G-8KZVV0L4KV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
