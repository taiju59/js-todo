# Plain JavaScript Todo List Sample

----

補足:

スライドが見切れている場合はスライド内で下にスクロールしてください。

完成形:

https://taiju59.github.io/js-todo/

----

## Initial commit

----

### 手順

1. `index.html` を追加してください

----

### 動作

- `index.html` をブラウザで開き、何もない白いページが表示されること

### 解答例

- <https://github.com/taiju59/js-todo/commit/c1f92ad08b570cfce3dd356d19f27fd8fff4b0e4>

----

## HTML の全体構造作成

----

### 手順

1. progate の「HTMLの全体構造」を参照し、
    空っぽのページを作ってみてください
    - <https://prog-8.com/html/study/1/10#/30>
2. `<head>` 内に `<title>` タグで適宜タイトルを設定してください
3. `<body>` 内に `<h1>` タグで適宜ヘッダーを設定してください

----

### 動作

- ページのタイトル(タブ部分)に設定したタイトルが表示されていること
- ページ内にヘッダーに設定した文字列が表示されていること

### 解答例

- <https://github.com/taiju59/js-todo/commit/68596324fd905490d16606cff1c184020cd43943>

----

## インプットの追加

----

### 学習

- `<input />` タグを使うことで入力欄を表示できます

----

### 手順

1. `<input />` タグを使い、ヘッダーの下に入力欄を追加してください

----

### 動作

- ヘッダーの下に入力欄が表示されていれば OK

### 解答例

- <https://github.com/taiju59/js-todo/commit/d0b1c297b29d30ae1bef6a5632da7b3e58dad846>

----

## ボタンの追加

----

### 学習

- `<button>` タグを使うことで入力欄を表示できます
- タグの間に文字を入れることで、ボタン上に文字を載せることができます

----

### 手順

1. `<input / >` タグの下に「追加」と書かれたボタンを記述してください

----

### 動作

- 入力欄の横に「追加」と書かれたボタンが表示されていれば OK

### 解答例

- <https://github.com/taiju59/js-todo/commit/12b87d70911139fd41e17d00295c4437267160de>

----

## リストの追加

----

### 学習

- `<ul>` タグで使うことで箇条書きのリストを作成できます
- リスト内の各項目は `<li>` タグで表現します
  - 例

      ```html
        <ul>
          <li>項目1</li>
          <li>項目2</li>
          <li>項目3</li>
        </ul>
      ```

----

### 手順

1. ボタンの下に箇条書きのリストを追加してください
2. リストの中にそれぞれ「タスク1」「タスク2」と書かれた項目を追加してください

----

### 動作

- ボタンの下に「タスク1」「タスク2」と書かれた項目が表示されていれば OK

### 解答例

- <https://github.com/taiju59/js-todo/commit/f752572b78822f01d97fe0c04a51cec5cb54624e>

----

## 改行の追加

----

### 学習

- `<br>` タグで使うことで改行ができます

----

### 手順

1. ボタンとリストの間に2つ改行を入れてください

----

### 動作

- ボタンのリストの間のスペースが大きくなっていれば OK
- ここまでで、TODO リストの見た目としては完成です

### 解答例

- <https://github.com/taiju59/js-todo/commit/b72cca51af117beeee90dcf62541174edeceb61d>

----

## JavaScript ファイルの読み込み

----

### 学習

- `<script>` タグで使うことで JavaScript ファイルを読み込むことができます
- `src` 属性を利用することで `<script src="xxxx.js"></script>` のように
  読み込むファイルのパスを指定します
- 通常、 `<script>` タグは HTML の `<head>` 内に記述します

----

### 手順

1. `index.js` というファイルを追加しましょう
2. `index.js` に `console.log("start");` と記述しましょう
3. `index.html` でこれを読み込むよう記述しましょう

----

### 動作

- ページ表示時、コンソールに `start` と表示されれば OK
- ※コンソールは以下の手順で開くことができます
    1. ページ内で右クリック
    2. 検証
    3. Console(開いた開発ツール上部)

### 解答例

- <https://github.com/taiju59/js-todo/commit/e48d0f8858605e23252f74d16a78d2ed12c0ebca>

----

## id の指定と取得(失敗)

----

### 学習

- HTML
  - 要素に `id` 属性を指定できる
    - `id` はページ内で一意であるべきです

      ```html
        <div id="hogehoge"></div>
      ```

- JavaScript
  - `document.getElementById` で特定 `id` の要素を取得できる

    ```js
      const div = document.getElementById("hogehoge");
      console.log(div); // <div id="hogehoge"></div>
    ```

----

### 手順

1. ボタン要素に `insert-button` という `id` を設定しましょう
2. JavaScript で `id` が `insert-button` の要素を取得し、変数に格納しましょう
3. 2 で宣言した変数を `console.log` で出力しましょう

----

### 動作

- ページ表示時、コンソールに `null` と表示されれば OK
  - ※この時点では、ボタン要素の取得に失敗するため、 `null` となります

### 解答例

- <https://github.com/taiju59/js-todo/commit/48662ecc83557099b39e852b6fdec3167d35684f>

