import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBktV7Hgp9GwfB9IFHyh4n8eY2iy1KvD50",
    authDomain: "crwn-web-db.firebaseapp.com",
    projectId: "crwn-web-db",
    storageBucket: "crwn-web-db.appspot.com",
    messagingSenderId: "34722297126",
    appId: "1:34722297126:web:2f4e888ecd5de5bdf0bde7",
    measurementId: "G-FZ61CTV826"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;