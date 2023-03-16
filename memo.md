# memo
## 準備
npm init -w
npm init @eslint/config
npm install eslint-config-prettier@latest prettier@latest --save-dev
npm install typescript@latest --save-dev

- eslint: 静的解析ツール + フォーマッター
- prettier: フォーマッター

昔は eslint から透過的に prettier を使うことがよくやられていたが、最近は lint は eslint, formatter は prettier というように棲み分けして利用するのがスタンダードになっている。
- [いつのまにかeslint\-plugin\-prettierが推奨されないものになってた \| K note\.dev](https://knote.dev/post/2020-08-29/duprecated-eslint-plugin-prettier/)

## workspace
モノレポ構成で、複数のパッケージを作成する方法

## import map
- [JavaScriptのImport Mapsを味方に付けよう \- Qiita](https://qiita.com/tronicboy/items/b822e40b3a2c43597f33)
- [Chrome 89 から使えるようになった importmap を使ってみた](http://var.blog.jp/archives/84173363.html)
ブラウザ上で npm パッケージやローカルのファイルを import するための仕組み

Q. importmap.json を package.json, package-lock.json とかから自動で生成する方法はあるのか？
A. ある

<details>
<summary>方法</summary>

はい、自動的に importmap.json ファイルを生成する方法がいくつかあります。

import-js パッケージを使用する方法
import-js パッケージは、JavaScript プロジェクト用の importmap.json ファイルを自動生成するためのツールです。以下のコマンドでインストールできます。

npm install -g import-js
import-js を使うと、npm パッケージやローカルファイルのインポートを自動で解決し、importmap.json ファイルを自動生成します。以下のコマンドで importmap.json を生成できます。

importjs generate
このコマンドを実行すると、プロジェクトのルートディレクトリに importmap.json ファイルが生成されます。

esinstall パッケージを使用する方法
esinstall パッケージは、npm パッケージをインストールし、importmap.json ファイルを自動生成するためのツールです。以下のコマンドでインストールできます。


npm install -g esinstall
esinstall を使うと、npm パッケージをインストールし、importmap.json ファイルを自動生成できます。以下のコマンドで importmap.json を生成できます。

esinstall --dest . --import-map importmap.json
このコマンドを実行すると、importmap.json ファイルが生成されます。

以上の方法を使用することで、手動で importmap.json ファイルを作成する手間を省くことができます。

</details>


Q. その importmap.json をブラウザで読み込む方法はある？
A. ある

<details>
<summary>方法</summary>

はい、importmap.json ファイルをブラウザで読み込む方法はあります。

importmap.json ファイルを読み込むには、`<script type="importmap">` タグを使用します。以下のように、HTML ファイルに importmap.json ファイルへのパスを記述し、`<script>` タグで読み込みます。

html

``` html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>importmap sample</title>
    <script type="importmap" src="./importmap.json"></script>
  </head>
  <body>
    <h1>importmap sample</h1>
    <script type="module">
      // ES modules を使用したコード
      import { hello } from 'sample-package';
      console.log(hello());
    </script>
  </body>
</html>
```

`<script type="importmap">` タグを使用することで、ブラウザが importmap.json ファイルを読み込み、`<script type="module">` タグ内で import 文を使用する際に、importmap.json ファイルの設定が適用されます。

注意点としては、現在 importmap.json ファイルは、まだ一部のブラウザでしかサポートされておらず、動作が保証されていないことです。また、importmap.json ファイルの設定は、セキュリティ上の問題にも影響を与えるため、信頼できるソースから提供される必要があります。

</details>


## TypeScript では完全には ESModule 準拠してない問題
- [欅樹雑記: 最近のTypeScriptのES Modules対応事情](https://blog.zelkova.cc/2021/10/typescript-esmodules.html)

TypeScript での import 構文は拡張子を省略して書く

``` typescript
import hoge "./hoge"
```

ESModule の import 構文は拡張子を省略せずに書く

``` typescript
import hoge "./hoge.js"
```

tsconfig.json で `"module": "es2015"` を指定した tsc コマンドでトランスパイルした js は拡張子が付いてないので、ブラウザで読み込めない…

``` typescript
import hoge "./hoge"
```

[Native ESM \+ TypeScript 拡張子問題: 歯にものが挟まったようなスッキリしない書き流し](https://zenn.dev/qnighy/articles/19603f11d5f264#*.ts-%E6%8B%A1%E5%BC%B5%E5%AD%90%E3%82%92%E3%81%9D%E3%81%AE%E3%81%BE%E3%81%BE%E6%9B%B8%E3%81%8F%E6%96%B9%E9%87%9D%E3%81%8C%E4%BD%BF%E3%81%88%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%9F)

typescript 5.0 では、 `--moduleResolution bundler` というオプションがはいるっぽい。そのおかげで、 import 構文に `.ts` 拡張子を付けることができるようになるかも。それによって tsc でトランスパイルした後の import 構文は `.js` に変わってくれるのか？

ちなみに deno では ECMAScript module の標準仕様である import 構文では拡張子は省略しないで書く。このように。

``` typescript
import { add, multiply } from "./arithmetic.ts";
```