----

## HTML 読み込み時に実行

----

### 学習

- JavaScript
  - JavaScript には `window` というグローバル変数があり、
    どこからでもアクセスできる
  - `window.onload` に関数を代入することで、
    HTML 要素の読み込み時に実行される処理を記述できる
  - 例

      ```js
      window.onload = () => {
        console.log("loaded");
      };
      ```

----

### 手順

1. 「idの指定と取得(失敗)」で記述した処理を、
    HTML 要素の読み込み時に実行されるよう修正しましょう

----

### 動作

- ページ表示時、コンソールに以下が出力されれば OK
  - `<button id="insert-button">追加</button>`

### 解答例

- <https://github.com/taiju59/js-todo/commit/4acbec247796ca3c074b2bf05264614a792e6b46>

----

## イベントリスナ登録

----

### 学習

- JavaScript
  - `addEventListener` を用いて、HTML 要素にイベントが
    発生した時の処理を記述することができる
  - 第一引数にイベント名、第二引数にコールバックを指定
    - イベント名には `click`、`input` などがあります
    - 例

  ```js
    button.addEventListener("click", (event) => {
      console.log(event);
    });
  ```

----

### 手順

1. ボタンにクリックイベントのリスナを登録してください
2. 1 で登録したイベントリスナのコールバック内で「click!!」と出力してください

----

### 動作

- ボタンを押してコンソールに「click!!」と出力されれば OK

### 解答例

- <https://github.com/taiju59/js-todo/commit/006cec6fc1e5e65e9b56c7c28e3f0770c2a6ad70>

----

## HTML 要素の作成

----

### 学習

- JavaScript
  - `document.createElement` で第一引数にタグ名を指定し HTML 要素を作成できる
  - HTML 要素には `innerHTML` プロパティでタグの中の HTML を設定できる
  - 例

  ```js
    const divElement = document.createElement("div");
    divElement.innerHTML = "サンプル";
    console.log(divElement); // <div>サンプル</div>
  ```

----

### 手順

1. ボタン押下時に `li` 要素を作成し、任意の変数に格納してください
2. 1 で宣言した変数の `innerHTML` プロパティに `"タスク"` を代入してください
3. 1-2 で作成した要素を `console.log` で出力してください

----

### 動作

- ボタン押下時、コンソールに以下が出力されれば OK
  - `<li>タスク</li>`

### 解答例

- <https://github.com/taiju59/js-todo/commit/410feed37b196efae219b11add17cff9d8f824eb>

----

## HTML 要素の追加

----

### 学習

- JavaScript
  - `appendChild` で HTML 要素に子要素を追加できる

    ```js
      追加先HTML要素.appendChild(追加したいHTML要素)
    ```

----

### 手順

1. HTML 側で `ul` 要素の `id` 属性に `todo-list` と指定してください
2. JavaScript 側で、ボタン押下時、`id` が `todo-list` の要素を取得し、任意の変数に格納してください
3. 2 で取得した HTML 要素に、前章で作成した `li` 要素を追加してください

----

### 動作

- ボタン押下時、リストに「タスク」という項目が追加されていれば OK

### 解答例

- <https://github.com/taiju59/js-todo/commit/6e997cf80a4cb1b670bea4773b2fc7d579b63852>

----

## 入力内容の取得

----

### 学習

- JavaScript
  - インプット要素の `value` プロパティで入力されている内容を取得できる

----

### 手順

1. HTML 側でインプット要素の `id` 属性に `text-input` と指定してください
2. JavaScript 側でボタン押下時、インプット要素を取得してください
    - ※2-3 の処理は、 `li` 要素の作成処理の上に記述しましょう
3. `text` という変数を宣言し、インプット要素に入力されている内容を代入してください
4. 前章で作成した要素の `innerHTML` に `"タスク"` の代わりに 3 で宣言した変数を代入してください

----

### 動作

- ボタン押下時、リストにインプットに入力した内容の項目が追加されていれば OK

### 解答例

- <https://github.com/taiju59/js-todo/commit/9a805f4243a38a8b8787d977da992aee2fd6a57f>

----

## 入力内容のクリア

----

### 学習

- JavaScript
  - インプット要素の `value` プロパティに値を入れることで、入力内容を操作できます

----

### 手順

1. インプット要素の入力内容を取得した後、これに空文字(`""`)を入れてください

----

### 動作

- タスクの追加時、入力内容がクリアされれば OK

### 解答例

- <https://github.com/taiju59/js-todo/commit/b196ab986f1ad05101f3bccec7061418bfd26dae>

----

## 処理の中断

----

### 学習

- JavaScript
  - `return` で関数内の処理が中断される

----

### 手順

1. インプット要素に入力されている値を取り出した直後、
    if 文を用いて、空文字(`""`)と同一の場合 `return` してください

----

### 動作

- 入力内容がない場合、ボタンを押してもタスクが追加されなければ OK

### 解答例

- <https://github.com/taiju59/js-todo/commit/17994e69d9d8f3762d823c5b5d4e9120ffbe1d03>

----

完成 :tada:
おつかれさまでした。
