const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("index");
const morgan = require("morgan");
const path = require("path");

const port = process.env.PORT || 3000;
const app = express();

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/index.html"));
});

app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});
