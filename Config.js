import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDcBi-qRwliiBNkcOw3_yL2fVSnoDRAmQA",
    authDomain: "storyhub-13259.firebaseapp.com",
    projectId: "storyhub-13259",
    storageBucket: "storyhub-13259.appspot.com",
    messagingSenderId: "651635316907",
    appId: "1:651635316907:web:8a4302e93b6d91edb4bfee"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
