//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyBfRU63MSGd20VuBEnzjXXewTRdOuuV9sI",
    authDomain: "comp1800ap.firebaseapp.com",
    projectId: "comp1800ap",
    storageBucket: "comp1800ap.appspot.com",
    messagingSenderId: "62794158855",
    appId: "1:62794158855:web:bbdab3f7e70944cc8d2ba2"
  
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
