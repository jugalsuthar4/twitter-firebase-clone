import firebase from "firebase";
import dotenv from "dotenv";


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAWbKV9VZlydA8wApKjz9WN7Rtjge_DG9M",
  authDomain: "twitter-firebase-clone-206a7.firebaseapp.com",
  projectId: "twitter-firebase-clone-206a7",
  storageBucket: "twitter-firebase-clone-206a7.appspot.com",
  messagingSenderId: "30859956265",
  appId: "1:30859956265:web:eea52894b352c9e2204c38",
  measurementId: "G-Q08TVQQCTW"
});

const db=firebaseApp.firestore()
const auth=firebaseApp.auth()
const storage = firebaseApp.storage();

export {db,auth,storage}