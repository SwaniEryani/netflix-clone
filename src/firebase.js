import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB_6FPL863K88dh0L54vgpS_e_biBpKwGA",
  authDomain: "netflix-clone-75f54.firebaseapp.com",
  projectId: "netflix-clone-75f54",
  storageBucket: "netflix-clone-75f54.appspot.com",
  messagingSenderId: "405926605498",
  appId: "1:405926605498:web:8fde94802399710152c883",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();//firestore is the database
const auth = firebase.auth();

export { auth };
export default db;
