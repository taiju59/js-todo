console.log("start");

window.onload = () => {
  const button = document.getElementById("insert-button");
  console.log(button);
  button.addEventListener("click", (event) => {
    // ボタン押下時の処理
    console.log("click!!");
  });
}
