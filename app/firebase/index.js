import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyCtTrLBAgZiVo44CgLTlkD9iEe2fRgdGm4",
        authDomain: "mean-web-development-1171.firebaseapp.com",
        databaseURL: "https://mean-web-development-1171.firebaseio.com",
        storageBucket: "mean-web-development-1171.appspot.com",
    };

    firebase.initializeApp(config);
}
catch (e) {}

export var firebaseRef = firebase.database().ref();

export default firebase;