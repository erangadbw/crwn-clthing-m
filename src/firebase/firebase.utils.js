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

  //asynch api request
  export const createUserProfileDocument = async (userAuth,...additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if(!snapshot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData

        })
      } catch (error) {
        console.log('error creater user',error.message)
      }
    }

    return userRef;
  };



  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;