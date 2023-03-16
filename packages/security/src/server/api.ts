import express from "express";

export const router = express.Router();

router.use((_req, _res, next) => {
  // simple request の場合はこの設定だけで CORS 対応できてる。が、すべての Origin に対して許可してるのでセキュリティ的に問題あり。基本的には、特定の Origin に対してだけ許可すること
  // res.header("Access-Control-Allow-Origin", "*");

  // preflight request 対応: Access-Control-Allow-Origin で許可された Origin でも、 preflight request が必要な request(特殊なヘッダーがあったり、デフォルトで許可されてないリクエストメソッドをしたいとき) の場合は以下のようにサーバー側でリクエストを受理するための準備をする必要がある。例では X-Token Header を許可している。
  // if (req.method === "OPTIONS") {
  //   res.header("Access-Control-Allow-Headers", "X-Token");
  // }

  next();
});

router.get("/", (_req, res) => {
  res.send({ message: "Hello" });
});

router.use(express.json());
router.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
  res.end();
});
