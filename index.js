console.log("start");

window.onload = () => {
  const button = document.getElementById("insert-button");
  console.log(button);
  button.addEventListener("click", (event) => {
    // ボタン押下時の処理
    console.log("click!!");

    // HTML 要素の作成
    const listItem = document.createElement("li");
    listItem.innerHTML = "タスク";
    console.log(listItem);
  });
}
