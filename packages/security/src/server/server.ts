import express from "express";
import { router } from "./api";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use("/api", router);

app.get("/", (_req, res, _next) => {
  res.end("Top Page");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
