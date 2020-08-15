const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("KnowKlass");
});

app.listen(3000, () => {
  console.log("Server started...");
});
