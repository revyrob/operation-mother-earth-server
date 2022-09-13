const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", function (req, res) {
  res("Server is up");
});

app.listen(PORT, function () {
  console.log("Hello our server is up and running");
});
