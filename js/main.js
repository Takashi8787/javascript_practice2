// 'use strict';

// const firebaseConfig = {
//   apiKey: "AIzaSyBOjPmh8pH5FGcHefzaWDDlbxty34-nm-A",
//   authDomain: "myportfolioproject-35f4b.firebaseapp.com",
//   databaseURL: "https://myportfolioproject-35f4b.firebaseio.com",
//   projectId: "myportfolioproject-35f4b",
//   storageBucket: "myportfolioproject-35f4b.appspot.com",
//   messagingSenderId: "207571851094",
//   appId: "1:207571851094:web:11cc18ad6ba727fb"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// // ログイン機能
// var ui = new firebaseui.auth.AuthUI(firebase.auth());

// var uiConfig = {
//   callbacks: {
//     signInSuccess: function(currentUser, credential, redirectUrl) {
//       // サインイン成功時のコールバック関数
//       // 戻り値で自動的にリダイレクトするかどうかを指定
//       return true;
//     },
//     uiShown: function() {
//       // FirebaseUIウィジェット描画完了時のコールバック関数
//       // 読込中で表示しているローダー要素を消す
//       document.getElementById('loader').style.display = 'none';
//     }
//   },
//   // リダイレクトではなく、ポップアップでサインインフローを表示
//   signInFlow: 'popup',
//   signInSuccessUrl: '<url-to-redirect-to-on-success>',
//   signInOptions: [
//     // サポートするプロバイダ(メールアドレス)を指定
//     firebase.auth.EmailAuthProvider.PROVIDER_ID,
//   ],
//   // Terms of service url.
//   tosUrl: '<your-tos-url>'
// };

// ui.start('#firebaseui-auth-container', uiConfig);
// // ログイン機能END



// // ここからソースコード

// const db = firebase.firestore();
// // db.settings({
// //   timestampsInSnapshots: true
// // });

// const collection = db.collection('messages');
// // console.log(collection);
// // console.log("collection ok");

// // フォームのDOM作成
// const message = document.getElementById('message');
// const messages = document.getElementById('messages');
// const login = document.getElementById('login');
// const logout = document.getElementById('logout');
// const form = document.querySelector('form');

// collection.orderBy('created').get().then(snapshot => {
//   snapshot.forEach(doc => {
//     const li = document.createElement('li');
//     li.textContent = doc.data().message;
//     messages.appendChild(li);
//   });
// });

// login.addEventListener('click', e => {
//   // firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//   //   // Handle Errors here.
//   //   var errorCode = error.code;
//   //   var errorMessage = error.message;
//   //   // ...

//   // NEW
//   // var config = {
//   //   apiKey: "<API_KEY>",
//   //   authDomain: "<PROJECT_ID>.firebaseapp.com",
//   // };
//   // console.log("aaa");
//   // firebase.initializeApp(config);
//   // console.log("bbb");


//   // new

//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);


// });


// form.addEventListener('submit', e => {
//   e.preventDefault();
  
//   const li = document.createElement('li');
//   li.textContent = message.value;
//   messages.appendChild(li);


//   collection.add({
//     message: message.value,
//     created: firebase.firestore.FieldValue.serverTimestamp()
//   })
//   .then(doc => {
//     console.log(`${doc.id} added!`);
//     message.value = '';
//     message.focus();
//   })
//   .catch(error => {
//     console.log(error);
//   });
// });

// message.focus();

