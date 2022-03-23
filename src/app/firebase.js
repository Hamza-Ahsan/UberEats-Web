import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDLrctDcIKN7FSeYOSOwnGZHNvhC4eDdj4",
    authDomain: "react-website-o.firebaseapp.com",
    databaseURL: "https://react-website-o.firebaseio.com",
    projectId: "react-website-o",
    storageBucket: "react-website-o.appspot.com",
    messagingSenderId: "458023368790",
    appId: "1:458023368790:web:de8e2b7f594f132730a3f7",
    measurementId: "G-YXYCF92D00"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebaseApp.auth();
  
  export {auth};
  
