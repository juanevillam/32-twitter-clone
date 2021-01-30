import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDsab0eKEJWOUcy7iEipin7tmsZCxpvHQ0",
    authDomain: "twitter-clone-e423e.firebaseapp.com",
    projectId: "twitter-clone-e423e",
    storageBucket: "twitter-clone-e423e.appspot.com",
    messagingSenderId: "785022956945",
    appId: "1:785022956945:web:e43827d94c096afa951630"
};

const firebaseApp = firebase.initializeApp( firebaseConfig );

export const db = firebaseApp.firestore();