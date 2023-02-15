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
