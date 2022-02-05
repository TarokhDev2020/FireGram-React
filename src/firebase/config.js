import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyCzVKM7W9rDzybdkLasSPx7i_3LsCEfK7U",
    authDomain: "firegram01-ef0f3.firebaseapp.com",
    projectId: "firegram01-ef0f3",
    storageBucket: "firegram01-ef0f3.appspot.com",
    messagingSenderId: "911949285771",
    appId: "1:911949285771:web:25b145b30a149c4939478e"
  };
  
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};