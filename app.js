const express = require("express");
const rgb2hex = require("rgb2hex");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/rgb", (req, res) => {
  const randomColor = [];
  function generateRandomNum() {
    return Math.floor(Math.random() * 255);
  }

  const r = generateRandomNum();
  const g = generateRandomNum();
  const b = generateRandomNum();

  const rgb = `rgb(${r},${g},${b})`;

  res.json({
    hex: rgb2hex(rgb),
    rgb: {
      r: r,
      g: g,
      b: b,
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
