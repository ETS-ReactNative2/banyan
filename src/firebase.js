// import and configure firebase
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyALPsSU0sZl4MF31cNkTUw1j7Q-J4hXSuU",
    authDomain: "amrita-629d8.firebaseapp.com",
    databaseURL: "https://amrita-629d8.firebaseio.com",
    projectId: "amrita-629d8",
    storageBucket: "",
    messagingSenderId: "805973671467"
}
export const firebaseApp = firebase.initializeApp(firebaseConfig)
