- 自動生成した importmap.json を
- ブラウザ(HTMLの仕様)の import map で読み込んで、
- tsc コマンドと
- import 構文の拡張子なし -> import 構文の拡張子あり(.js) を付ける変換処理
を使って、手軽にブラウザで動く js を生成するぞ。
npm パッケージを使いつつ、 ブラウザのために面倒な仕組みをそれほど入れること無くやりたい。(do not use webpack!)


# memo
``` typescript
type NonEmptyArray2<T> = [...T[]];
type NonEmptyArray<T> = [T, T, ...T[]];
const array: NonEmptyArray2<number> = [];

const hoge = <T extends number>(array: [T, ...T[]]) => {
  return array;
};

const hoge2 = (array: [number, ...number[]]) => {
  return array;
};

hoge([]);

hoge2("");

const concat1 = <T>(...args: T[]): T[] => {
  return args;
};

concat1([1, 2]);

const concat2 = <T>(args: [...T[]]): T[] => {
  return args;
};

concat2([23, 3]);
```
