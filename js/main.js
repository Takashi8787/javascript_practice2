'use strict';
{
  // 変数宣言
  const todos = [];  // タスクリスト格納

  const newItem = document.getElementById('newItem');
  const todoList = document.getElementById('todo-list');
  const addBtn = document.getElementById('addBtn');
  const allBtn = document.getElementById('allBtn');
  const doingBtn = document.getElementById('doingBtn');
  const doneBtn = document.getElementById('doneBtn');


  // ■■■  ファンクション定義
  // SHOWメソッド
  function show(){
    // Task表示要素の初期化
    while(todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }

    // Todoリスト配列の各要素をループ処理で表示
    // forEach文
    todos.forEach(( todo, index ) => {
      // li要素(タスク名)の追加
      const li = document.createElement("li");
      li.textContent = `${index}: ${todo}`;
      todoList.appendChild(li);

      // ◆◆◆ 状態ボタン
      // button要素　削除ボタンの追加
      const statusBtn = document.createElement("button");
      statusBtn.textContent = "作業中";
      li.appendChild(statusBtn);

      // 状態ボタンが押されたときの挙動
      statusBtn.addEventListener('click', () => {
        console.log(`状態ボタンPUSH時のindex値：${index}`);
        // statusChange();
        switch (statusBtn.textContent) {
          case '作業中':
            statusBtn.textContent = '完了';
            break;
          case '完了':
          statusBtn.textContent = '作業中';
            break;
          default:
          console.log("エラーが発生しました。");
        }
      });


      // ◆◆◆ 削除ボタン
      // button要素　削除ボタンの追加
      const deleteBtn = document.createElement("button");
      // deleteBtn.id = "deleteBtn"
      deleteBtn.textContent = "削除";
      li.appendChild(deleteBtn);

      // 削除ボタンが押されたときの挙動
      deleteBtn.addEventListener('click', () => {
        remove(index);
      });


    });
  };

  // 削除ボタンクリック時のメソッド
  function remove(index){
    todos.splice(index, 1);
    show();
  };



  // ADD（追加）ボタンが押されたときの処理
  addBtn.addEventListener('click', (event) => {
    // 入力された値をtodos配列に追加
    todos.push(newItem.value);

    show();   // showメソッドの呼び出し
  });


  // ラジオボタンによる表示切り替え
  // （全て）ボタンが押されたときの処理
  allBtn.addEventListener('click', (event) => {
    // 入力された値をtodos配列に追加
    show();   // showメソッドの呼び出し
  });

  // （作業中）ボタンが押されたときの処理
  allBtn.addEventListener('click', (event) => {
    // 入力された値をtodos配列に追加
    show();   // showメソッドの呼び出し
  });







}
