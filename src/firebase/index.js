import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBNcHQR_Kz4Vd3lo-ezhcr-ydUbtJQ4LZ8",
  authDomain: "who-is-imposter.firebaseapp.com",
  projectId: "who-is-imposter",
  storageBucket: "who-is-imposter.appspot.com",
  messagingSenderId: "707800828760",
  appId: "1:707800828760:web:a6f0869207e9203e05732d",
  measurementId: "G-8SK8CYY1DQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const logout = () => auth.signOut();

export default firebase;
