// @ts-nocheck
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAT5Db5O6BXMgk8k4sWGQx4Igy4KQ4NQkU",
    authDomain: "shop-26453.firebaseapp.com",
    databaseURL: "https://shop-26453.firebaseio.com",
    projectId: "shop-26453",
    storageBucket: "shop-26453.appspot.com",
    messagingSenderId: "1059850565433",
    appId: "1:1059850565433:web:42b4cb5556e2cb30975ae8"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;