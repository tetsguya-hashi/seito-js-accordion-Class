(() => {
  //アコーディオン全体を取得
  const $elm = document.querySelector("#js-accordion");
  //アコーディオンの中のaタグを取得
  const $trigger = $elm.getElementsByTagName("a");
  //アコーディオンの中のaタグの数を取得
  const triggerLenght = $trigger.length;
  //イベントリスナーをtrigger全てに付ける
  let index = 0;
  while (index < triggerLenght) {
    $trigger[index].addEventListener("click", (e) => clickHandler(e));
    index++;
  }
  //クリックされた時の処理を書く
  const clickHandler = (e) => {
    e.preventDefault();
    //クリックされた要素を取得
    const $target = e.currentTarget;
    //クリックされた要素の子要素を取得
    const $content = $target.nextElementSibling;
    if ($content.style.display === "block") {
      $content.style.display = "none";
    } else {
      $content.style.display = "block";
    }
  };
})();
