import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBOON8Qn3IK62bW5cmR5tPBgcHudzLSmTo",
  authDomain: "facebook-clone-rob.firebaseapp.com",
  projectId: "facebook-clone-rob",
  storageBucket: "facebook-clone-rob.appspot.com",
  messagingSenderId: "1064939299930",
  appId: "1:1064939299930:web:d486423ba92600b291e463",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.FacebookAuthProvider();
const provider2 = new firebase.auth.GoogleAuthProvider();

export { auth, provider, provider2 };
export default db;
