import firebase from 'firebase/app';
import  'firebase/auth';
import  'firebase/database';
import 'firebase/storage'
var firebaseConfig = {
    apiKey: "AIzaSyBz5yLOENhPLa0ZOEI8V1qwL0UTtR4YnLI",
    authDomain: "college-recruitement.firebaseapp.com",
    projectId: "college-recruitement",
    storageBucket: "college-recruitement.appspot.com",
    messagingSenderId: "581863098854",
    appId: "1:581863098854:web:002e752e605a27c3122e27",
    measurementId: "G-293BGR7YY5"
  };
  // Initialize Firebase
  const AppData=firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const database=firebase.database();
  const Storage=firebase.storage();

  export {auth,database,Storage};