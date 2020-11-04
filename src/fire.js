import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBZH1AjAxrswQcqQQkWp8WAciVZtnLsWKs",
    authDomain: "login-c7160.firebaseapp.com",
    databaseURL: "https://login-c7160.firebaseio.com",
    projectId: "login-c7160",
    storageBucket: "login-c7160.appspot.com",
    messagingSenderId: "150888979330",
    appId: "1:150888979330:web:21be0b0aaca7fb02450d9b"
  };
  // Initialize Firebase
  const fire=firebase.initializeApp(firebaseConfig);
  export default fire;