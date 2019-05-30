

var app = new Vue({
  el: '#app' ,
  data: {
    idFlg: 0,  // ID番号設定Flg,１つずつ数値上げていく
    newItem: '',  // テキストボックスに入力されたタスク名
    status: 'all-list-v',  // ラジオボタンの
    todos: [],  // Todoタスク格納 オブジェクト配列
  },
  methods: {
    // 【処理】新規タスクを todos[] に追加するメソッド
    addTasks: function(){
      if(this.newItem != ''){
        // 新規入力タスクをtodo変数に格納
        var todo = {
          id: this.idFlg,
          item: this.newItem,
          isDone: false,
        };
        // オブジェクトを配列に追加
        this.todos.push(todo);

        // 入力ボックスを初期化
        this.newItem = '';
        // 次回のidナンバーを更新
        this.idFlg++;
      // タスク未入力なら終了  
      }; 
    },
    // 【処理】削除ボタン押下の処理
    deleteItem: function(id){
      if(confirm(' Are you sure? ID:' + id)){
        // 削除対象IDを持つデータのみfilterで除く
        this.todos = this.todos.filter( todo => todo.id != id );
      };
    },
    // 【処理】状態ボタン（作業中・完了）クリック時の処理
    changeStatus: function(id){
      for(let i=0; i<this.todos.length; i++ ){
        // idが一致したものだけ、処理する
        if( this.todos[i].id === id ){
          // isDoneの反転と表示文字の変更
          this.todos[i].isDone = !this.todos[i].isDone;
        }
      };
    },
  },

  // 算出プロパティ
  computed: {
    // 表示するオブジェクトデータのみ返す
    todosDisplay: function() {
      // ラジオボタンの状態によって、表示するtodos配列を返す
      if( this.status === 'all-list-v'){
        return this.todos;
      } else if ( this.status === 'doing-list-v') {
        return this.todos.filter( todo => !todo.isDone);
      } else if ( this.status === 'donelist-v'){
        return this.todos.filter( todo => todo.isDone);
      } else {console.log("エラーが発生しました");
      };
    },
    // 課題範囲外。残タスク数表示メソッド
    remaining: function() {
      var items = this.todos.filter(function(todo){
        return !todo.isDone;
      });
      return items.length;
    },
  }

})
