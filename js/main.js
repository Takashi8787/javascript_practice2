'use strict';

const firebaseConfig = {
  apiKey: "AIzaSyBOjPmh8pH5FGcHefzaWDDlbxty34-nm-A",
  authDomain: "myportfolioproject-35f4b.firebaseapp.com",
  databaseURL: "https://myportfolioproject-35f4b.firebaseio.com",
  projectId: "myportfolioproject-35f4b",
  storageBucket: "myportfolioproject-35f4b.appspot.com",
  messagingSenderId: "207571851094",
  appId: "1:207571851094:web:11cc18ad6ba727fb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// ここからソースコード

const db = firebase.firestore();
// db.settings({
//   timestampsInSnapshots: true
// });

const collection = db.collection('messages');
// console.log(collection);
// console.log("collection ok");

// フォームのDOM作成
const message = document.getElementById('message');
const messages = document.getElementById('messages');
const form = document.querySelector('form');

collection.orderBy('created').get().then(snapshot => {
  snapshot.forEach(doc => {
    const li = document.createElement('li');
    li.textContent = doc.data().message;
    messages.appendChild(li);
  });
});


form.addEventListener('submit', e => {
  e.preventDefault();
  
  const li = document.createElement('li');
  li.textContent = message.value;
  messages.appendChild(li);


  collection.add({
    message: message.value,
    created: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(doc => {
    console.log(`${doc.id} added!`);
    message.value = '';
    message.focus();
  })
  .catch(error => {
    console.log(error);
  });
});

message.focus();

