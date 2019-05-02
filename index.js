console.log("start");

window.onload = () => {
  const button = document.getElementById("insert-button");
  console.log(button);
  button.addEventListener("click", (event) => {
    // ボタン押下時の処理
    console.log("click!!");

    // 入力内容の取得
    const input = document.getElementById("text-input");
    const text = input.value;
    if (text === "") {
      // 処理の中断
      return;
    }
    // 入力内容のクリア
    input.value = "";

    // HTML 要素の作成
    const listItem = document.createElement("li");
    listItem.innerHTML = text;
    console.log(listItem);

    // タスクの追加
    const todoList = document.getElementById("todo-list");
    todoList.appendChild(listItem);
  });
}
