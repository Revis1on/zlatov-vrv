import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'


// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCCEcnD3QA30Yb1QnRmAR21qvtJR4ssXso",
    authDomain: "zlatovrv-8b49c.firebaseapp.com",
    projectId: "zlatovrv-8b49c",
    storageBucket: "zlatovrv-8b49c.appspot.com",
    messagingSenderId: "1041681272144",
    appId: "1:1041681272144:web:561e0943736bec04763055",
    measurementId: "G-848N2KNRVS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  export const rockStorage = firebase.storage();

  export const rockFirestore = firebase.firestore();