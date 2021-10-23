import firebase from 'firebase';



var firebaseConfig = {
    apiKey: "AIzaSyDH-DQLon6g4h8A3c4L7qeHL5c5heVQTBY",
    authDomain: "login-6a402.firebaseapp.com",
    projectId: "login-6a402",
    storageBucket: "login-6a402.appspot.com",
    messagingSenderId: "244102917021",
    appId: "1:244102917021:web:6cfa5ed54089cc31499d74"
  };
  

  const fire =firebase.initializeApp(firebaseConfig);

  export default fire;