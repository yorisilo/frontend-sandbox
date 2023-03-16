(function (global) {
  var num = 100;
  function add100(a) {
    return a + num;
  }

  // 即時関数の中はスコープが切られているので、 global オブジェクトに関数を追加したりして対応していた
  // global.add100 = add100;
  // 関数名が global オブジェクト内のものとかぶると困るので、自分でスコープをそれっぽく定義していたりしていた。
  // ランタイムに namespace という概念が無いので、こういうふうに運用でカバーしてた。
  global.MY_APP.add100 = add100;
})(window);
