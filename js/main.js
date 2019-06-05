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

// ここでコレクション名の指定
const collection = db.collection('messages');

// ここでログイン機能のインスタンス化
const auth = firebase.auth();



// フォームのDOM作成
const message = document.getElementById('message');
const messages = document.getElementById('messages');
const form = document.querySelector('form');
const login = document.getElementById('login');
const logout = document.getElementById('logout');


// ログイン、ログアウト処理
login.addEventListener('click',() => {
    auth.signInAnonymously();
});
logout.addEventListener('click',() => {
    auth.signOut();
});

// ユーザーがログインしている場合
auth.onAuthStateChanged(user => {
    if (user) {
      collection.orderBy('created').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === 'added') {
            const li = document.createElement('li');
            li.textContent = change.doc.data().message;
            messages.appendChild(li);
          }
        });
      });
      console.log(`Logged in as: ${user.uid}`);
      login.classList.add('hidden');
      [logout, form, messages].forEach(el => {
        el.classList.remove('hidden');
      });
      message.focus();
      return;
    }
    console.log('Nobody is logged in');
    login.classList.remove('hidden');
    [logout, form, messages].forEach(el => {
      el.classList.add('hidden');
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



