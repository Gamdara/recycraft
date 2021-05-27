import firebase from "firebase/app"
import "firebase/firestore"
import 'firebase/storage';
firebase.initializeApp({
    apiKey: "AIzaSyBcIYLNc9LrU2R6FxslCD9FTMgsR0fmVGI",
    authDomain: "recycraft-de25c.firebaseapp.com",
    projectId: "recycraft-de25c",
    storageBucket: "recycraft-de25c.appspot.com",
    messagingSenderId: "424696410239",
    appId: "1:424696410239:web:092d72255e68f626638f4a"
})
const firestore = firebase.firestore();
let storage = firebase.storage();

export {firestore,storage}
export default firebase;