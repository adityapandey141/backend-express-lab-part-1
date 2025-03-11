const express = require("express");
const { resolve } = require("path");

const app = express();
const port = 3010;

app.use(express.static("static"));

let cors = require("cors");

app.use(cors());
const trackAPI = require("./tracksAPI.js");

app.get("/", (req, res) => {
  res.send("Hello , working");
});

app.use("/tracks", trackAPI);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
