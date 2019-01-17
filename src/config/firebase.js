import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDy9qvQek-tpqS5p-5Pj9gXzk-ZfWUlOag",
    authDomain: "react-gallery-3e44f.firebaseapp.com",
    databaseURL: "https://react-gallery-3e44f.firebaseio.com",
    projectId: "react-gallery-3e44f",
    storageBucket: "react-gallery-3e44f.appspot.com",
    messagingSenderId: "626158983469"
};

const FirebaseApp = firebase.initializeApp(config);

export default FirebaseApp;