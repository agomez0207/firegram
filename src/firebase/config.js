// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_meuUYrZiveXClLaxt0SHgu5IhSKPCAA",
  authDomain: "firegram-d8711.firebaseapp.com",
  projectId: "firegram-d8711",
  storageBucket: "firegram-d8711.appspot.com",
  messagingSenderId: "13075056032",
  appId: "1:13075056032:web:bda9de660f3b22dc53d0c5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore};