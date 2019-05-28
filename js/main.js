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
console.log(db);
console.log("ok01");
// db.settings({
//   timestampsInSnapshots: true
// });

const collection = db.collection('messages');
console.log(collection);
console.log("collection ok");

collection.add({
  message: 'test'
})
.then(doc => {
  console.log(`${doc.id} added!`);
  console.log("ok04");
})
.catch(error => {
  console.log(error);
});


console.log(collection);
console.log("collection ok2");
