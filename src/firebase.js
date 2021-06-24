import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDqETN7GNa-xTdpqG3N3J9zgU1I3wGFEJI",
    authDomain: "react-crud-50713.firebaseapp.com",
    databaseURL: "https://react-crud-50713-default-rtdb.firebaseio.com",
    projectId: "react-crud-50713",
    storageBucket: "react-crud-50713.appspot.com",
    messagingSenderId: "820310403972",
    appId: "1:820310403972:web:4c2755898b436e6e96cbd1"
  };
  // Initialize Firebase
 var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();