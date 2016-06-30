import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCtTrLBAgZiVo44CgLTlkD9iEe2fRgdGm4",
    authDomain: "mean-web-development-1171.firebaseapp.com",
    databaseURL: "https://mean-web-development-1171.firebaseio.com",
    storageBucket: "mean-web-development-1171.appspot.com",
};

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
   app: {
     name: 'Todo App',
     version: '1.0.0'
   },
   hobby: 'Reading',
   user: {
       name: 'Tony',
       age: 29
   }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
   console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.on('child_changed', (snapshot) => {
   console.log('Todo changed', snapshot.key, snapshot.val());
});

todosRef.on('child_removed', (snapshot) => {
   console.log('Todo removed', snapshot.key, snapshot.val());
});

todosRef.push({
    text: 'Watch the movie'
});

todosRef.push({
   text: 'Go to work' 
});

