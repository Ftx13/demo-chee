import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB4Pflm_RE7g9GDCWpYNkh-xMoy4dJih24",
    authDomain: "fir-chee.firebaseapp.com",
    projectId: "fir-chee",
    storageBucket: "fir-chee.appspot.com",
    messagingSenderId: "520325569852",
    appId: "1:520325569852:web:878b45b51f63296dee9239"
};
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };