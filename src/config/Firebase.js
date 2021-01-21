
import firebase from 'firebase';

const firebaseConfig={
        apiKey: "AIzaSyDCk2SXohN8R51qtJ8IITZYa6PYfFyNLRM",
        authDomain: "desafio-e1238.firebaseapp.com",
        projectId: "desafio-e1238",
        storageBucket: "desafio-e1238.appspot.com",
        messagingSenderId: "1068659462758",
        appId: "1:1068659462758:web:885e806419360a6cdf93a7",
        measurementId: "G-B8CE0JB28F"
      };
      

export default firebase.initializeApp(firebaseConfig);
firebase.analytics();