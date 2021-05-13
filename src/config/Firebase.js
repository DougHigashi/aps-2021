import * as firebase from 'firebase';

import "firebase/auth";
import "firebase/firestore";



// Initialize Firebase
 var firebaseConfig = {
    apiKey: "AIzaSyBCtr_Rtk7RyhR_ZtquCDjW6ZJH0Yu_hS0",
    authDomain: "abvd-21.firebaseapp.com",
    databaseURL: "https://abvd-21-default-rtdb.firebaseio.com",
    projectId: "abvd-21",
    storageBucket: "abvd-21.appspot.com",
    messagingSenderId: "1066385749096",
    appId: "1:1066385749096:web:786310530374c47261b7dd",
    measurementId: "G-QPF2V77QKL"
};

let app;

if(firebase.apps.length === 0){
   app= firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}

export default firebase;
export const auth = firebase.auth()
export const database = firebase.firestore();
